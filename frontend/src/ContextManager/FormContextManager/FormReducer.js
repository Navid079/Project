export const FormReducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return state;

    case 'SET_USER':
      return {
        ...state,
        username: action.data.user.username,
        phone: action.data.user.phone,
        email: action.data.user.email,
      };
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
    default:
      return state;
  }
};
