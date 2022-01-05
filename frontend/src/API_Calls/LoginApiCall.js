import axios from 'axios';

export const loginApiCall = async (user, reducer) => {
  try {
    const res = await axios.post('http://localhost:3005/shop/login', user);
    reducer({ type: 'SET_USER', data: res.data.data });
  } catch (error) {
    error.response.data = error.response.data.data
    error.response.page = 'login'
    reducer({ type: 'SET_ERROR', data: error.response });
  }
};
