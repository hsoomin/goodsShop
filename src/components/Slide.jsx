import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideData from '../data/Slide.json'; 

const Slide = () => {
    return (
        <div className='Slide'>
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
                {SlideData.map((slide) => (
                    <SwiperSlide key={slide.id} className='SwiperSlide'>
                        <img src={process.env.PUBLIC_URL + slide.imageUrl} className='mainImg' alt={`이미지${slide.id}`} />
                        <img src={process.env.PUBLIC_URL + slide.mobile_imageUrl} className='mobileImg' alt={`이미지${slide.id}`} />
                        <div className="textBox">
                            <h4>{slide.title}</h4>
                            <p>{slide.subtitle}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slide;
