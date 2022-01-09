import React, { useRef, useContext, useState } from 'react';
import { FormContext } from '../../ContextManager/FormContextManager/FormContext';
import { loginApiCall } from '../../API_Calls/LoginApiCall';
import { signupApiCall } from '../../API_Calls/SignupApiCall';
import useStates from './useStates'


import "./Index.css";

import Button from "../../components/UI/Button/Button";
import Toggle from "../../components/UI/Toggle";
import IconInput from "../../components/Index/IconInput";

export default function Index() {
  const states = useStates();
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
  
  const { dispatch, username: UN, error } = useContext(FormContext);

  if (Object.keys(error).length !== 0) {
    const conflicts = error.data.conflicts;
    if (error.page === 'login') {
      if (error.status === 404) {
        alert('user not found');
      } else if (error.status === 401) {
        alert('wrong password');
      } else if (error.status === 422) {
        if (
          error.data.conflicts.filter(
            (element) =>
              element === 'user' || element === 'phone' || element === 'email'
          )
        ) {
          alert('wrong username');
        } else if (
          error.data.conflicts.filter((element) => element === 'password')
        ) {
          alert('wrong password');
        }
      }
    } else if (error.page === 'signup') {
      if (error.status === 409) {
        if (conflicts.indexOf('username') !== -1) {
          alert('username already exists');
        } else if (conflicts.indexOf('email') !== -1) {
          alert('email already exists');
        } else if (conflicts.indexOf('phone') !== -1) {
          alert('phone number already exists');
        }
      } else if (error.status === 422) {
        if (conflicts.indexOf('username') !== -1) {
          alert('username required');
        } else if (conflicts.indexOf('email') !== -1) {
          alert('email required');
        } else if (conflicts.indexOf('phone') !== -1) {
          alert('phone number already exists');
        } else if (conflicts.indexOf('password') !== -1) {
          alert('password is too weak');
        } else if (conflicts.indexOf('confirm') !== -1) {
          alert('passwords dont match');
        }
      }
    }
    dispatch({type: 'UNSET_ERROR'})
  }

  const validEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Za-z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validPhone = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;

  const loginInputHandler = () => {
    states.setUsernameLoginError(false);
    states.setPasswordLoginError(false);
    if (
      loginUsername.current.value.length === 0 &&
      loginPassword.current.value.length === 0
    ) {
      // please fill all inputs
      states.setUsernameLoginError(true);
      states.setPasswordLoginError(true);
      return false;
    }
    if (loginUsername.current.value.length === 0) {
      // please fill all inputs
      states.setUsernameLoginError(true);
      return false;
    } else if (loginPassword.current.value.length === 0) {
      // please fill all inputs
      states.setPasswordLoginError(true);
      return false;
    } else if (validPassword.test(loginPassword.current.value) === false) {
      // password is invalid
      states.setPasswordLoginError(true);
      return false;
    }

    return true;
  };

  //for cheking and handel show error icon in signup
  const onChangeHandler = () => {
    states.setEmailSignupError(false);
    states.setPhoneSignupError(false);
    states.setPasswordSignupError(false);
    states.setUsernameSignupError(false);
    states.setConfirmSignupError(false);

    // To know which input the user is on
    switch (window.event.target.placeholder) {
      case "نام کاربری":
        if (window.event.target.value.length === 0) {
          states.setUsernameSignupError(true);
        }
        break;
      case "گذرواژه":
        if (password.current.value.length === 0) {
          states.setPasswordSignupError(true);
        } else if (validPassword.test(password.current.value) == false) {
          states.setPasswordSignupError(true);
        } else if (password.current.value !== re_password.current.value) {
          states.setConfirmSignupError(true);
        }
        break;
      case "تایید گذرواژه":
        if (validPassword.test(password.current.value) == false) {
          states.setPasswordSignupError(true);
        }
        if (password.current.value !== re_password.current.value) {
          states.setConfirmSignupError(true);
        }
        break;
      case "ایمیل":
        if (email.current.value.length === 0) {
          states.setEmailSignupError(true);
        } else if (validEmail.test(email.current.value) === false) {
          states.SetEmailSignupError(true);
        }
        break;
      case "تلفن همراه":
        if (phone.current.value.length === 0) {
          states.setPhoneSignupError(true);
        } else if (validPhone.test(phone.current.value) === false) {
          states.setPhoneSignupError(true);
        }
        break;
    }
  };
  const inputHandler = () => {
    var flag = true;
    states.setEmailSignupError(false);
    states.setPhoneSignupError(false);
    states.setPasswordSignupError(false);
    states.setUsernameSignupError(false);
    states.setConfirmSignupError(false);

    if (username.current.value.length === 0) {
      states.setUsernameSignupError(true);
      flag = false;
    }
    if (phone.current.value.length === 0) {
      states.setPhoneSignupError(true);
      flag = false;
    }
    if (email.current.value.length === 0) {
      states.setEmailSignupError(true);
      flag = false;
    }
    if (password.current.value.length === 0) {
      states.setPasswordSignupError(true);
      flag = false;
    }
    if (re_password.current.value.length === 0) {
      states.setConfirmSignupError(true);
      flag = false;
    }
    if (validPhone.test(phone.current.value) === false) {
      states.setPhoneSignupError(true);
      flag = false;
    }
    if (validEmail.test(email.current.value) === false) {
      states.setEmailSignupError(true);
      flag = false;
    }
    if (validPassword.test(password.current.value) == false) {
      states.setPasswordSignupError(true);
      flag = false;
    }
    if (password.current.value !== re_password.current.value) {
      states.setConfirmSignupError(true);
      flag = false;
    }
    if (flag) {
      return true;
    } else {
      return false;
    }
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
    signupApiCall(user, dispatch);
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
              error={states.usernameLoginError}
              flipped={false}
              icon="healthicons:ui-user-profile-outline"
              type="txt"
              placeholder="نام کاربری"
              reference={loginUsername}
              onKeyPress={loginInputHandler}
            />
            <IconInput
              error={states.passwordLoginError}
              icon="carbon:password"
              flipped={false}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
              reference={loginPassword}
              onKeyPress={loginInputHandler}
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
              error={states.usernameSignupError}
              flipped={true}
              className="index__txt-input"
              type="text"
              placeholder="نام کاربری"
              reference={username}
              onKeyPress={onChangeHandler}
            />
            <IconInput
              icon="akar-icons:phone"
              error={states.phoneSignupError}
              flipped={true}
              className="index__txt-input"
              placeholder="تلفن همراه"
              reference={phone}
              onKeyPress={onChangeHandler}
            />
            <IconInput
              icon="mdi-light:email"
              error={states.emailSignupError}
              flipped={true}
              className="index__txt-input"
              type="email"
              placeholder="ایمیل"
              reference={email}
              onKeyPress={onChangeHandler}
            />
            <IconInput
              icon="carbon:password"
              error={states.passwordSignupError}
              flipped={true}
              className="index__txt-input"
              type="password"
              placeholder="گذرواژه"
              reference={password}
              onKeyPress={onChangeHandler}
            />
            <IconInput
              flipped={true}
              error={states.confirmSignupError}
              className="index__txt-input"
              type="password"
              placeholder="تایید گذرواژه"
              reference={re_password}
              onKeyPress={onChangeHandler}
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
