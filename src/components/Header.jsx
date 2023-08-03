import { AiOutlineCloudUpload } from "react-icons/ai"; 
import { CgClose } from "react-icons/cg"; 
import { RxHamburgerMenu } from "react-icons/rx"; 
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; //이동
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import Navbar from './Navbar';
import { CSSTransition } from 'react-transition-group'; 
import './DropdownMenu.css'



const Header = () => {

    const [icon,setIcon]=useState(true);

    //페이지 이동하게
    const navigate =useNavigate();

    const toggleMenu=()=>{
        setIcon(prevIcon =>!prevIcon)
    };
    useEffect(()=>{
        console.log('nav is rendered')
    },[icon])

    return (
        <header className="header">
            <div className="container">
                <h1><Link to="/"><img  src={logo} alt="logo"  className="logo" /></Link></h1>
                <Navbar />
                <div className="mobileBar">
                    {icon ? ( <RxHamburgerMenu className="hamIcon" onClick={toggleMenu}/>) :(<CgClose className="closeIcon" onClick={toggleMenu}/>)}
                    <CSSTransition
                    in={!icon}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                    ><Navbar /></CSSTransition>
                </div>
                <button className="btn" onClick={()=>{navigate('/UploadPage')}}><AiOutlineCloudUpload /></button>
            </div>
        </header>
    );
};

export default Header;