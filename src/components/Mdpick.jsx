import { AiOutlineHeart } from "react-icons/ai"; 
import React,{useEffect} from 'react';
import Aos from "aos";

const Mdpick = () => {

    useEffect(()=> {
        Aos.init({
            duration: 2000, 
            delay: 100,     
        });
    },[]);


    return (
        <div 
        className='mdpick'  
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        >
            <h2>BEST ITEM</h2>
            <div className="mdList">
                <ul>
                    <li>
                        <span className="md-img"><img src= {process.env.PUBLIC_URL + '/img/products/product_md1.jpg'}  alt="" /></span>
                        <span className="md-name">side table</span>
                        <span className="md-price">380000</span>
                        <div className="bg">
                            <p>favorite</p> 
                            <span><AiOutlineHeart /></span>
                        </div>
                    </li>
                    <li>
                        <span className="md-img"><img src= {process.env.PUBLIC_URL + '/img/products/product_md2.jpg'}  alt="" /></span>
                        <span className="md-name">eco bag</span>
                        <span className="md-price">44000</span>
                        <div className="bg">
                            <p>favorite</p> 
                            <span><AiOutlineHeart /></span>
                        </div>
                    </li>
                    <li>
                        <span className="md-img"><img src= {process.env.PUBLIC_URL + '/img/products/product_md3.jpg'}  alt="" /></span>
                        <span className="md-name">keyring</span>
                        <span className="md-price">24000</span>
                        <div className="bg">
                            <p>favorite</p> 
                            <span><AiOutlineHeart /></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mdpick;