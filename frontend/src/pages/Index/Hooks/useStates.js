import { useState } from 'react';

const useStates = () => {
  // Login states
  const [usernameLoginError, setUsernameLoginError] = useState(false);
  const [passwordLoginError, setPasswordLoginError] = useState(false);
  const [loginErrors, setLoginErrors] = useState('');

  // Signup states
  const [usernameSignupError, setUsernameSignupError] = useState(false);
  const [passwordSignupError, setPasswordSignupError] = useState(false);
  const [confirmSignupError, setConfirmSignupError] = useState(false);
  const [emailSignupError, setEmailSignupError] = useState(false);
  const [phoneSignupError, setPhoneSignupError] = useState(false);
  const [signupErrors, setSignupErrors] = useState('');

  return {
    usernameLoginError,
    setUsernameLoginError,
    passwordLoginError,
    setPasswordLoginError,
    loginErrors,
    setLoginErrors,
    usernameSignupError,
    setUsernameSignupError,
    passwordSignupError,
    setPasswordSignupError,
    confirmSignupError,
    setConfirmSignupError,
    emailSignupError,
    setEmailSignupError,
    phoneSignupError,
    setPhoneSignupError,
    signupErrors,
    setSignupErrors,
  };
};

export default useStates;
