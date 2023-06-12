import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { BsFillArrowUpRightCircleFill } from 'react-icons/Bs';

import { MdOutlinePending } from 'react-icons/md';

import { FiEdit } from 'react-icons/fi';

const MyCourses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ['myClasses'],

    queryFn: async () => {
      const res = await axiosSecure.get(`/my-corses?email=${user?.email}`);
      // const res = await fetch(`${import.meta.env.VITE_API}/users`);
      // const res = await axiosSecure.get('/users');
      // return res.data;
      return res.data;
    },
  });
  console.log(myClasses);

  return (
    <div className='w-full mt-1'>
      <Helmet>
        <title>summer camp school | myClasses</title>
      </Helmet>

      <section className='h-full'>
        <div className='text-center dark:text-blue-200 my-10'>
          <h2 className='text-3xl uppercase text-center my-5 font-bold'>
            My Corses
          </h2>
        </div>
        <div className='overflow-x-auto'>
          <table className='table  w-full'>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name of course</th>
                <th>detail</th>
                {/* <th>instructor</th>
                <th>Email</th> */}
                <th>Seats</th>
                <th>Price</th>
                <th>adminFeedback</th>
                <th>status</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {myClasses?.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className='w-20'
                      src={singleClass.image}
                      alt=''
                    />
                  </td>
                  <td>
                    <span>{singleClass.name}</span>
                  </td>
                  <td>
                    {' '}
                    <Link
                      className='text-xl text-purple-500'
                      to={`/courses/${singleClass._id}`}>
                      <BsFillArrowUpRightCircleFill />{' '}
                    </Link>
                  </td>
                  {/* <td>{singleClass.instructorName}</td>
                  <td>{singleClass.instructorEmail}</td> */}
                  <td>{singleClass.seats}</td>
                  <td>${singleClass.price}</td>
                  <td>{singleClass?.adminFeedback}</td>
                  <td>{singleClass.status}</td>
                  <td className='flex flex-col gap-2'>
                    <Link
                      to={`/dashboard/update-corses/${singleClass._id}`}
                      className='mx-1 bg-green-200 text-xl  text-green-700   disabled:bg-gray-200 p-1   rounded-md'>
                      <FiEdit />
                    </Link>

                    <button
                      className='mx-1 bg-yellow-200  text-yellow-700 p-1 text-xl dark:bg-yellow-700 dark:text-yellow-200 rounded-md disabled:bg-gray-200  disabled:text-gray-700 '
                      onClick={() => handlePending(singleClass)}
                      disabled={singleClass.status === 'pending'}>
                      <MdOutlinePending />
                    </button>
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

export default MyCourses;
