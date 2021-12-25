import axios from 'axios';

export const loginApiCall = async (user, reducer) => {
  try {
    const res = await axios.post('http://localhost:3005/shop/login', user);
    reducer({ type: 'SET', data: res.data.data});
  } catch (error) {}
};
