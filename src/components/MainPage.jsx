import { AiOutlineHeart } from "react-icons/ai"; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Mainslide from './Mainslide';
import Mdpick from './Mdpick';
import MdpickTab from './MdpickTab'; //탭으로 바꿀까
import Magazine from './Magazine';
import axios from 'axios';


const MainPage = () => {
    const [products, setProducts]= useState([]);
    useEffect(() => {
        let url="https://becce8ba-5f81-45f7-90e2-60cde1c4d586.mock.pstmn.io/products";
        axios.get(url)
        .then((result) =>{
            const products=result.data.products;
            setProducts(products)
        }).catch((error)=>{
            console.log(error)
        })
    }, []);
    console.log(products)

    return (
        <div>
            <Mainslide/> 
            <Mdpick/> 
            <MdpickTab/>
            <div className="banner">
                <p>Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="products">
                <h2>products</h2>
                <div id="product-list" className="p-list">
                    {products.map((product, idx) => {
                        return (
                            <Link className="product-link" to={`/ProductPage/${idx}`}>
                                <div className="product-card" key={idx}>
                                    <div>
                                        <img src={product.imageUrl} alt="1" className="product-img" />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <div className="product-seller">
                                            <span className="seller">{product.seller}</span>
                                            <AiOutlineHeart className="product-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) }
                </div>
            </div>
            <Magazine/> 
        </div>
    );
};

export default MainPage;