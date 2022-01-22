import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const SignupApiCall = async (user, dispatch) => {
  try {
    const res = await axios.post(`${api}/shop/signup`, user);
    dispatch({ type: 'LOGIN', data: res.data.data });
    return true;
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'signup';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export default SignupApiCall;
