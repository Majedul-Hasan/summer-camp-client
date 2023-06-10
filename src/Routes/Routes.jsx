import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../Layouts/MainLayout';
import HomePage from '../pages/Home/HomePage/HomePage';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import PageNotFound from '../pages/pageNotFound/pageNotFound';
import PrivateRoute from './PrivateRoute';
// import AdminHome from '../pages/Dashboard/AdminDashboard/AdminHome';
import StudentHome from '../pages/Dashboard/StudentDashboard/StudentHome';
import Dashboard from '../Layouts/Dashboard';
import AdminHome from '../pages/Dashboard/AdminDashboard/AdminHome';
import AdminRoute from './AdminRoute';
import AllUsers from '../pages/Dashboard/AdminDashboard/AllUsers/AllUsers';
import AddNewCourse from '../pages/Dashboard/instructorDashboard/AddNewCourse/AddNewCourse';
import AllInstructors from '../pages/AllInstructors/AllInstructors';
import AllCourses from '../pages/AllCoueses/AllCourses';
import InstructorHome from '../pages/Dashboard/instructorDashboard/InstructorHome';
import ManageCourses from '../pages/Dashboard/AdminDashboard/ManageCourses/ManageCourses';
import History from '../pages/Dashboard/AdminDashboard/History/History';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      //public routes
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch(`${import.meta.env.VITE_API}/courses?limit=6`),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <Signup></Signup>,
      },
      {
        path: 'all-instructors',
        element: <AllInstructors></AllInstructors>,
        loader: () => fetch(`${import.meta.env.VITE_API}/users/instructors`),
      },
      {
        path: 'all-courses',
        element: <AllCourses></AllCourses>,
        loader: () => fetch(`${import.meta.env.VITE_API}/courses`),
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: '/dashboard',
            element: <StudentHome></StudentHome>,
          },
          {
            path: 'add-course',
            element: <AddNewCourse></AddNewCourse>,
          },
          {
            path: 'admin-home',
            element: (
              <AdminRoute>
                <AdminHome />
              </AdminRoute>
            ),
          },
          {
            path: 'manage-courses',
            element: (
              <AdminRoute>
                <ManageCourses />
              </AdminRoute>
            ),
          },
          {
            path: 'history',
            element: (
              <AdminRoute>
                <History />
              </AdminRoute>
            ),
          },
          {
            path: 'instructor-home',
            element: (
              <AdminRoute>
                <InstructorHome />
              </AdminRoute>
            ),
          },
          {
            path: 'allusers',
            element: (
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);
