import { useRef } from 'react';

export default () => {
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
  const confirm = useRef();

  const loginUsername = useRef();
  const loginPassword = useRef();

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
