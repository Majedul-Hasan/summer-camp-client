import useAuth from '../../hooks/useAuth';
import bgImg from '../../assets/404-1-01.png';
import bgImgDark from '../../assets/404-2-01-01-01.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const { isDarkMode } = useAuth();
  return (
    <div className='my-4'>
      <div className=' h-full w-full '>
        <div className='btn text-xl text-white bg-black hover:bg-blue-200 hover:text-blue-600 '>
          <Link to='/'>go to home page</Link>
        </div>
        <h2 className='uppercase  text-center text-5xl font-extrabold text-amber-500  '>
          Page not found
        </h2>
        <img
          src={isDarkMode ? bgImgDark : bgImg}
          alt=''
        />
      </div>
    </div>
  );
};

export default PageNotFound;
