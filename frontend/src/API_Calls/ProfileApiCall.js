import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

export const profileGetApiCall = (auth, dispatch) => {
  try {
    const res = axios.get(`${api}/shop/profile`, {
      headers: {
        Authorization: auth,
      },
    });
    const data = res.data.data.user;
    dispatch({ type: 'SET_ATTR', data });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export const profilePatchApiCall = (auth, data, dispatch) => {
  try {
    const res = axios.patch(`${api}/shop/profile`, data, {
      headers: {
        Authorization: auth,
      },
    });
    const data = res.data.data.user;
    dispatch({ type: 'SET_ATTR', data });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};
