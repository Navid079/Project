import React, { useRef, useContext, useState } from "react";
import { FormContext } from "../../ContextManager/FormContextManager/FormContext";
import axios from "axios";
import { loginApiCall } from "../../API_Calls/LoginApiCall";

import "./Index.css";

import Button from "../../components/UI/Button/Button";
import Toggle from "../../components/UI/Toggle";
import IconInput from "../../components/Index/IconInput";

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

  const loginUsername = useRef();
  const loginPassword = useRef();

  // for error handler
  const [passwordLoginError, setpasswordLoginError] = useState(false);
  const [usernameLoginError, setuserNameLoginError] = useState(false);
  const [userNameSignupError, setuserNameSignupError] = useState(false);
  const [passwordSignupError, setpasswordSignupError] = useState(false);
  const [re_passwordSignupError, setre_passwordSignupError] = useState(false);
  const [emailSignupError, setemailError] = useState(false);
  const [phoneSignupError, setphoneSignupError] = useState(false);

  const { dispatch, username: UN } = useContext(FormContext);

  console.log(UN);

  const validEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Za-z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validPhone = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;

  const loginInputHandler = () => {
    console.log("login");
    if (loginUsername.current.value.length === 0) {
      // please fill all inputs
      setuserNameLoginError(true);
      setpasswordLoginError(true);
      return false;
    } else if (loginPassword.current.value.length === 0) {
      // please fill all inputs
      setpasswordLoginError(true);
      return false;
    } else if (validPassword.test(loginPassword.current.value) === false) {
      // password is invalid
      setpasswordLoginError(true);
      return false;
    }

    return true;
  };

  const inputHandler = () => {
    if (username.current.value.length === 0) {
      alert("please fill all inputs");
      return false;
    } else if (phone.current.value.length === 0) {
      alert("please fill all inputs");
      return false;
    } else if (email.current.value.length === 0) {
      alert("please fill all inputs");
      return false;
    } else if (password.current.value.length === 0) {
      alert("please fill all inputs");
      return false;
    } else if (re_password.current.value.length === 0) {
      alert("please fill all inputs");
      return false;
    } else if (validPhone.test(phone.current.value) === false) {
      alert("Phone number is invalid");
      return false;
    } else if (validEmail.test(email.current.value) === false) {
      alert("Enter email in a right format");
      return false;
    } else if (validPassword.test(password.current.value) == false) {
      alert(
        "Passwords must contain as least 1 uppercase, 1 lowercase, 1 digit, and 1 special character, they also must be at least 8 characters long"
      );
      return false;
    } else if (password.current.value !== re_password.current.value) {
      alert("passwords dont match");
      return false;
    }

    return true;
  };

  const toggleHandler = (position) => {
    wave.current.classList.add("fade-out-in");
    setTimeout(() => {
      wave.current.classList.remove("fade-out-in");
    }, 1020);

    if (position === "left") {
      toggle.current.classList.add("index__toggle--flipped");
      index.current.classList.add("g-flipped");
      indexBody.current.classList.add("g-flipped");
      loginControls.current.classList.remove("g-hidden");
      signupControls.current.classList.add("g-hidden");

      indexBody.current.classList.add("signup-slide");
      setTimeout(() => {
        indexBody.current.classList.remove("signup-slide");
      }, 1020);
    } else {
      toggle.current.classList.remove("index__toggle--flipped");
      index.current.classList.remove("g-flipped");
      indexBody.current.classList.remove("g-flipped");
      loginControls.current.classList.add("g-hidden");
      signupControls.current.classList.remove("g-hidden");

      indexBody.current.classList.add("login-slide");
      setTimeout(() => {
        indexBody.current.classList.remove("login-slide");
      }, 1020);
    }
  };

  const devId = 12345;

  // check all field in input is correct
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    if (loginInputHandler() === false) {
      return;
    }
    const enteredUsername = loginUsername.current.value;
    const enteredPassword = loginPassword.current.value;
    const userType = validEmail.test(enteredUsername)
      ? "email"
      : validPhone.test(enteredUsername)
      ? "phone"
      : "username";

    const loginUser = {
      message: "This message will be logged in server's console",
      data: {
        user: enteredUsername,
        userType: userType,
        password: enteredPassword,
        devId,
      },
    };

    loginApiCall(loginUser, dispatch);
  };

  // check all field in input is correct
  const signupSubmitHandler = async (event) => {
    event.preventDefault();
    if (inputHandler() === false) {
      return;
    }
    const user = {
      message: "signUp req",
      data: {
        username: username.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: password.current.value,
        confirm: re_password.current.value,
        devId: devId,
      },
    };
    try {
      const res = await axios.post("http://localhost:3005/shop/signup", user);
      // history.push('#'), redirect dashboard
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
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
              error={usernameLoginError}
              flipped={false}
              icon="healthicons:ui-user-profile-outline"
              type="txt"
              placeholder="نام کاربری"
              reference={loginUsername}
            />
            <IconInput
              error={passwordLoginError}
              icon="carbon:password"
              flipped={false}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
              reference={loginPassword}
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
              error={userNameSignupError}
              flipped={true}
              className="index__txt-input"
              type="text"
              placeholder="نام کاربری"
              reference={username}
            />
            <IconInput
              icon="akar-icons:phone"
              error={phoneSignupError}
              flipped={true}
              className="index__txt-input"
              placeholder="تلفن همراه"
              reference={phone}
            />
            <IconInput
              icon="mdi-light:email"
              error={emailSignupError}
              flipped={true}
              className="index__txt-input"
              type="email"
              placeholder="ایمیل"
              reference={email}
            />
            <IconInput
              icon="carbon:password"
              error={passwordSignupError}
              flipped={true}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
              reference={password}
            />
            <IconInput
              flipped={true}
              error={re_passwordSignupError}
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
