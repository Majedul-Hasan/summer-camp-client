import { NavLink, Outlet } from 'react-router-dom';
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaBook,
} from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import { BsArrowBarRight } from 'react-icons/Bs';

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data

  const [role] = useAdmin();
  console.log(role);

  return (
    <div className='drawer lg:drawer-open dark:text-blue-200'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col items-start justify-start'>
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'>
          <BsArrowBarRight></BsArrowBarRight>
        </label>
      </div>
      <div className='drawer-side md:pt-12'>
        <label
          htmlFor='my-drawer-2'
          className='drawer-overlay'></label>
        <ul className='menu p-4 w-80'>
          {role?.role === 'admin' ? (
            <>
              <li>
                <NavLink to='/dashboard/admin-home'>
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/manage-courses'>
                  <FaWallet></FaWallet> Manage course
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'>
                  <FaBook></FaBook> Manage history
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allusers'>
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : role?.role === 'instructor' ? (
            <>
              <li>
                <NavLink to='/dashboard/user-home'>
                  <FaHome></FaHome> instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/reservations'>
                  <FaCalendarAlt></FaCalendarAlt> My corses
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'>
                  <FaWallet></FaWallet> My students
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/add-course'>
                  <FaShoppingCart></FaShoppingCart> new course
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/dashboard/user-home'>
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/reservations'>
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'>
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/selected-classes'>
                  <FaShoppingCart></FaShoppingCart> My Selected
                  <span className='badge inl badge-secondary'>+{0}</span>
                </NavLink>
              </li>
            </>
          )}

          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome></FaHome> Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to='/menu'> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'>Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;


/**
  <div className='drawer drawer-mobile '>
        <input
          id='my-drawer-2'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content flex flex-col mt-1 md:ml-4  w-full'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'>
            Open drawer
          </label>
        </div>
        <div className='drawer-side bg-[#D1A054]'>
          <label
            htmlFor='my-drawer-2'
            className='drawer-overlay'></label>
          
        </div>
      </div> 
 
 */