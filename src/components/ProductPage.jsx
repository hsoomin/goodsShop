import { AiOutlineHeart } from "react-icons/ai"; 
import React,{useEffect,useState} from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ProductPage.scss";
import { API_URL} from "../config/constants";
import dayjs from "dayjs";

const ProductPage = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState(null);

    useEffect(()=>{
        axios.get(`${API_URL}/products/${id}`)
        .then((result)=>{
            setProduct(result.data.product)
           /*  console.log(result) */
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

    console.log(product)
    if(product === null){
        return <h2>상품 정보를 받고 있습니다...</h2>
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} id='back-btn'>이전화면</button>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id="contents-box">
                <AiOutlineHeart  className="product-icon"/>
                <span className='product-seller'>{product.seller}</span>
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-createAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
                <div className="product-description">{product.description}</div>
            </div>
        </div>
    );
};

export default ProductPage;