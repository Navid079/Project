export const responseErrorHandler = (states, error) => {
  const conflict = error.data.conflict;
  const message = [];

  if (error.page === 'login') {
    // ======== Login Page Response Errors ======== //
    if (error.status === 404) {
      states.setUsernameLoginError(true);
      message.push('هیچ کاربری با این نام کاربری وجود ندارد.');
    } else if (error.status === 401) {
      states.setPasswordLoginError(true);
      message.push('نام کاربری یا گذرواژه شما نارست است.');
    } else if (error.status === 422) {
      if (['user', 'phone', 'email'].indexOf(conflict) !== -1) {
        states.setUsernameLoginError(true);
        message.push('خطایی رخ داده است.');
      } else if (conflict === 'password') {
        states.setUsernameLoginError(true);
        message.push('خطایی رخ داده است.');
      }
    }
    message.push(<br key='1' />);
    states.setLoginErrors(message);
  } else if (error.page === 'signup') {
    // ======== Signup Page Response Errors ======== //
    if (error.status === 409) {
      if (conflict === 'username') {
        states.setUsernameSignupError(true);
        message.push('کاربری با این نام کاربری وجود دارد.');
      } else if (conflict === 'email') {
        states.setEmailSignupError(true);
        message.push('کاربری با این آدرس ایمیل وجود دارد');
      } else if (conflict === 'phone') {
        states.setPhoneSignupError(true);
        message.push('کاربری با این شماره تلفن وجود دارد');
      }
    } else if (error.status === 422) {
      if (conflict === 'username') {
        states.setUsernameSignupError(true);
        message.push('خطایی رخ داده است');
      } else if (conflict === 'email') {
        states.setEmailSignupError(true);
        message.push('خطایی رخ داده است');
      } else if (conflict === 'phone') {
        states.setPhoneSignupError(true);
        message.push('خطایی رخ داده است');
      } else if (conflict === 'password') {
        states.setPasswordSignupError(true);
        message.push('خطایی رخ داده است');
      } else if (conflict === 'confirm') {
        states.setConfirmSignupError(true);
        message.push('خطایی رخ داده است');
      }
    }
    message.push(<br key='1' />);
    states.setSignupErrors(message);
  }
};
