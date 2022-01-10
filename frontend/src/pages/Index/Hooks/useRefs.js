import { useRef } from 'react';

const useRefs = () => {
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
  const signupUsername = useRef();
  const signupPhone = useRef();
  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupConfirm = useRef();

  return {
    toggle,
    index,
    wave,
    indexBody,
    loginControls,
    loginUsername,
    loginPassword,
    signupControls,
    signupUsername,
    signupPhone,
    signupEmail,
    signupPassword,
    signupConfirm,
  };
};

export default useRefs;
