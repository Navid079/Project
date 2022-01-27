export const FormReducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return state;
    case 'SET_ERROR':
      return {
        ...state,
        error: action.data,
      };
    case 'UNSET_ERROR':
      return {
        ...state,
        error: {},
      };
    case 'LOGIN':
      const devId = process.env.REACT_APP_DEV_ID;
      const auth = `${action.data.token}~${devId}~${action.data.refresh}`;
      return {
        ...state,
        auth,
        refresh: action.data.refresh,
        username: action.data.user.username,
        phone: action.data.user.phone,
        email: action.data.user.email,
        name: action.data.user.name,
        validated: action.data.user.validated || false,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: '',
        username: '',
        phone: '',
        email: '',
        name: {
          first: '',
          last: '',
        },
        isLoggedIn: false,
      };
    case 'SET_ATTR':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
