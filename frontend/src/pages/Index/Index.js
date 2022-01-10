// ============ React and hooks ============
import React, { useContext, useEffect } from 'react';

// ================ Context ================
import FormContext from '../../ContextManager/FormContextManager/FormContext';

// ============== Page  hooks ==============
import useStates from './Hooks/useStates';
import useRefs from './Hooks/useRefs';

// ========== Page Event Handlers ==========
import { responseErrorHandler } from './EventHandlers/errorHandlers';
import {
  toggleHandler,
  loginSubmitHandler,
  signupSubmitHandler,
  keyPressHandler,
} from './EventHandlers/eventHandlers';

// ============ Page Components ============
import Button from '../../components/UI/Button/Button';
import Toggle from '../../components/UI/Toggle';
import IconInput from '../../components/Index/IconInput';

// =========== Page  Stylesheets ===========
import './Index.css';

// ================== Page =================
const Page = () => {
  const states = useStates();
  const refs = useRefs();

  const { dispatch, error } = useContext(FormContext);

  useEffect(() => {
    if (Object.keys(error).length !== 0) {
      dispatch({ type: 'UNSET_ERROR' });
      responseErrorHandler(states, error, dispatch);
    }
  });

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
          onToggle={position => toggleHandler(position, states, refs)}
        />

        {/* =========    FORM CONTAINERS    ========= */}
        <div className='index__controls-container'>
          {/* ========= LOGIN FORM CONTAINER ========= */}
          <form
            className='index__controls'
            onSubmit={e => loginSubmitHandler(e, states, refs, dispatch)}
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
              onKeyPress={() =>
                keyPressHandler(
                  states.usernameLoginError,
                  states.setUsernameLoginError
                )
              }
            />
            <IconInput
              error={states.passwordLoginError}
              icon='carbon:password'
              flipped={false}
              className='index__txt-input'
              type='password'
              placeholder='گذرواژه'
              reference={refs.loginPassword}
              onKeyPress={() =>
                keyPressHandler(
                  states.passwordLoginError,
                  states.setPasswordLoginError
                )
              }
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
            onSubmit={e => signupSubmitHandler(e, states, refs, dispatch)}
            ref={refs.signupControls}
          >
            <IconInput
              icon='healthicons:ui-user-profile-outline'
              error={states.usernameSignupError}
              flipped={true}
              className='index__txt-input'
              type='text'
              placeholder='نام کاربری'
              reference={refs.signupUsername}
              onKeyPress={() =>
                keyPressHandler(
                  states.usernameSignupError,
                  states.setUsernameSignupError
                )
              }
            />
            <IconInput
              icon='akar-icons:phone'
              error={states.phoneSignupError}
              flipped={true}
              className='index__txt-input'
              placeholder='تلفن همراه'
              reference={refs.signupPhone}
              onKeyPress={() =>
                keyPressHandler(
                  states.phoneSignupError,
                  states.setPhoneSignupError
                )
              }
            />
            <IconInput
              icon='mdi-light:email'
              error={states.emailSignupError}
              flipped={true}
              className='index__txt-input'
              type='email'
              placeholder='ایمیل'
              reference={refs.signupEmail}
              onKeyPress={() =>
                keyPressHandler(
                  states.emailSignupError,
                  states.setEmailSignupError
                )
              }
            />
            <IconInput
              icon='carbon:password'
              error={states.passwordSignupError}
              flipped={true}
              className='index__txt-input'
              type='password'
              placeholder='گذرواژه'
              reference={refs.signupPassword}
              onKeyPress={() =>
                keyPressHandler(
                  states.passwordSignupError,
                  states.setPasswordSignupError
                )
              }
            />
            <IconInput
              flipped={true}
              error={states.confirmSignupError}
              className='index__txt-input'
              type='password'
              placeholder='تایید گذرواژه'
              reference={refs.signupConfirm}
              onKeyPress={() =>
                keyPressHandler(
                  states.confirmSignupError,
                  states.setConfirmSignupError
                )
              }
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
};

export default Page;
