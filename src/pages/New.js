import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const New = () => {
  return (
    <div className='new'>
      {/* main */}
      <main className='main' style={{ backgroundImage: `url(/images/sub-main-bg.png)` }}>
        <h5>New</h5>
        <h2> 신메뉴</h2>
      </main>

      {/* section - nav */}
      <nav className='new-nav'>
        <ul>
          <li><Link to="/bend">공차 이야기</Link></li>
          <li>|</li>
          <li><Link to="/new">신메뉴</Link></li>
          <li>|</li>
          <li><Link to="/menu">전체메뉴</Link></li>
        </ul>
      </nav>

      {/* section - new-menu */}
      <section className='new-menu'>
        <div className="new-menu-inner">
          <div className='bar'></div>
          <h2>공차의 신메뉴를 소개합니다</h2>
          <img src="/images/new-main.png" alt="신메뉴포스터" />
        </div>
      </section>

      {/* section - swiper */}
      <section className='new-swiper'>
          <div className='bar'></div>
          <h2>다양한 신메뉴를 만나보세요</h2>
        <div className="newslider-wrapper">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/new01.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new02.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new03.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new04.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new05.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new06.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new07.png" alt="신메뉴포스터" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/new08.png" alt="신메뉴포스터" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default New
