import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:9000',
  baseURL: import.meta.env.VITE_API,
});

export default axiosInstance;
