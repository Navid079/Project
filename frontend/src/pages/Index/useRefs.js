import { useRef } from 'react';

export default () => {
  // Shared Refs
  const toggle = useRef();
  const index = useRef();
  const wave = useRef();
  const indexBody = useRef();
  
  // Login Refs
  const loginControls = useRef();
  const loginUsername = useRef();
  const loginPassword = useRef();

  // Signup Refs
  const signupControls = useRef();
  const username = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const confirm = useRef();

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
