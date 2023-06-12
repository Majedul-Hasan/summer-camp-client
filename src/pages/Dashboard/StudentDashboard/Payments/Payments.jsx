import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet-async';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2)); //dfiji

  return (
    <div className='w-full mt-1'>
      <Helmet>
        <title>summer camp school | Payments</title>
      </Helmet>

      <section className='h-full'>
        <div className='text-center dark:text-blue-200'>
          <p className=''>please process</p>
          <h2>Payment</h2>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm
            cart={cart}
            price={price}></CheckoutForm>
        </Elements>
      </section>
    </div>
  );
};

export default Payment;
