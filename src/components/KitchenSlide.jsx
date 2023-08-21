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
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/ki02.jpg'}  alt="이미지2"/>
                    <div className="textBox">
                        <h4>백지 위 맑고 <br /> 흰 빛</h4>
                        <p>WHITEBLOOM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/ki03.jpg'}  alt="이미지3"/>
                    <div className="textBox">
                        <h4>주말을 더  <br />특별하게</h4>
                        <p>MOMUR WEEKEND</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'><img src={process.env.PUBLIC_URL + '/img/slide/ki04.jpg'}  alt="이미지3"/>
                <div className="textBox">
                        <h4>루밍과 준비하는 가을</h4>
                        <p>ROOMING</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default KitchenSlide;