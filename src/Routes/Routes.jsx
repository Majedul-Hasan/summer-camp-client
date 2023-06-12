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
import AllEvents from '../pages/AllEvents/AllEvents';
import DetailCourse from '../pages/DetailCourse/DetailCourse';
import DetailInstructor from '../pages/DetailInstructor/DetailInstructor';
import StudentRoute from './StudentRoute.';
import SelectedClasses from '../pages/Dashboard/StudentDashboard/SelectedClasses';
import Payments from '../pages/Dashboard/StudentDashboard/Payments/Payments';
import StudentsRoute from './StudentRoute.';
import PaymentsHistory from '../pages/Dashboard/StudentDashboard/Payments/PaymentsHistory';
import InstructorRoute from './InstructorRoute';
import MyCourses from '../pages/Dashboard/instructorDashboard/MyCourses';
import UpdateCourse from '../pages/Dashboard/instructorDashboard/UpdateCourse';

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
        path: 'events',
        element: <AllEvents></AllEvents>,
      },
      {
        path: 'instructor/:id',
        element: <DetailInstructor></DetailInstructor>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/users/instructors/${params.id}`),
      },
      {
        path: '/courses/:id',
        element: <DetailCourse></DetailCourse>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/courses/${params.id}`),
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
            path: '/dashboard/student-home',
            element: (
              <StudentsRoute>
                <StudentHome />
              </StudentsRoute>
            ),
          },
          {
            path: 'selected-classes',
            element: (
              <StudentRoute>
                <SelectedClasses />
              </StudentRoute>
            ),
          },
          {
            path: 'payment',
            element: (
              <StudentRoute>
                <Payments />
              </StudentRoute>
            ),
          },
          {
            path: 'payment-history',
            element: (
              <StudentRoute>
                <PaymentsHistory />
              </StudentRoute>
            ),
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
              <InstructorRoute>
                <InstructorHome />
              </InstructorRoute>
            ),
          },
          {
            path: 'add-course',
            element: (
              <InstructorRoute>
                <AddNewCourse />
              </InstructorRoute>
            ),
          },
          {
            path: 'update-corses/:id',
            element: (
              <InstructorRoute>
                <UpdateCourse />
              </InstructorRoute>
            ),
            loader: ({ params }) =>
              fetch(`${import.meta.env.VITE_API}/courses/${params.id}`),
          },
          {
            path: 'my-corses',
            element: (
              <InstructorRoute>
                <MyCourses />
              </InstructorRoute>
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
