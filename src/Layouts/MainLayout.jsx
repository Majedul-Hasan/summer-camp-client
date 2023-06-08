import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import useAuth from '../hooks/useAuth';

const MainLayout = () => {
  const { isDarkMode } = useAuth();
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} test `}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
