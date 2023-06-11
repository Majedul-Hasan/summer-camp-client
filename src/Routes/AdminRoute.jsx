import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className='progress w-56'></progress>;
  }

  if (user && role?.role === 'admin') {
    return children;
  }
  return (
    <Navigate
      to='/'
      state={{ from: location }}
      replace></Navigate>
  );
};

export default AdminRoute;
