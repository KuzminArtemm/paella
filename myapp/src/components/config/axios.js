import axios from 'axios';

const axiosInstanse = axios.create({
  baseURL: 'http://localhost:3001/api/v3/'
});

export default axiosInstanse;
