import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiOutlineArrowRight} from "react-icons/ai"; 
import axios from 'axios';
import {API_URL} from '../config/constants';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
        Aos.init({
            duration: 2000, 
            delay: 500,     
        });
    },[]);



    return (
        <div 
        className="products"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        >
            <h2>products</h2>
            <button className="register-btn" onClick={()=>{navigate('/UploadPage')}}>
                <span>상품 등록하기 <AiOutlineArrowRight /></span>
            </button>
            <div id="product-list" className="p-list">
                {products.map((product) => {
                    return (
                        <div className="product-card">
                            {product.soldout === 1 ? <div className="product-blur"><p>sold out</p></div> : null}
                            <Link className="product-link" to={`/ProductPage/${product.id}`}  key={product.id}>
                                <div>
                                    <img src={`${API_URL}/${product.imageUrl}`} alt="product-img" className="product-img" />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}</span>
                                    <div className="product-seller">
                                        <span className="seller">{product.seller}</span>
                                        <AiOutlineHeart className="product-heart" />
                                    </div>
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