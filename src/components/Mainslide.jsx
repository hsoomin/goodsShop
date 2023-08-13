import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


const Mainslide = () => {
    return (
        <div className='mainSlide'>
            <Swiper
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            style={{
                "--swiper-navigation-color": "lavender",
            }}
            className="mySwiper">
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_101.jpg'}  alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_104.png'}  alt="이미지5"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_103.jpg'}  alt="이미지4"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_100.jpg'}  alt="이미지1"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_102.jpg'}  alt="이미지3"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_105.png'}  alt="이미지3"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide_105.jpg'}  alt="이미지3"/></SwiperSlide>

            </Swiper>
            <div className="scroll_down"></div>
        </div>
    );
};

export default Mainslide;