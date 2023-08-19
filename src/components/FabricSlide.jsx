import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './InteriorSlide.scss'


const InteriorSlide = () => {
    return (
        <div className='InteriorSlide'>
            <Swiper
            className="mySwiper"
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{
                "--swiper-pagination-color": "#fffffe",
                "--swiper-navigation-color": "#666",
            }}
            >
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa03.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa04.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa05.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/interior/slide04.jpg'}  alt="이미지2"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default InteriorSlide;