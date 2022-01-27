import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

export const avatarGetApiCall = async (auth, dispatch) => {
  try {
    const res = await axios.get(`${api}/shop/profile/avatar`, {
      responseType: 'arraybuffer',
      headers: {
        Authorization: auth,
      },
    });
    const avatar = Buffer.from(res.data, 'binary').toString('base64');
    const user = { avatar };
    dispatch({ type: 'SET_ATTR', data: user });
  } catch (error) {
    console.log(error);
    error.response.data = error.response.data.data;
    error.response.page = 'profile';
    dispatch({ type: 'SET_ERROR', data: error.response });
    return false;
  }
};

export const avatarSetApiCall = async (auth, data, dispatch) => {
  try {
    const res = await axios.post(`${api}/shop/profile/avatar`, data, {
      headers: {
        Authorization: auth,
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
