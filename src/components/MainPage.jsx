import { AiOutlineArrowRight } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Mainslide from './Mainslide';
import Mdpick from './Mdpick';
import MdTab from './MdTab';
import Magazine from './Magazine';
import axios from 'axios';
import {API_URL} from '../config/constants';
import { useNavigate } from "react-router-dom"; //이동
import Banner from "./Banner";

const MainPage = () => {
    const [products, setProducts]= useState([]);
    useEffect(() => {
        // let url="https://becce8ba-5f81-45f7-90e2-60cde1c4d586.mock.pstmn.io/products";
        // let url="http://localhost:8080/products";
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
    console.log(products)

    //페이지 이동 (header에서 가져옴)
    const navigate =useNavigate();

    return (
        <div>
            <Mainslide/> 
            <Mdpick/> 
            <MdTab/>
            <Banner/>
            <div className="products">
                <h2>products</h2>
                <button className="register-btn" onClick={()=>{navigate('/UploadPage')}}><span>상품 등록하기 <AiOutlineArrowRight /></span></button>
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
                                            <AiOutlineHeart className="product-avatar" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }) }
                </div>
            </div>
            <Magazine/> 
        </div>
    );
};

export default MainPage;