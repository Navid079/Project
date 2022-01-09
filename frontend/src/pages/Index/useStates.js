import { useState } from 'react';

let initialized = false;

// Login states
let usernameLoginError, setUsernameLoginError;
let passwordLoginError, setPasswordLoginError;

// Signup states
let userNameSignupError, setUsernameSignupError;
let passwordSignupError, setPasswordSignupError;
let confirmSignupError, setConfirmSignupError;
let emailSignupError, setEmailSignupError;
let phoneSignupError, setPhoneSignupError;

export default () => {
  if (initialized) return;
  initialized = true;

  [usernameLoginError, setUsernameLoginError] = useState(false);
  [passwordLoginError, setPasswordLoginError] = useState(false);
  
  [userNameSignupError, setUsernameSignupError] = useState(false);
  [passwordSignupError, setPasswordSignupError] = useState(false);
  [confirmSignupError, setConfirmSignupError] = useState(false);
  [emailSignupError, setEmailSignupError] = useState(false);
  [phoneSignupError, setPhoneSignupError] = useState(false);
  
  return {
    usernameLoginError,
    setUsernameLoginError,
    passwordLoginError,
    setPasswordLoginError,
    userNameSignupError,
    setUsernameSignupError,
    passwordSignupError,
    setPasswordSignupError,
    confirmSignupError,
    setConfirmSignupError,
    emailSignupError,
    setEmailSignupError,
    phoneSignupError,
    setPhoneSignupError,
  };
}

export const getStates = () => {
  return {
    usernameLoginError,
    setUsernameLoginError,
    passwordLoginError,
    setPasswordLoginError,
    userNameSignupError,
    setUsernameSignupError,
    passwordSignupError,
    setPasswordSignupError,
    confirmSignupError,
    setConfirmSignupError,
    emailSignupError,
    setEmailSignupError,
    phoneSignupError,
    setPhoneSignupError,
  };
}