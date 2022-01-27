import React, { createContext, useReducer } from 'react';
import { FormReducer } from './FormReducer';

const INITIAL_STATE = {
  username: '',
  phone: '',
  email: '',
  name: {
    first: '',
    last: '',
  },
  shopAddress: '',
  postalCode: '',
  nationalCode: '',
  idNumber: '',
  avatar: '',
  isLoggedIn: false,
  validated: false,
  error: {},
};

const FormContext = createContext(INITIAL_STATE);

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  return (
    <FormContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
