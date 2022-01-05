import axios from 'axios';

export const signupApiCall = async (user, reducer) => {
  try {
    const res = await axios.post('http://localhost:3005/shop/signup', user);
    reducer({ type: 'SET_USER', data: res.data.data });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'signup';
    reducer({ type: 'SET_ERROR', data: error.response.data });
  }
};
