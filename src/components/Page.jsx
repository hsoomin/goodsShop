import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineArrowRight} from "react-icons/ai"; 
import axios from 'axios';
import {API_URL} from '../config/constants';
import Aos from "aos";

const Page = () => {

    const [products, setProducts]= useState([]);
    useEffect(() => {
        let url=`${API_URL}/products`;
        axios.get(url)
        .then((result) =>{
            console.log(result)
            const products=result.data.product;
            setProducts(products)
        }).catch((error)=>{
            console.log(error)
        })
    }, []);
    // console.log(products)

    const navigate =useNavigate();
    
    useEffect(()=> {
        Aos.init({ });
    },[]);

    return (
        <div 
        className="products"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="300"
        >
            <h2>PRODUCTS</h2>
            <button className="register-btn" onClick={()=>{navigate('/UploadPage')}}>
                <span>상품 등록하기 <AiOutlineArrowRight /></span>
            </button>
            <div className="p-list">
                {products.map((product,idx) => {
                    return (
                        <div className="product-card" key={idx}>
                            {product.soldout === 1 ? <div className="product-blur"><p>sold out</p></div> : null}
                            <Link className="product-link" to={`/ProductPage/${product.id}`}  key={product.id}>
                                <img src={`${API_URL}/${product.imageUrl}`} alt="product-img" className="product-img" />
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">{product.price}</span>
                                <div className="product-seller">
                                    <span className="seller">{product.seller}</span>
                                    <AiOutlineHeart className="product-heart" />
                                </div>
                            </Link>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
};

export default Page;