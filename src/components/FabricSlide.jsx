import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './FabricSlide.scss'


const FabricSlide = () => {
    return (
        <div className='FabricSlide'>
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
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa04.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa05.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/interior/slide04.jpg'}  alt="이미지2"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FabricSlide;