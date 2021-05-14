import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error.response;
  },
);

export default instance;
