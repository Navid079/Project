import { useContext } from 'react';
import { FormContext } from '../../ContextManager/FormContextManager/FormContext';

export default () => {
  const { dispatch, error } = useContext(FormContext);

  if (Object.keys(error).length !== 0) {
    const conflict = error.data.conflict;

    if (error.page === 'login') {
      // ======== Login Page Response Errors ======== //
      if (error.status === 404) {
        alert('user not found');
      } else if (error.status === 401) {
        alert('wrong password');
      } else if (error.status === 422) {
        if (['user', 'phone', 'email'].indexOf(conflict) != -1) {
          alert('wrong username');
        } else if (conflict === 'password') {
          alert('wrong password');
        }
      }
    } else if (error.page === 'signup') {
      // ======== Signup Page Response Errors ======== //
      if (error.status === 409) {
        if (conflict === 'username') {
          alert('username already exists');
        } else if (conflict === 'email') {
          alert('email already exists');
        } else if (conflict === 'phone') {
          alert('phone number already exists');
        }
      } else if (error.status === 422) {
        if (conflict === 'username') {
          alert('username required');
        } else if (conflict === 'email') {
          alert('email required');
        } else if (conflict === 'phone') {
          alert('phone number already exists');
        } else if (conflict === 'password') {
          alert('password is too weak');
        } else if (conflict === 'confirm') {
          alert('passwords dont match');
        }
      }
    }
    dispatch({ type: 'UNSET_ERROR' });
  }
};
