export const responseErrorHandler = (states, error) => {
  const conflict = error.data.conflict;

  if (error.page === 'login') {
    // ======== Login Page Response Errors ======== //
    if (error.status === 404) {
      states.setUsernameLoginError(true);
    } else if (error.status === 401) {
      states.setPasswordLoginError(true);
    } else if (error.status === 422) {
      if (['user', 'phone', 'email'].indexOf(conflict) !== -1) {
        states.setUsernameLoginError(true);
      } else if (conflict === 'password') {
        states.setUsernameLoginError(true);
      }
    }
  } else if (error.page === 'signup') {
    // ======== Signup Page Response Errors ======== //
    if (error.status === 409) {
      if (conflict === 'username') {
        states.setUsernameSignupError(true);
      } else if (conflict === 'email') {
        states.setEmailSignupError(true);
      } else if (conflict === 'phone') {
        states.setPhoneSignupError(true);
      }
    } else if (error.status === 422) {
      if (conflict === 'username') {
        states.setUsernameSignupError(true);
      } else if (conflict === 'email') {
        states.setEmailSignupError(true);
      } else if (conflict === 'phone') {
        states.setPhoneSignupError(true);
      } else if (conflict === 'password') {
        states.setPasswordSignupError(true);
      } else if (conflict === 'confirm') {
        states.setConfirmSignupError(true);
      }
    }
  }
};
