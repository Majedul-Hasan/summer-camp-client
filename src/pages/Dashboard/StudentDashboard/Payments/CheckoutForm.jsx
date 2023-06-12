import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import './CheckoutForm.css';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { swalWithBootstrapButtons } from '../../../../util/swalWithBootstrapButtons';

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price }).then((res) => {
        console.log(res.data.clientSecret, price);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log('payment intent', paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        courseItems: cart.map((item) => item.courseId),

        status: 'service pending',
        itemNames: cart.map((item) => item.name),
      };
      axiosSecure.post('/payments', payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          // display confirm
          console.log(res.data.insertResult.insertedId);
          //   alert(res.data.insertResult.insertedId);
          swalWithBootstrapButtons.fire(
            'Your purchase was successfull',
            `${res.data.insertResult.insertedId}`,
            'success'
          );
        }
      });
    }
  };

  return (
    <>
      <form
        className='w-2/3 m-8 '
        onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#5a64b1',
                '::placeholder': {
                  color: '#2e4861',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'
          type='submit'
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
      {transactionId && (
        <p className='text-green-500'>
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
