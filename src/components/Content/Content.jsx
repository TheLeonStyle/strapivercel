import { useEffect, useState } from 'react';
import axios from 'axios';
import { STRAPI_URL } from '../../utils/URL';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import styles from './Content.module.scss';

import Privacy from '../Privacy/Privacy';
import Signup from '../Signup/Signup';
import Video from '../Video/Video';
import Calculator from '../Calculator/Calculator';

import IMAGE1 from './../../img/slides/1.jpeg';
import IMAGE2 from './../../img/slides/2.jpeg';
import IMAGE3 from './../../img/slides/3.jpeg';
import IMAGE4 from './../../img/slides/4.jpeg';
import IMAGE5 from './../../img/slides/5.jpeg';

const Content = ({ navActive, token }) => {
  const [privacyActive, setPrivacyActive] = useState(true);
  const [slides, setSlides] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const slideSelection =
      navActive === 0
        ? 'mains'
        : navActive === 1
        ? 'heads'
        : navActive === 2
        ? 'hunters'
        : navActive === 3
        ? 'hospitals'
        : 'Ameolis';

    const fetchData = async () => {
      try {
        const response = await axios.get(`${STRAPI_URL}/api/slide-${slideSelection}?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSlides(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [navActive]);

  // console.log(slides);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  // ${STRAPI_URL}

  return (
    <main className={styles.content}>
      <div className={styles.content__signup}>
        <Signup />
      </div>

      <div className={styles.content__container}>
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
          {slides.map((obj) => (
            <SwiperSlide>
              <img
                src={`${
                  windowWidth > 767
                    ? obj.attributes?.imagePc?.data?.attributes?.url
                    : obj.attributes?.imageMobile?.data?.attributes?.url
                }`}
                alt="Изображение слайда"
                className={styles.content__image}
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
          <SwiperSlide style={{ overflow: 'auto' }}>
            <Calculator />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.content__pagination}></div>

      <div className={styles.content__video}>
        <Video />
      </div>

      {privacyActive && (
        <div className={styles.content__privacy}>
          <Privacy setPrivacyActive={setPrivacyActive} token={token} />
        </div>
      )}
    </main>
  );
};

export default Content;
