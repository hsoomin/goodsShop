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
                <SwiperSlide className='SwiperSlide'>
                    <img src={process.env.PUBLIC_URL + '/img/slide/in01.jpg'}  alt="이미지2"/>
                    <div className="textBox">
                        <h4>일하는 이들을 위해</h4>
                        <p>RARERAW</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img src={process.env.PUBLIC_URL + '/img/slide/in02.jpg'}  alt="이미지2"/>
                    <div className="textBox">
                        <h4>고요한 빛</h4>
                        <p>LUMIR</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default InteriorSlide;