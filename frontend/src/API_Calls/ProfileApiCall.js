import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

export const profileGetApiCall = async (auth, dispatch) => {
  try {
    const res = await axios.get(`${api}/shop/profile`, {
      headers: {
        Authorization: auth,
      },
    });
    const data = res.data.data.user;
    dispatch({ type: 'SET_ATTR', data });
  } catch (error) {
    console.log(error);
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export const profilePatchApiCall = async (auth, data, dispatch) => {
  try {
    const res = await axios.patch(`${api}/shop/profile`, data, {
      headers: {
        Authorization: auth,
      },
    });
    const attributes = res.data.data.user;
    dispatch({ type: 'SET_ATTR', attributes });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};
