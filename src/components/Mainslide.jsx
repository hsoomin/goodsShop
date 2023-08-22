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
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_101.png'} className='mainImg' alt="이미지1"/>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_101_m.png'} className='mobileImg' alt="이미지1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_102.jpg'} className='mainImg' alt="이미지2"/>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_102_m.jpg'} className='mobileImg' alt="이미지2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_103.png'} className='mainImg' alt="이미지3"/>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_103_m.png'} className='mobileImg' alt="이미지3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_104.png'} className='mainImg' alt="이미지4"/>
                    <img src={process.env.PUBLIC_URL + '/img/mainslide/slide_104_m.png'} className='mobileImg' alt="이미지4"/>
                </SwiperSlide>

            </Swiper>
            <div className="scroll_down"></div>
        </div>
    );
};

export default Mainslide;