import { useEffect, useState } from 'react';
import axios from 'axios';
import { STRAPI_URL } from '../../utils/URL';

import styles from './Privacy.module.scss';

const Privacy = ({ setPrivacyActive, token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${STRAPI_URL}/api/privacy`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data.attributes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const togglePrivacy = () => {
    setPrivacyActive((prev) => !prev);
  };
  return (
    <div className={styles.privacy}>
      <p className={styles.privacy__text}>{data.title}</p>
      <button onClick={togglePrivacy} className={styles.privacy__button}>
        {data.button}
      </button>
    </div>
  );
};

export default Privacy;
