import {
  loginPreRequestValidator,
  signupPreRequestValidator,
} from './validators';

import loginApiCall from '../../../API_Calls/LoginApiCall';
import signupApiCall from '../../../API_Calls/SignupApiCall';
import { validEmail, validPhone } from '../../../utils/regexBank';

const devId = process.env.REACT_APP_DEV_ID;

export const toggleHandler = (position, states, refs) => {
  refs.wave.current.classList.add('fade-out-in');
  setTimeout(() => {
    refs.wave.current.classList.remove('fade-out-in');
  }, 1020);

  if (position === 'left') {
    refs.toggle.current.classList.add('index__toggle--flipped');
    refs.index.current.classList.add('g-flipped');
    refs.indexBody.current.classList.add('g-flipped');
    refs.loginControls.current.classList.remove('g-hidden');
    refs.signupControls.current.classList.add('g-hidden');

    refs.indexBody.current.classList.add('signup-slide');
    setTimeout(() => {
      refs.indexBody.current.classList.remove('signup-slide');
    }, 1020);
  } else {
    refs.toggle.current.classList.remove('index__toggle--flipped');
    refs.index.current.classList.remove('g-flipped');
    refs.indexBody.current.classList.remove('g-flipped');
    refs.loginControls.current.classList.add('g-hidden');
    refs.signupControls.current.classList.remove('g-hidden');

    refs.indexBody.current.classList.add('login-slide');
    setTimeout(() => {
      refs.indexBody.current.classList.remove('login-slide');
    }, 1020);
  }
};

export const loginSubmitHandler = (event, states, refs, dispatch, navigate) => {

  event.preventDefault();
  if (!loginPreRequestValidator(states, refs)) {
    return;
  }
  const enteredUsername = refs.loginUsername.current.value;
  const enteredPassword = refs.loginPassword.current.value;
  const userType = validEmail.test(enteredUsername)
    ? 'email'
    : validPhone.test(enteredUsername)
    ? 'phone'
    : 'username';
  const loginUser = {
    message: "This message will be logged in server's console",
    data: {
      user: enteredUsername,
      userType: userType,
      password: enteredPassword,
      devId,
    },
  };

  loginApiCall(loginUser, dispatch).then(result => {
    if (result) navigate('/dashboard');
  });
};

export const signupSubmitHandler = (event, states, refs, dispatch, navigate) => {
  event.preventDefault();
  if (!signupPreRequestValidator(states, refs)) {
    return;
  }
  const user = {
    message: 'Signup Request',
    data: {
      username: refs.signupUsername.current.value,
      phone: refs.signupPhone.current.value,
      email: refs.signupEmail.current.value,
      password: refs.signupPassword.current.value,
      confirm: refs.signupConfirm.current.value,
      devId: devId,
    },
  };
  signupApiCall(user, dispatch).then(result => {
    if (result) navigate('/dashboard');
  });
};

export const keyPressHandler = (state, setState) => {
  if (state) setState(false);
};
