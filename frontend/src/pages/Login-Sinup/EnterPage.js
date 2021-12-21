import React from "react";
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
