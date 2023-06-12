import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const InstructorHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [] } = useQuery({
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
        <title>summer camp school | InstructorHome</title>
      </Helmet>
      <h2>InstructorHome</h2>
    </div>
  );
};

export default InstructorHome;
