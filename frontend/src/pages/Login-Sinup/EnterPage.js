import React from "react";

import "./EnterPage.css";
import IconInput from './../../components/UI/TextInput/IconInput';
import Button from './../../components/UI/Button/Button';

export default function EnterPage() {
  return (
    <>
      <div className="shap"></div>
      <div className="toggle">{/* <Toggle/> */}</div>
      <div className="input-forms">
        <div className="input-forms__login-form"></div>
        <div className="input-forms__signup-form">
          <form className="input-forms__signup-forms__inputs">
            {/* This is for input componentss  */}
            <IconInput
              className="input-forms__signup-forms__username"
              type="text"
              placeholder="نام کاربری"
            />
            <IconInput
              className="input-forms__signup-forms__tel"
              type="tel"
              placeholder="تلفن همراه"
            />
            <IconInput
              className="input-forms__signup-forms__email"
              type="email"
              placeholder="ایمیل"
            />
            <IconInput
              className="input-forms__signup-forms__password"
              type="password"
              placeholder="گذرواژه"
            />
            <IconInput
              className="input-forms__signup-forms__confirm-password"
              type="password"
              placeholder="تایید گذرواژه"
            />
            <a href="#">حساب کاربری دارید؟</a>
            <Button className="">ثبت</Button>

            <span className="signup-forms__warnig-region--error-required-field"></span>

            <input type="hidden" value={"temp"} />
            {/* for backend */}
          </form>
        </div>
        <div className="signup-forms__warnig-region">
          <a href="#">حساب کاربری ندارید؟</a>
          <span className="signup-forms__warnig-region--errorUsername"></span>
          <span className="signup-forms__warnig-region--errorPasword"></span>
        </div>
      </div>

      <div className="enter-button">
        <Button className="">ورود</Button>
      </div>
    </>
  );
}
