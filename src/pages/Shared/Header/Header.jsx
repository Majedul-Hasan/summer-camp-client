import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/letnja-skola.png';

import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
  const { user, logOut, setIsDarkMode, isDarkMode } = useAuth();
  console.log(isDarkMode);
  const handleThemeSwitch = () => {
    setIsDarkMode((darkMode) => !darkMode);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='/order/salad'>Order Food</Link>
      </li>
      {/* <li>
         {isAdmin ? (
          <Link to='/dashboard/admin-home'>Admin Dashboard</Link>
        ) : (
          <Link to='/dashboard/user-home'>user Dashboard</Link>
        )}
      </li> */}
      <li>
        <Link to='/dashboard/mycart'>
          {/* <button className='btn gap-2'> */}
          <FaShoppingCart></FaShoppingCart>
          {/* <div className='badge badge-secondary'>+{0}</div> */}
          <div className='badge badge-secondary'>+{0}</div>
          {/* </button> */}
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <span>{user?.displayName}</span>
          </li>
          <li className='flex items-center'>
            <span
              onClick={handleLogOut}
              className='btn btn-ghost'>
              LogOut
            </span>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className='navbar bg-base-100 font-semibold dark:bg-black dark:text-sky-200 '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              {navOptions}
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl'>
            <img
              className='h-full'
              src={logo}
              alt=''
            />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
          <button
            type='button'
            onClick={handleThemeSwitch}
            className=' bg-black  dark:bg-blue-300 text-lg p-2 rounded-md mx-3'>
            {isDarkMode ? '🌙' : '🌞'}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
