import React from "react";

import "./Index.css";

import Button from "../../components/UI/Button/Button";
import Toggle from "../../components/UI/Toggle";
import IconInput from "../../components/Index/IconInput";

export default function Index() {
  const toggleHandler = (position) => {
    // will be added
    // position argument can be "left" or "right"
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
    <div className="index">
      {/* =========         WAVE         ========= */}
      <div className="index__wave" />

      <main className="index__body">
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
            className="index__login-controls"
            onSubmit={loginSubmitHandler}
          ></form>

          {/* ========= SIGNUP FORM CONTAINER ========= */}
          <form
            className="index__signup-controls"
            onSubmit={signupSubmitHandler}
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
