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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      //public routes
      {
        path: '/',
        element: <HomePage></HomePage>,
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
            path: 'admin',
            element: <AdminHome />,
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
