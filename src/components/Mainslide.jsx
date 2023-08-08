import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Mainslide = () => {
    return (
        <div>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{
                "--swiper-pagination-color": "lavender",
                "--swiper-navigation-color": "lavender",
            }}
            className="mySwiper">
                {/* 이미지 경로 수정하기 */}
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_01.jpg'}  alt="이미지1"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_02.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_03.jpg'}  alt="이미지3"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_04.jpg'}  alt="이미지4"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_05.jpg'}  alt="이미지5"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Mainslide;