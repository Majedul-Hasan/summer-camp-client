import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className='progress w-56'></progress>;
  }

  if (user && role?.role === 'instructor') {
    return children;
  }
  return (
    <Navigate
      to='/'
      state={{ from: location }}
      replace></Navigate>
  );
};

export default InstructorRoute;
