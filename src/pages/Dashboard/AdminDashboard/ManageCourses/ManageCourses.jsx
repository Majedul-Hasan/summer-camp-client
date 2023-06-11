import { Helmet } from 'react-helmet-async';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import { TiTick } from 'react-icons/ti';
import { MdOutlinePending } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { BsFillArrowUpRightCircleFill } from 'react-icons/Bs';
import {
  courseDenied,
  courseMakeActive,
  courseMakePending,
} from './ManageCoursesActions';
import { ImCross } from 'react-icons/Im';

const ManageCourses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axiosSecure.get('/courses');
      // const res = await fetch(`${import.meta.env.VITE_API}/users`);
      // const res = await axiosSecure.get('/users');
      // return res.data;

      return res.data;
    },
  });

  const handleActive = (course) => {
    courseMakeActive(course, refetch);
  };
  const handlePending = (course) => {
    courseMakePending(course, refetch);
  };
  const handleDenied = (course) => {
    courseDenied(course, refetch);
  };
  const activeCount = classes?.filter((x) => x.status === 'active')?.length;

  return (
    <div className='w-full'>
      <Helmet>
        <title>summer camp school | All users</title>
      </Helmet>
      <h3 className='text-3xl font-semibold my-4'>
        Total active courses: {activeCount}
      </h3>
      <div className='overflow-x-auto'>
        <table className='table  w-full'>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name of course</th>
              <th>detail</th>
              <th>instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>status</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((singleClass, index) => (
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
                <td>{singleClass.instructorName}</td>
                <td>{singleClass.instructorEmail}</td>
                <td>{singleClass.seats}</td>
                <td>${singleClass.price}</td>
                <td>{singleClass.status}</td>
                <td className='flex flex-col gap-2'>
                  <button
                    className='mx-1 bg-green-200 text-xl  text-green-700 p-1 dark:bg-green-700 dark:text-green-200 rounded-md'
                    onClick={() => handleActive(singleClass)}>
                    <TiTick />
                  </button>

                  <button
                    className='mx-1 bg-yellow-200  text-yellow-700 p-1 text-xl dark:bg-yellow-700 dark:text-yellow-200 rounded-md'
                    onClick={() => handlePending(singleClass)}>
                    <MdOutlinePending />
                  </button>

                  <button
                    className='mx-1 bg-red-200  text-red-700 p-2 dark:bg-red-700 dark:text-red-200 rounded-md'
                    onClick={() => handleDenied(singleClass)}>
                    <ImCross></ImCross>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
