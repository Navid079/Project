import ErrorMessage from '../../../components/Index/ErrorMessage';
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
    validated = false;
  }
  if (refs.loginPassword.current.value.length === 0) {
    states.setPasswordLoginError(true);
    message.push('لطفا گذرواژه خود را وارد کنید.');
    validated = false;
  } else if (
    refs.loginUsername.current.value.length !== 0 &&
    validPassword.test(refs.loginPassword.current.value) === false
  ) {
    states.setPasswordLoginError(true);
    message.push('نام کاربری یا گذرواژه شما نادرست است.');
    validated = false;
  }
  message = message.map(m => (
    <ErrorMessage className='index__error' flipped={true}>
      {m}
    </ErrorMessage>
  ));
  states.setLoginErrors(message);

  return validated;
};

export const signupPreRequestValidator = (states, refs) => {
  let validated = true;
  let message = [];

  if (refs.signupUsername.current.value.length === 0) {
    states.setUsernameSignupError(true);
    message.push('لطفا نام کاربری خود را وارد کنید.');
    validated = false;
  }
  if (refs.signupPassword.current.value.length === 0) {
    states.setPasswordSignupError(true);
    message.push('لطفا گذرواژه خود را وارد کنید.');
    validated = false;
  } else if (!validPassword.test(refs.signupPassword.current.value)) {
    states.setPasswordSignupError(true);
    message.push('گذرواژه باید شامل حداقل یک کاراکتر کوچک،');
    message.push('یک کاراکتر بزرگ، یک عدد و یک کاراکتر ویژه باشد.');
    validated = false;
  }
  if (refs.signupConfirm.current.value.length === 0) {
    states.setConfirmSignupError(true);
    message.push('لطفا گذرواژه ی خود را دوباره وارد کنید.');
    validated = false;
  } else if (
    refs.signupConfirm.current.value !== refs.signupPassword.current.value
  ) {
    states.setConfirmSignupError(true);
    message.push('گذرواژه های واردشده باهم تطابق ندارند.');
    validated = false;
  }
  if (refs.signupPhone.current.value.length === 0) {
    states.setPhoneSignupError(true);
    message.push('لطفا شماره تلفن خود را وارد کنید.');
    validated = false;
  } else if (!validPhone.test(refs.signupPhone.current.value)) {
    states.setPhoneSignupError(true);
    message.push('شماره تلفن وارد شده معتبر نمی باشد.');
    validated = false;
  }
  if (!validEmail.test(refs.signupEmail.current.value)) {
    states.setEmailSignupError(true);
    message.push('آدرس ایمیل وارد شده معتبر نمی باشد.');
    validated = false;
  }
  message = message.map(m => (
    <ErrorMessage className='index__error'>{m}</ErrorMessage>
  ));
  states.setSignupErrors(message);
  return validated;
};
