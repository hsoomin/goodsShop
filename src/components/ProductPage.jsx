import { AiOutlineHeart } from "react-icons/ai"; 
import React,{useEffect,useState} from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ProductPage.scss";


const ProductPage = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState(null);

    useEffect(()=>{
        axios.get(`https://becce8ba-5f81-45f7-90e2-60cde1c4d586.mock.pstmn.io/products/${id}`)
        .then((result)=>{
            setProduct(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    console.log(product)
    if(product === null){
        return <h2>상품 정보를 받고 있습니다...</h2>
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} id='back-btn'>이전화면</button>
            <div id="image-box">
                <img src={`/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id='profile-box'>
                <span className='product-seller'>{product.seller}</span>
                {/* <img src="react_goodsShop/img/icons/avatar.png" alt={product.seller} /> */}<AiOutlineHeart />
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="createAt">2023.08.02</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
};

export default ProductPage;