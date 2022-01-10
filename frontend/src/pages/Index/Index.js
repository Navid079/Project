import React, { useContext } from 'react';
import { FormContext } from '../../ContextManager/FormContextManager/FormContext';
import useStates from './useStates';
import useRefs from './useRefs';
import { useResponseErrorHandler } from './errorHandlers';
import {
  toggleHandler,
  loginSubmitHandler,
  signupSubmitHandler,
} from './eventHandlers';

import './Index.css';

import Button from '../../components/UI/Button/Button';
import Toggle from '../../components/UI/Toggle';
import IconInput from '../../components/Index/IconInput';

export default function Index() {
  const states = useStates();
  const refs = useRefs();

  const { dispatch } = useContext(FormContext);

  useResponseErrorHandler();

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
              onKeyPress={e => {
                if (states.usernameLoginError)
                  states.setUsernameLoginError(false);
              }}
            />
            <IconInput
              error={states.passwordLoginError}
              icon='carbon:password'
              flipped={false}
              className='index__txt-input'
              type='password'
              placeholder='گذرواژه'
              reference={refs.loginPassword}
              onKeyPress={e => {
                if (states.passwordLoginError)
                  states.setPasswordLoginError(false);
              }}
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
              reference={refs.username}
              onKeyPress={e => {
                if (states.usernameSignupError) states.setUsernameSignupError(false);
              }}
            />
            <IconInput
              icon='akar-icons:phone'
              error={states.phoneSignupError}
              flipped={true}
              className='index__txt-input'
              placeholder='تلفن همراه'
              reference={refs.phone}
              onKeyPress={e => {
                if (states.phoneSignupError) states.setPhoneSignupError(false);
              }}
            />
            <IconInput
              icon='mdi-light:email'
              error={states.emailSignupError}
              flipped={true}
              className='index__txt-input'
              type='email'
              placeholder='ایمیل'
              reference={refs.email}
              onKeyPress={e => {
                if (states.emailSignupError) states.setEmailSignupError(false);
              }}
            />
            <IconInput
              icon='carbon:password'
              error={states.passwordSignupError}
              flipped={true}
              className='index__txt-input'
              type='password'
              placeholder='گذرواژه'
              reference={refs.password}
              onKeyPress={e => {
                if (states.passwordSignupError) states.setPasswordSignupError(false);
              }}
            />
            <IconInput
              flipped={true}
              error={states.confirmSignupError}
              className='index__txt-input'
              type='password'
              placeholder='تایید گذرواژه'
              reference={refs.confirm}
              onKeyPress={e => {
                if (states.confirmSignupError) states.setConfirmSignupError(false);
              }}
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
