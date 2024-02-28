import React, { useState } from 'react';
import styles from './Signup.module.scss';

const Signup = () => {
  const [signupActive, setSignupActive] = useState(false);

  const toggleSignup = () => {
    setSignupActive((prev) => !prev);
  };

  return (
    <div className={`${styles.signup} ${signupActive ? styles.active : ''}`}>
      <a
        href="https://ameoli.4vek.ru/site/login"
        onClick={toggleSignup}
        className={styles.signup__signup}>
        Вход
      </a>
      <a href="https://ameoli.4vek.ru/site/registration" className={styles.signup__text}>
        Регистрация
      </a>
    </div>
  );
};

export default Signup;
