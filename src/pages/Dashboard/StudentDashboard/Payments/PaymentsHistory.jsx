import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

const PaymentsHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-history?email=${user?.email}`
      );
      // const res = await fetch(`${import.meta.env.VITE_API}/users`);
      // const res = await axiosSecure.get('/users');
      // return res.data;
      return res.data;
    },
  });
  console.log(payments);

  return (
    <div className='w-full mt-1'>
      <Helmet>
        <title>summer camp school | Payment history</title>
      </Helmet>

      <section className='h-full my-10'>
        <div>
          <h2 className='text-3xl uppercase text-center my-5 font-bold'>
            My Payment History
          </h2>
        </div>
        <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
          {/* <h3 className='text-3xl'>Total Items: {cart.length}</h3>
          <h3 className='text-3xl'>Total Price: ${total}</h3> */}
        </div>

        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>

                <th>transactionId</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.transactionId}</td>
                  <td>
                    {item.itemNames.map((x, i) => (
                      <p key={i}>{x}</p>
                    ))}
                  </td>
                  <td className='text-end'>${item.price}</td>
                  <td>
                    <Link>Continue class </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PaymentsHistory;
