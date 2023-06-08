import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:9000',
  baseURL: 'https://lwsserver-majedul.herokuapp.com',
});

export default axiosInstance;
