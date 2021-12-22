import React from "react";

import "./ShopIndex.css";
import IconInput from "../../components/ShopIndex/IconInput";
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
            error={true /*example*/} 
            flipped={true}
            className="shop-index__signup-txt-input"
            type="text"
            placeholder="نام کاربری"
          />
          <IconInput
            icon="akar-icons:phone"
            error={false /*example*/}
            flipped={true}
            className="shop-index__signup-txt-input"
            placeholder="تلفن همراه"
          />
          <IconInput
            icon="mdi-light:email"
            error={true /*example*/}
            flipped={true}
            className="shop-index__signup-txt-input"
            type="email"
            placeholder="ایمیل"
          />
            <IconInput
              icon="carbon:password"
              flipped={true}
              className="shop-index__signup-txt-input"
              type="password"
              placeholder="گذرواژه"
            />
            <IconInput
              flipped={true}
              className="shop-index__signup-txt-input"
              type="password"
              placeholder="تایید گذرواژه"
            />
          <Button className="">ثبت</Button>
        </form>
      </div>
    </div>
  );
}
