import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

export const loginApiCall = async (user, reducer) => {
  try {
    const res = await axios.post(`${api}/shop/login`, user);
    reducer({ type: 'SET_USER', data: res.data.data });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'login';
    reducer({ type: 'SET_ERROR', data: error.response });
  }
};
