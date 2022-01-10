import { validEmail, validPhone, validPassword } from '../../../utils/regexBank';

export const loginPreRequestValidator = (states, refs) => {
  let validated = true;
  if (refs.loginUsername.current.value.length === 0) {
    // please fill all inputs
    states.setUsernameLoginError(true);
    validated = false;
  }
  if (refs.loginPassword.current.value.length === 0) {
    // please fill all inputs
    states.setPasswordLoginError(true);
    validated = false;
  }
  if (validPassword.test(refs.loginPassword.current.value) === false) {
    // password is invalid
    states.setPasswordLoginError(true);
    validated = false;
  }

  return validated;
};

export const signupPreRequestValidator = (states, refs) => {
  let validated = true;

  if (refs.signupUsername.current.value.length === 0) {
    states.setUsernameSignupError(true);
    validated = false;
  }
  if (refs.signupPassword.current.value.length === 0) {
    states.setPasswordSignupError(true);
    validated = false;
  } else if (!validPassword.test(refs.signupPassword.current.value)) {
    states.setPasswordSignupError(true);
  }
  if (refs.signupConfirm.current.value.length === 0) {
    states.setConfirmSignupError(true);
    validated = false;
  } else if (refs.signupConfirm.current.value !== refs.signupPassword.current.value) {
    states.setConfirmSignupError(true);
    validated = false;
  }
  if (refs.signupPhone.current.value.length === 0) {
    states.setPhoneSignupError(true);
    validated = false;
  } else if (!validPhone.test(refs.signupPhone.current.value)) {
    states.setPhoneSignupError(true);
    validated = false;
  }
  if (!validEmail.test(refs.signupEmail.current.value)) {
    states.setEmailSignupError(true);
    validated = false;
  }

  return validated;
};
