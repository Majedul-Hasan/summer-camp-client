import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import {
  userDelete,
  userMakeAdmin,
  userMakeInstructor,
} from './allusersActions';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      // const res = await fetch(`${import.meta.env.VITE_API}/users`);
      // const res = await axiosSecure.get('/users');
      // return res.data;
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    userMakeAdmin(user, refetch);
  };
  const handleMakeInstructor = (user) => {
    userMakeInstructor(user, refetch);
  };
  const handleDelete = (user) => {
    userDelete(user, refetch);
  };

  return (
    <div className='w-full'>
      <Helmet>
        <title>summer camp school | All users</title>
      </Helmet>
      <h3 className='text-3xl font-semibold my-4'>
        Total Users: {users.length}
      </h3>
      <div className='overflow-x-auto'>
        <table className='table  w-full'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin'
                    ? 'admin'
                    : user.role === 'instructor'
                    ? 'instructor'
                    : 'student'}
                </td>
                <td>
                  <button
                    className='mx-1 bg-green-200  text-green-700 p-2 dark:bg-green-700 dark:text-green-200 rounded-md'
                    onClick={() => handleMakeAdmin(user)}>
                    <MdOutlineAdminPanelSettings />
                  </button>

                  <button
                    className='mx-1 bg-violet-200  text-violet-700 p-2 dark:bg-violet-700 dark:text-violet-200 rounded-md'
                    onClick={() => handleMakeInstructor(user)}>
                    <GiTeacher />
                  </button>

                  <button
                    className='mx-1 bg-red-200  text-red-700 p-2 dark:bg-red-700 dark:text-red-200 rounded-md'
                    onClick={() => handleDelete(user)}>
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

export default AllUsers;

/**
  
 
 (
                    <button
                      onClick={() => (user)}
                      className='btn btn-ghost bg-orange-600  text-white'>
                      <FaUserShield></FaUserShield>
                    </button>
                  ) 
 
 */
