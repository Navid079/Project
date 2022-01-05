import React, { createContext, useContext, useReducer } from 'react';
import { FormReducer } from './FormReducer';

const INITIAL_STATE = {
  username: '',
  phone: '',
  email: '',
  password: '',
  re_password: '',
  error: {},
};

export const FormContext = createContext(INITIAL_STATE);

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  return (
    <FormContext.Provider
      value={{
        username: state.username,
        phone: state.phone,
        email: state.email,
        password: state.password,
        re_password: state.re_password,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
