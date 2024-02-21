import styles from './Privacy.module.scss';

const Privacy = ({ setPrivacyActive }) => {
  const togglePrivacy = () => {
    setPrivacyActive((prev) => !prev);
  };
  return (
    <div className={styles.privacy}>
      <p className={styles.privacy__text}>
        Мы используем куки, чтобы улучшить ваше пользовательское взаимодействие с сайтом. Нажмите
        "Принять", чтобы продолжить.
      </p>
      <button onClick={togglePrivacy} className={styles.privacy__button}>
        Принять
      </button>
    </div>
  );
};

export default Privacy;
