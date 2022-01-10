import React, { useContext } from 'react';
import { FormContext } from '../../ContextManager/FormContextManager/FormContext';
import { loginApiCall } from '../../API_Calls/LoginApiCall';
import { signupApiCall } from '../../API_Calls/SignupApiCall';
import useStates from './useStates';
import useRefs from './useRefs';
import {
  useResponseErrorHandler,
  signupErrorHandler,
  loginErrorHandler,
} from './errorHandlers';
import { validEmail, validPhone, validPassword } from '../../utils/regexBank';

import './Index.css';

import Button from '../../components/UI/Button/Button';
import Toggle from '../../components/UI/Toggle';
import IconInput from '../../components/Index/IconInput';

export default function Index() {
  const states = useStates();
  const refs = useRefs();

  const { dispatch, username: UN, error } = useContext(FormContext);

  useResponseErrorHandler();

  const signupHasErrors = () => {
    const hasError =
      states.emailSignupError ||
      states.phoneSignupError ||
      states.passwordSignupError ||
      states.usernameSignupError ||
      states.confirmSignupError;
    return hasError;
  };

  const loginHasErrors = () => {
    const hasErrors = states.usernameLoginError || states.passwordLoginError;
    return hasErrors;
  };

  const toggleHandler = position => {
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

  const devId = 12345;

  // check all field in input is correct
  const loginSubmitHandler = event => {
    event.preventDefault();
    if (loginHasErrors()) {
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

    loginApiCall(loginUser, dispatch);
  };

  // check all field in input is correct
  const signupSubmitHandler = async event => {
    event.preventDefault();
    if (signupHasErrors()) {
      return;
    }
    const user = {
      message: 'Signup Request',
      data: {
        username: refs.username.current.value,
        phone: refs.phone.current.value,
        email: refs.email.current.value,
        password: refs.password.current.value,
        confirm: refs.confirm.current.value,
        devId: devId,
      },
    };
    signupApiCall(user, dispatch);
  };

  return (
    <div className='index g-flipped' ref={refs.index}>
      {/* =========         WAVE         ========= */}
      <div className='index__wave' ref={refs.wave} />

      <main className='index__body g-flipped' ref={refs.indexBody}>
        {/* =========        TOGGLE        ========= */}
        <Toggle
          className='index__toggle index__toggle--flipped'
          leftLabel='ورود'
          rightLabel='ثبت نام'
          reference={refs.toggle}
          onToggle={toggleHandler}
        />

        {/* =========    FORM CONTAINERS    ========= */}
        <div className='index__controls-container'>
          {/* ========= LOGIN FORM CONTAINER ========= */}
          <form
            className='index__controls'
            onSubmit={loginSubmitHandler}
            ref={refs.loginControls}
          >
            <IconInput
              className='index__txt-input'
              error={states.usernameLoginError}
              flipped={false}
              icon='healthicons:ui-user-profile-outline'
              type='txt'
              placeholder='نام کاربری'
              reference={refs.loginUsername}
              onKeyPress={e => loginErrorHandler(e, states, refs)}
            />
            <IconInput
              error={states.passwordLoginError}
              icon='carbon:password'
              flipped={false}
              className='index__txt-input'
              type='password'
              placeholder='گذرواژه'
              reference={refs.loginPassword}
              onKeyPress={e => loginErrorHandler(e, states, refs)}
            />
            <button className='index__link'>حساب کاربری ندارید؟</button>
            <div className='index__submit-container g-flipped'>
              <Button className='index__submit index__submit--flipped'>
                ورود
              </Button>
            </div>
          </form>

          {/* ========= SIGNUP FORM CONTAINER ========= */}
          <form
            className='index__controls g-hidden'
            onSubmit={signupSubmitHandler}
            ref={refs.signupControls}
          >
            <IconInput
              icon='healthicons:ui-user-profile-outline'
              error={states.usernameSignupError}
              flipped={true}
              className='index__txt-input'
              type='text'
              placeholder='نام کاربری'
              reference={refs.username}
              onKeyPress={e => signupErrorHandler(e, states, refs)}
            />
            <IconInput
              icon='akar-icons:phone'
              error={states.phoneSignupError}
              flipped={true}
              className='index__txt-input'
              placeholder='تلفن همراه'
              reference={refs.phone}
              onKeyPress={e => signupErrorHandler(e, states, refs)}
            />
            <IconInput
              icon='mdi-light:email'
              error={states.emailSignupError}
              flipped={true}
              className='index__txt-input'
              type='email'
              placeholder='ایمیل'
              reference={refs.email}
              onKeyPress={e => signupErrorHandler(e, states, refs)}
            />
            <IconInput
              icon='carbon:password'
              error={states.passwordSignupError}
              flipped={true}
              className='index__txt-input'
              type='password'
              placeholder='گذرواژه'
              reference={refs.password}
              onKeyPress={e => signupErrorHandler(e, states, refs)}
            />
            <IconInput
              flipped={true}
              error={states.confirmSignupError}
              className='index__txt-input'
              type='password'
              placeholder='تایید گذرواژه'
              reference={refs.confirm}
              onKeyPress={e => signupErrorHandler(e, states, refs)}
            />
            <button className='index__link'>حساب کاربری دارید؟</button>
            <div className='index__submit-container'>
              <Button className='index__submit'>ثبت</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
