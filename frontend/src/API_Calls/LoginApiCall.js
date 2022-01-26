import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const LoginApiCall = async (user, dispatch) => {
  try {
    const res = await axios.post(`${api}/shop/login`, user);
    console.log(res.data.data.user.validated);
    dispatch({ type: 'LOGIN', data: res.data.data });
    return true;
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'login';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export default LoginApiCall;
