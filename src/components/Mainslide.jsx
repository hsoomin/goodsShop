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
                <SwiperSlide className='mainImg'><img src="react_goodsShop/img/mainslide/slide1.jpg"  alt="이미지1"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src="react_goodsShop/img/mainslide/slide2.jpg" alt="이미지2"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src="react_goodsShop/img/mainslide/slide3.jpg" alt="이미지23"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src="react_goodsShop/img/mainslide/slide3.png" alt="이미지3"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src="react_goodsShop/img/mainslide/slide4.jpg" alt="이미지4"/></SwiperSlide>
                <SwiperSlide className='mainImg'><img src="react_goodsShop/img/mainslide/slide5.jpg" alt="이미지5"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Mainslide;