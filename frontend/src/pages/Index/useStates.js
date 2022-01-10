import { useState } from 'react';

export default () => {
  // Login states
  const [usernameLoginError, setUsernameLoginError] = useState(false);
  const [passwordLoginError, setPasswordLoginError] = useState(false);
  
  // Signup states
  const [usernameSignupError, setUsernameSignupError] = useState(false);
  const [passwordSignupError, setPasswordSignupError] = useState(false);
  const [confirmSignupError, setConfirmSignupError] = useState(false);
  const [emailSignupError, setEmailSignupError] = useState(false);
  const [phoneSignupError, setPhoneSignupError] = useState(false);

  return {
    usernameLoginError,
    setUsernameLoginError,
    passwordLoginError,
    setPasswordLoginError,
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
  };
};