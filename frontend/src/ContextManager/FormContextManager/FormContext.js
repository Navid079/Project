import React, { createContext, useReducer } from 'react';
import { FormReducer } from './FormReducer';

const INITIAL_STATE = {
  username: '',
  phone: '',
  email: '',
  password: '',
  confirm: '',
  error: {},
};

const FormContext = createContext(INITIAL_STATE);

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  return (
    <FormContext.Provider
      value={{
        username: state.username,
        phone: state.phone,
        email: state.email,
        password: state.password,
        confirm: state.confirm,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
