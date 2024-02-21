import { useState } from 'react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import Privacy from '../Privacy/Privacy';
import Signup from '../Signup/Signup';
import styles from './Content.module.scss';
import Video from '../Video/Video';

import IMAGE1 from './../../img/slides/1.jpeg';
import IMAGE2 from './../../img/slides/2.jpeg';
import IMAGE3 from './../../img/slides/3.jpeg';
import IMAGE4 from './../../img/slides/4.jpeg';
import IMAGE5 from './../../img/slides/5.jpeg';

const Content = () => {
  const [privacyActive, setPrivacyActive] = useState(true);

  return (
    <main className={styles.content}>
      <div className={styles.content__signup}>
        <Signup />
      </div>

      <Swiper
        modules={[Pagination, Mousewheel, Keyboard]}
        direction="vertical"
        mousewheel={true}
        keyboard={true}
        spaceBetween={0}
        slidesPerView={1}
        className={styles.content__slider}
        pagination={{
          el: `.${styles.content__pagination}`,
          clickable: true,
          bulletClass: styles.content__bullet,
          bulletActiveClass: styles.content__bullet_active,
        }}>
        <SwiperSlide>
          <img src={IMAGE1} alt="" className={styles.content__image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE2} alt="" className={styles.content__image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE3} alt="" className={styles.content__image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE4} alt="" className={styles.content__image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMAGE5} alt="" className={styles.content__image} />
        </SwiperSlide>
      </Swiper>

      <div className={styles.content__pagination}></div>

      <div className={styles.content__video}>
        <Video />
      </div>

      {privacyActive && (
        <div className={styles.content__privacy}>
          <Privacy setPrivacyActive={setPrivacyActive} />
        </div>
      )}
    </main>
  );
};

export default Content;
