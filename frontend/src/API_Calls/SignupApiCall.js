import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const SignupApiCall = async (user, reducer) => {
  try {
    const res = await axios.post(`${api}/shop/signup`, user);
    reducer({ type: 'SET_USER', data: res.data.data });
    reducer({ type: 'LOGIN' });
    return true;
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'signup';
    reducer({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export default SignupApiCall;
