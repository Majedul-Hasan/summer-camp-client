import { Helmet } from 'react-helmet-async';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import { TiTick } from 'react-icons/ti';
import { GiTeacher } from 'react-icons/gi';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillArrowUpRightCircleFill } from 'react-icons/Bs';
import { courseMakeActive } from './ManageCoursesActions';

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

  const handleActive = (user) => {
    courseMakeActive(user, refetch);
  };

  return (
    <div className='w-full'>
      <Helmet>
        <title>summer camp school | All users</title>
      </Helmet>
      <h3 className='text-3xl font-semibold my-4'>
        Total Users: {classes.length}
      </h3>
      <div className='overflow-x-auto'>
        <table className='table  w-full'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name of course</th>
              <th>instructor</th>
              <th>status</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td className='flex items-center'>
                  <span>{singleClass.name}</span>

                  <Link
                    className='text-xl text-purple-500'
                    to={`/courses/${singleClass._id}`}>
                    <BsFillArrowUpRightCircleFill />{' '}
                  </Link>
                </td>
                <td>{singleClass.instructorName}</td>
                <td>{singleClass.status}</td>
                <td>
                  <button
                    className='mx-1 bg-green-200 text-xl  text-green-700 p-1 dark:bg-green-700 dark:text-green-200 rounded-md'
                    onClick={() => handleActive(singleClass)}>
                    <TiTick />
                  </button>

                  <button
                    className='mx-1 bg-violet-200  text-violet-700 p-2 dark:bg-violet-700 dark:text-violet-200 rounded-md'
                    onClick={() => handleMakeInstructor(singleClass)}>
                    <GiTeacher />
                  </button>

                  <button
                    className='mx-1 bg-red-200  text-red-700 p-2 dark:bg-red-700 dark:text-red-200 rounded-md'
                    onClick={() => handleDelete(singleClass)}>
                    <FaTrashAlt></FaTrashAlt>
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
