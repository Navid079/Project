import React from 'react';

import './Index.css';

import Button from '../../components/UI/Button/Button';
import Toggle from '../../components/UI/Toggle';
import IconInput from '../../components/Index/IconInput';

export default function Index() {
  const toggleHandler = position => {
    // will be added
    // position argument can be "left" or "right"
  };
  const loginSubmitHandler = event => {
    event.preventDefault();
    // will be added
  };
  const signupSubmitHandler = event => {
    event.preventDefault();
    // will be added
  };

  return (
    <div className="index flipped">
      {/* =========         WAVE         ========= */}
      <div className="index__wave" />

      <main className="index__body flipped">
        {/* =========        TOGGLE        ========= */}
        <Toggle
          className="index__toggle"
          leftLabel="ورود"
          rightLabel="ثبت نام"
          onToggle={toggleHandler}
        />

        {/* =========    FORM CONTAINERS    ========= */}
        <div className="index__controls">
          {/* ========= LOGIN FORM CONTAINER ========= */}
          <form
            className="index__signup-controls"
            onSubmit={loginSubmitHandler}
          >
            <IconInput
              className="index__signup-txt-input"
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
              className="index__signup-txt-input"
              type="password"
              placeholder="گذرواژه"
            />
            <button className="index__signup-link">حساب کاربری ندارید؟</button>
            <div className="index__signup-submit-container flipped">
              <Button className="index__signup-submit index__submit--flipped">ورود</Button>
            </div>
          </form>

          {/* ========= SIGNUP FORM CONTAINER ========= */}
          <form
            className="index__signup-controls"
            onSubmit={signupSubmitHandler}
            style={{display: "none"}}
          >
            <IconInput
              icon="healthicons:ui-user-profile-outline"
              error={true /*example*/}
              flipped={true}
              className="index__signup-txt-input"
              type="text"
              placeholder="نام کاربری"
            />
            <IconInput
              icon="akar-icons:phone"
              error={false /*example*/}
              flipped={true}
              className="index__signup-txt-input"
              placeholder="تلفن همراه"
            />
            <IconInput
              icon="mdi-light:email"
              error={true /*example*/}
              flipped={true}
              className="index__signup-txt-input"
              type="email"
              placeholder="ایمیل"
            />
            <IconInput
              icon="carbon:password"
              flipped={true}
              className="index__signup-txt-input"
              type="password"
              placeholder="گذرواژه"
            />
            <IconInput
              flipped={true}
              className="index__signup-txt-input"
              type="password"
              placeholder="تایید گذرواژه"
            />
            <button className="index__signup-link">حساب کاربری دارید؟</button>
            <div className="index__signup-submit-container">
              <Button className="index__signup-submit">ثبت</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
