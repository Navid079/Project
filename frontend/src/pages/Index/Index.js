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
    <div className="index g-flipped">
      {/* =========         WAVE         ========= */}
      <div className="index__wave" />

      <main className="index__body g-flipped">
        {/* =========        TOGGLE        ========= */}
        <Toggle
          className="index__toggle index__toggle--flipped"
          leftLabel="ورود"
          rightLabel="ثبت نام"
          onToggle={toggleHandler}
        />

        {/* =========    FORM CONTAINERS    ========= */}
        <div className="index__controls-container">
          {/* ========= LOGIN FORM CONTAINER ========= */}
          <form
            className="index__controls"
            onSubmit={loginSubmitHandler}
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
              <Button className="index__submit index__submit--flipped">ورود</Button>
            </div>
          </form>

          {/* ========= SIGNUP FORM CONTAINER ========= */}
          <form
            className="index__controls"
            onSubmit={signupSubmitHandler}
            style={{display: "none"}}
          >
            <IconInput
              icon="healthicons:ui-user-profile-outline"
              error={true /*example*/}
              flipped={true}
              className="index__txt-input"
              type="text"
              placeholder="نام کاربری"
            />
            <IconInput
              icon="akar-icons:phone"
              error={false /*example*/}
              flipped={true}
              className="index__txt-input"
              placeholder="تلفن همراه"
            />
            <IconInput
              icon="mdi-light:email"
              error={true /*example*/}
              flipped={true}
              className="index__txt-input"
              type="email"
              placeholder="ایمیل"
            />
            <IconInput
              icon="carbon:password"
              flipped={true}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
            />
            <IconInput
              flipped={true}
              className="index__txt-input"
              type="password"
              placeholder="تایید گذرواژه"
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
