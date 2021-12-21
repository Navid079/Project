import React from "react";

import TextInput from "../../components/UI/TextInput/TextInput";

import "./EnterPage.css";

export default function EnterPage() {
  return (
    <>
      <div className="shap"></div>
      <div className="toggle">{/* <Toggle/> */}</div>
      <div className="input-forms">
        <div className="input-forms__login-form"></div>
        <div className="input-forms__signup-form">
          <div className="input-forms__signup-forms__inputs">
            {/* This is for input componentss  */}
            <TextInput
              className="input-forms__signup-forms__username"
              type="text"
              placeholder="نام کاربری"
            />
            <TextInput
              className="input-forms__signup-forms__tel"
              type="tel"
              placeholder="تلفن همراه"
            />
            <TextInput
              className="input-forms__signup-forms__email"
              type="email"
              placeholder="ایمیل"
            />
            <TextInput
              className="input-forms__signup-forms__password"
              type="password"
              placeholder="گذرواژه"
            />
            <TextInput
              className="input-forms__signup-forms__confirm-password"
              type="password"
              placeholder="تایید گذرواژه"
            />
            <a href="#">حساب کاربری دارید؟</a>
            <button className="">ثبت</button>
            {/* component should change later */}
            {/* <TextInput type="submit" value="ثبت" /> */}

            <span className="signup-forms__warnig-region--error-required-field"></span>

            <input type="hidden" value={"temp"} />
            {/* for backend */}
          </div>
        </div>
        <div className="signup-forms__warnig-region">
          <a href="#">حساب کاربری ندارید؟</a>
          <span className="signup-forms__warnig-region--errorUsername"></span>
          <span className="signup-forms__warnig-region--errorPasword"></span>
        </div>
      </div>

      <div className="enter-button">
        <button className="">ورود</button>
      </div>
    </>
  );
}
