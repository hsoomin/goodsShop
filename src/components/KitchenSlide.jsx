import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './KitchenSlide.scss'


const KitchenSlide = () => {
    return (
        <div className='KitchenSlide'>
            <Swiper
            className="mySwiper"
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
            delay: 4000,
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
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/ki01.jpg'}  alt="이미지1"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/ki02.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/ki03.jpg'}  alt="이미지3"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default KitchenSlide;