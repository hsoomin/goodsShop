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
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa01.jpg'}  alt="이미지2"/>
                    <div className="textBox">
                        <h4>욕실에 더하는 취향</h4>
                        <p>#BATH ITEM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa02.jpg'}  alt="이미지2"/>
                    <div className="textBox">
                        <h4>오늘의 패턴</h4>
                        <p>RITTEN</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/fa03.jpg'}  alt="이미지2"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FabricSlide;