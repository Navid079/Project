import React from 'react';

export const FormReducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return state;

    case 'SET':
      return {
        username: action.data.user.username,
        phone: action.data.user.phone,
        email: action.data.user.email,
        // password: action.data.user.password,
        // re_password: action.data.user.re_password,
      };
  }
};
