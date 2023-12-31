import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Aos from "aos";

const Magazine = () => {

    useEffect(()=> {
        Aos.init({});
    },[]);

    return (
        <div className='magazine'
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="1000"
        >
            <div className="container">
                <div className='magazine-title'>
                    <h2>MAGAZINE</h2>
                </div>
                <div className="magazineList" data-aos="fade-right">
                    <div className="magazine-box">
                            <span className='m'>M</span>
                            <span className='a1'>A</span>
                            <span className='g'>G</span>
                            <span className='a2'>A</span>
                            <span className='z'>Z</span>
                            <span className='i'>I</span>
                            <span className='n'>N</span>
                            <span className='e'>E</span>
                    </div>
                    <Swiper 
                    data-aos="fade-left"
                    className='swiper-wrap'
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    >
                        <SwiperSlide className='mag-img'><img src={process.env.PUBLIC_URL + '/img/mag1.jpg'} alt="" /></SwiperSlide>
                        <SwiperSlide className='mag-img'><img src={process.env.PUBLIC_URL + '/img/mag2.jpg'} alt="" /></SwiperSlide>
                        <SwiperSlide className='mag-img'><img src={process.env.PUBLIC_URL + '/img/mag3.jpg'} alt="" /></SwiperSlide>
                        <SwiperSlide className='mag-img'><img src={process.env.PUBLIC_URL + '/img/mag4.jpg'} alt="" /></SwiperSlide>
                        <SwiperSlide className='mag-img'><img src={process.env.PUBLIC_URL + '/img/mag5.jpg'} alt="" /></SwiperSlide>
                        <SwiperSlide className='mag-img'><img src={process.env.PUBLIC_URL + '/img/mag6.jpg'} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Magazine;