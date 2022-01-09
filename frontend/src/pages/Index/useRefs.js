import { useRef } from 'react';

let initialized = false;

let toggle,
  index,
  wave,
  loginControls,
  signupControls,
  indexBody,
  username,
  phone,
  email,
  password,
  confirm,
  loginUsername,
  loginPassword;

export default () => {
  if (initialized) return;
  initialized = true;

  toggle = useRef();
  index = useRef();
  wave = useRef();
  loginControls = useRef();
  signupControls = useRef();
  indexBody = useRef();

  username = useRef();
  phone = useRef();
  email = useRef();
  password = useRef();
  confirm = useRef();

  loginUsername = useRef();
  loginPassword = useRef();

  return {
    toggle,
    index,
    wave,
    loginControls,
    signupControls,
    indexBody,
    username,
    phone,
    email,
    password,
    confirm,
    loginUsername,
    loginPassword,
  };
};

export const getRefs = () => {
  return {
    toggle,
    index,
    wave,
    loginControls,
    signupControls,
    indexBody,
    username,
    phone,
    email,
    password,
    confirm,
    loginUsername,
    loginPassword,
  };
};
