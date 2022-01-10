import { useContext } from 'react';
import { FormContext } from '../../ContextManager/FormContextManager/FormContext';
import { validEmail, validPhone, validPassword } from '../../utils/regexBank';

export const useResponseErrorHandler = () => {
  const { dispatch, error } = useContext(FormContext);

  if (Object.keys(error).length !== 0) {
    const conflict = error.data.conflict;

    if (error.page === 'login') {
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

export const signupErrorHandler = (event, states, refs) => {
  states.setEmailSignupError(false);
  states.setPhoneSignupError(false);
  states.setPasswordSignupError(false);
  states.setUsernameSignupError(false);
  states.setConfirmSignupError(false);

  // To know which input the user is on
  switch (window.event.target.placeholder) {
    case 'نام کاربری':
      if (window.event.target.value.length === 0) {
        states.setUsernameSignupError(true);
      }
      break;
    case 'گذرواژه':
      if (refs.password.current.value.length === 0) {
        states.setPasswordSignupError(true);
      } else if (validPassword.test(refs.password.current.value) == false) {
        states.setPasswordSignupError(true);
      } else if (refs.password.current.value !== refs.confirm.current.value) {
        states.setConfirmSignupError(true);
      }
      break;
    case 'تایید گذرواژه':
      if (validPassword.test(refs.password.current.value) == false) {
        states.setPasswordSignupError(true);
      }
      if (refs.password.current.value !== refs.confirm.current.value) {
        states.setConfirmSignupError(true);
      }
      break;
    case 'ایمیل':
      if (refs.email.current.value.length === 0) {
        states.setEmailSignupError(true);
      } else if (validEmail.test(refs.email.current.value) === false) {
        states.SetEmailSignupError(true);
      }
      break;
    case 'تلفن همراه':
      if (refs.phone.current.value.length === 0) {
        states.setPhoneSignupError(true);
      } else if (validPhone.test(refs.phone.current.value) === false) {
        states.setPhoneSignupError(true);
      }
      break;
  }
};

export const loginErrorHandler = (event, states, refs) => {
  states.setUsernameLoginError(false);
  states.setPasswordLoginError(false);
  if (
    refs.loginUsername.current.value.length === 0 &&
    refs.loginPassword.current.value.length === 0
  ) {
    // please fill all inputs
    states.setUsernameLoginError(true);
    states.setPasswordLoginError(true);
    return false;
  }
  if (refs.loginUsername.current.value.length === 0) {
    // please fill all inputs
    states.setUsernameLoginError(true);
    return false;
  } else if (refs.loginPassword.current.value.length === 0) {
    // please fill all inputs
    states.setPasswordLoginError(true);
    return false;
  } else if (validPassword.test(refs.loginPassword.current.value) === false) {
    // password is invalid
    states.setPasswordLoginError(true);
    return false;
  }

  return true;
};
