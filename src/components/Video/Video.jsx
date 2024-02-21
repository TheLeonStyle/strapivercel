import React from 'react';
import styles from './Video.module.scss';
import VIDEO from './../../img/Video.svg';

const Video = () => {
  return (
    <a href="#video" className={styles.video}>
      <img src={VIDEO} alt="Видео иконка" className={styles.video__image} />
      Видео о продукте
    </a>
  );
};

export default Video;
