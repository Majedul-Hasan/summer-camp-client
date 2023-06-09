import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axiosInstance from '../util/axiosInstance';

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('school-access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosInstance];
};

export default useAxiosSecure;
