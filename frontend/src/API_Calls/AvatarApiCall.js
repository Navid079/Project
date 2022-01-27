import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

export const avatarGetApiCall = async (token, dispatch) => {
  try {
    const res = await axios.get(`${api}/shop/profile/avatar`, {
      headers: {
        Authentication: token,
      },
    });
    const avatar = Buffer.from(res.data, 'base64').toString();
    const user = { avatar };
    dispatch({ type: 'SET_ATTR', data: user });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export const avatarSetApiCall = async (token, data, dispatch) => {
  try {
    const res = await axios.post(`${api}/shop/profile/avatar`, data, {
      headers: {
        Authentication: token,
      },
    });
    const user = {
      avatar: Buffer.from(data.get('avatar'), 'base64').toString(),
    };
    dispatch({ type: 'SET_ATTR', data: user });
  } catch (error) {
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};
