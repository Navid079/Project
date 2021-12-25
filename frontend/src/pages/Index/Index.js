import React, { useRef } from 'react';

import './Index.css';

import Button from '../../components/UI/Button/Button';
import Toggle from '../../components/UI/Toggle';
import IconInput from '../../components/Index/IconInput';

export default function Index() {
  const toggle = useRef();
  const index = useRef();
  const wave = useRef();
  const loginControls = useRef();
  const signupControls = useRef();
  const indexBody = useRef();

  const username = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const re_password = useRef();

  const toggleHandler = (position) => {
    wave.current.classList.add('fade-out-in');
    setTimeout(() => {
      wave.current.classList.remove('fade-out-in');
    }, 1020);

    if (position === 'left') {
      toggle.current.classList.add('index__toggle--flipped');
      index.current.classList.add('g-flipped');
      indexBody.current.classList.add('g-flipped');
      loginControls.current.classList.remove('g-hidden');
      signupControls.current.classList.add('g-hidden');

      indexBody.current.classList.add('signup-slide');
      setTimeout(() => {
        indexBody.current.classList.remove('signup-slide');
      }, 1020);
    } else {
      toggle.current.classList.remove('index__toggle--flipped');
      index.current.classList.remove('g-flipped');
      indexBody.current.classList.remove('g-flipped');
      loginControls.current.classList.add('g-hidden');
      signupControls.current.classList.remove('g-hidden');

      indexBody.current.classList.add('login-slide');
      setTimeout(() => {
        indexBody.current.classList.remove('login-slide');
      }, 1020);
    }
  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    // will be added
  };
  const signupSubmitHandler = (event) => {
    event.preventDefault();
    // will be added
  };

  return (
    <div className="index g-flipped" ref={index}>
      {/* =========         WAVE         ========= */}
      <div className="index__wave" ref={wave} />

      <main className="index__body g-flipped" ref={indexBody}>
        {/* =========        TOGGLE        ========= */}
        <Toggle
          className="index__toggle index__toggle--flipped"
          leftLabel="ورود"
          rightLabel="ثبت نام"
          reference={toggle}
          onToggle={toggleHandler}
        />

        {/* =========    FORM CONTAINERS    ========= */}
        <div className="index__controls-container">
          {/* ========= LOGIN FORM CONTAINER ========= */}
          <form
            className="index__controls"
            onSubmit={loginSubmitHandler}
            ref={loginControls}
          >
            <IconInput
              className="index__txt-input"
              error={false}
              flipped={false}
              icon="healthicons:ui-user-profile-outline"
              type="txt"
              placeholder="نام کاربری"
            />
            <IconInput
              error={true}
              icon="carbon:password"
              flipped={false}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
            />
            <button className="index__link">حساب کاربری ندارید؟</button>
            <div className="index__submit-container g-flipped">
              <Button className="index__submit index__submit--flipped">
                ورود
              </Button>
            </div>
          </form>

          {/* ========= SIGNUP FORM CONTAINER ========= */}
          <form
            className="index__controls g-hidden"
            onSubmit={signupSubmitHandler}
            ref={signupControls}
          >
            <IconInput
              icon="healthicons:ui-user-profile-outline"
              error={true /*example*/}
              flipped={true}
              className="index__txt-input"
              type="text"
              placeholder="نام کاربری"
              reference={username}
            />
            <IconInput
              icon="akar-icons:phone"
              error={false /*example*/}
              flipped={true}
              className="index__txt-input"
              placeholder="تلفن همراه"
              reference={phone}
            />
            <IconInput
              icon="mdi-light:email"
              error={true /*example*/}
              flipped={true}
              className="index__txt-input"
              type="email"
              placeholder="ایمیل"
              reference={email}
            />
            <IconInput
              icon="carbon:password"
              flipped={true}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
              reference={password}
            />
            <IconInput
              flipped={true}
              className="index__txt-input"
              type="password"
              placeholder="تایید گذرواژه"
              reference={re_password}
            />
            <button className="index__link">حساب کاربری دارید؟</button>
            <div className="index__submit-container">
              <Button className="index__submit">ثبت</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
