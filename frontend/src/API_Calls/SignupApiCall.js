import axios from 'axios';

export const signupApiCall = async () => {
  try {
    const res = await axios.post('http://localhost:3005/shop/signup', user);
    reducer({ type: 'SET_USER', data: res.data.data });
  } catch (error) {
    if (error.response.status === 409) {
      //conflict
      console.log(error.response.data.data.messages[0]);
      reducer({ type: 'SET_ERROR', data: error.response.data });
    } else if (error.response.status === 422) {
      //unprocessable entity
      console.log(error.response.data.data.messages[0]);
      reducer({ type: 'SET_ERROR', data: error.response.data });
    }
  }
};
