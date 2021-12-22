import React from "react";

import "./ShopIndex.css";
import IconInput from "../../components/UI/TextInput/IconInput";
import Button from "../../components/UI/Button/Button";
import Toggle from "../../components/UI/Toggle";

export default function ShopIndex() {
  const toggleHandler = (position) => {
    // will be added
    // position argument can be "left" or "right"
  };

  return (
    <div className="shop-index">
      {/* =========         WAVE         ========= */}
      <div className="shop-index__wave--mobile" />

      {/* =========        TOGGLE        ========= */}
      <Toggle
        className="shop-index__toggle"
        leftLabel="ورود"
        rightLabel="ثبت نام"
        onToggle={toggleHandler}
      />

      {/* =========    FORM CONTAINERS    ========= */}
      <div className="shop-index__controls">
        {/* ========= LOGIN FORM CONTAINER ========= */}
        <form className="shop-index__login-controls"></form>

        {/* ========= SIGNUP FORM CONTAINER ========= */}
        <form className="shop-index__signup-controls">
          <IconInput
            icon="healthicons:ui-user-profile-outline"
            flipped={true}
            className="input-forms__signup-forms__username"
            type="text"
            placeholder="نام کاربری"
          />
          <IconInput
            icon="akar-icons:phone"
            flipped={true}
            className="input-forms__signup-forms__tel"
            type="tel"
            placeholder="تلفن همراه"
          />
          <IconInput
            icon="mdi-light:email"
            flipped={true}
            className="input-forms__signup-forms__email"
            type="email"
            placeholder="ایمیل"
          />
          <div className="input-forms__signup-forms__password-container">
            <IconInput
              icon="carbon:password"
              flipped={true}
              className="input-forms__signup-forms__password"
              type="password"
              placeholder="گذرواژه"
            />
            <IconInput
              className="input-forms__signup-forms__confirm-password"
              type="password"
              placeholder="تایید گذرواژه"
            />
          </div>
          <a href="#">حساب کاربری دارید؟</a>
          <Button className="">ثبت</Button>

          <span className="signup-forms__warnig-region--error-required-field"></span>

          <input type="hidden" value={"temp"} />
          {/* for backend */}
        </form>

        <div className="signup-forms__warnig-region">
          <a href="#">حساب کاربری ندارید؟</a>
          <span className="signup-forms__warnig-region--errorUsername"></span>
          <span className="signup-forms__warnig-region--errorPasword"></span>
        </div>
      </div>

      <div className="enter-button">
        <Button className="">ورود</Button>
      </div>
    </div>
  );
}
