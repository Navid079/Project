import {
  validEmail,
  validPhone,
  validPassword,
} from '../../../utils/regexBank';

export const loginPreRequestValidator = (states, refs) => {
  let validated = true;
  let message = [];

  if (refs.loginUsername.current.value.length === 0) {
    states.setUsernameLoginError(true);
    message.push('لطفا نام کاربری خود را وارد کنید.');
    message.push(<br key='1' />);
    validated = false;
  }
  if (refs.loginPassword.current.value.length === 0) {
    states.setPasswordLoginError(true);
    message.push('لطفا گذرواژه خود را وارد کنید.');
    message.push(<br key='2' />);
    validated = false;
  } else if (
    refs.loginUsername.current.value.length !== 0 &&
    validPassword.test(refs.loginPassword.current.value) === false
  ) {
    states.setPasswordLoginError(true);
    message.push('نام کاربری یا گذرواژه شما نادرست است.');
    message.push(<br key='3' />);
    validated = false;
  }
  states.setLoginErrors(message);

  return validated;
};

export const signupPreRequestValidator = (states, refs) => {
  let validated = true;
  let message = [];

  if (refs.signupUsername.current.value.length === 0) {
    states.setUsernameSignupError(true);
    message.push('لطفا نام کاربری خود را وارد کنید.')
    message.push(<br key='1' />);
    validated = false;
  }
  if (refs.signupPassword.current.value.length === 0) {
    states.setPasswordSignupError(true);
    message.push('لطفا گذرواژه خود را وارد کنید.')
    message.push(<br key='2' />);
    validated = false;
  } else if (!validPassword.test(refs.signupPassword.current.value)) {
    states.setPasswordSignupError(true);
    message.push('گذرواژه باید شامل حداقل یک کاراکتر کوچک،')
    message.push(<br key='3' />);
    message.push('یک کاراکتر بزرگ، یک عدد و یک کاراکتر ویژه باشد.')
    message.push(<br key='4' />);
    validated = false;
  }
  if (refs.signupConfirm.current.value.length === 0) {
    states.setConfirmSignupError(true);
    message.push('لطفا گذرواژه ی خود را دوباره وارد کنید.')
    message.push(<br key='5' />);
    validated = false;
  } else if (
    refs.signupConfirm.current.value !== refs.signupPassword.current.value
    ) {
      states.setConfirmSignupError(true);
      message.push('گذرواژه های واردشده باهم تطابق ندارند.')
    message.push(<br key='6' />);
    validated = false;
  }
  if (refs.signupPhone.current.value.length === 0) {
    states.setPhoneSignupError(true);
    message.push('لطفا شماره تلفن خود را وارد کنید.')
    message.push(<br key='7' />);
    validated = false;
  } else if (!validPhone.test(refs.signupPhone.current.value)) {
    states.setPhoneSignupError(true);
    message.push('شماره تلفن وارد شده معتبر نمی باشد.')
    message.push(<br key='8' />);
    validated = false;
  }
  if (!validEmail.test(refs.signupEmail.current.value)) {
    states.setEmailSignupError(true);
    message.push('آدرس ایمیل وارد شده معتبر نمی باشد.')
    message.push(<br key='9' />);
    validated = false;
  }

  states.setSignupErrors(message)
  return validated;
};
