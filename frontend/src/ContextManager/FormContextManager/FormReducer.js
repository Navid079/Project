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
      return {
        ...state,
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
        username: '',
        phone: '',
        email: '',
        name: {
          first: '',
          last: '',
        },
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
