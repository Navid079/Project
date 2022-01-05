import axios from 'axios';

export const loginApiCall = async (user, reducer) => {
  try {
    const res = await axios.post('http://localhost:3005/shop/login', user);
    reducer({ type: 'SET_USER', data: res.data.data});
  } catch (error) {
    if(error.response.status === 404){
      //user not found
      console.log(error.response.data.data.messages[0])
      reducer({type: 'SET_ERROR', data: error.response.data})
    }
    else if(error.response.status === 401){
      //wrong password
      console.log(error.response.data.data.messages[0])
      reducer({type: 'SET_ERROR', data: error.response.data})
      // console.log(`${}`)
    }
    else if(error.response.status === 422){
      //unprocessable entity
      console.log(error.response.data.data.messages[0])
      reducer({type: 'SET_ERROR', data: error.response.data})
    }
  }
};
