import React, { useState } from 'react';
import styles from './Signup.module.scss';

const Signup = () => {
  const [signupActive, setSignupActive] = useState(false);

  const toggleSignup = () => {
    setSignupActive((prev) => !prev);
  };

  return (
    <div className={`${styles.signup} ${signupActive ? styles.active : ''}`}>
      <a href="#Signup" onClick={toggleSignup} className={styles.signup__signup}>
        Вход
      </a>
      <p className={styles.signup__text}>Регистрация</p>
    </div>
  );
};

export default Signup;
