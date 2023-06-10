import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/letnja-skola.png';
import logoDark from '../../../assets/letnja-skola-dark.png';

import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const { user, logOut, setIsDarkMode, isDarkMode } = useAuth();
  const navigate = useNavigate();
  const [role] = useAdmin();
  const [pendingNumber, setPendingNumber] = useState();

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    handleThemeSwitch();
  };
  // console.log(user);
  const handleThemeSwitch = () => {
    setIsDarkMode((darkMode) => !darkMode);
  };
  useEffect(() => {
    if (role?.role === 'admin') {
      fetch(`${import.meta.env.VITE_API}/course/admin/pending`)
        .then((res) => res.json())
        .then((data) => setPendingNumber(data.pending));
    }
  }, [role]);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-courses'>Courses</NavLink>
      </li>
      <li>
        <NavLink to='/all-instructors'>Instructors</NavLink>
      </li>
      <li>
        <NavLink to='/events'>All events </NavLink>
      </li>
      <li>
        {role?.role === 'admin' ? (
          <NavLink to='/dashboard/admin-home'>
            <span>
              Dashboard{' '}
              <span className='absolute -top-1 badge bg-amber-500'>
                {pendingNumber}
              </span>
            </span>
          </NavLink>
        ) : role?.role === 'instructor' ? (
          <NavLink to='/dashboard/instructor-home'>Dashboard</NavLink>
        ) : (
          <NavLink to='/dashboard/user-home'>Dashboard</NavLink>
        )}
      </li>
      <li>
        <NavLink to='/dashboard/mycart'>
          {/* <button className='btn gap-2'> */}
          <FaShoppingCart></FaShoppingCart>
          {/* <div className='badge badge-secondary'>+{0}</div> */}
          <div className='badge badge-secondary'>+{0}</div>
          {/* </button> */}
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to='/profile'>{user?.displayName}</NavLink>
          </li>
          <li className='flex items-center'>
            <span onClick={handleLogOut}>LogOut</span>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to='/login'>Login</NavLink>
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
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50 dark:bg-slate-600'>
              {navOptions}
            </ul>
          </div>

          <a className='btn btn-ghost normal-case text-xl'>
            <img
              className='h-full'
              src={isDarkMode ? logoDark : logo}
              alt=''
            />
          </a>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
          <div className='w-16  text-lg  rounded-md mx-3 relative flex '>
            <div
              className='switch w-16 bg-slate-400'
              data-isOn={isOn}
              onClick={toggleSwitch}>
              <motion.div
                className='handle w-6 h-6'
                layout
                transition={spring}>
                {isDarkMode ? '🌙' : '🌞'}
              </motion.div>
            </div>
          </div>
          {/* <button
            type='button'
            onClick={handleThemeSwitch}
            className=' bg-black  dark:bg-blue-300 text-lg p-2 rounded-md mx-3'>
            {isDarkMode ? '🌙' : '🌞'}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
