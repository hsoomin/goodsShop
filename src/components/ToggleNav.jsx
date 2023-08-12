import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './ToggleNav.scss'
import logo from '../img/logo.png';
import { CgClose } from "react-icons/cg"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import $ from 'jquery'; // npm install jquery


const ToggleNav = () => {

    //메뉴 오픈 토글
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
        $('.header-drop').slideToggle(500);
    };

    //스크롤 배경 색깔 변경
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <h1><Link to="/"><img  src={logo} alt="logo" className="logo" /></Link></h1>
                <div className="menuBar">
                    {menuOpen ? (
                        <AiOutlineMenu className="menu-icon" onClick={toggleMenu} />
                    ) : (
                        <CgClose className="close-menu" onClick={toggleMenu} />
                    )}
                </div>
            </div>
            <div className={`header-drop ${menuOpen ? '' : 'open'}`}>
                <div>
                    <div className="header-drop-menu-list">
                        <ul className="depth1">
                            <li><NavLink to="/interior">Interior</NavLink></li>
                            <li><NavLink to="/kitchen">Kitchen</NavLink></li>
                            <li><NavLink to="/fabric">Fabric</NavLink></li>
                            <li><NavLink to="/event">Event</NavLink></li>
                        </ul>
                    </div>
                    <div className="header-drop-menu-footer">
                        <ul>
                            <li><Link to='/'>Login</Link></li>
                            <li><Link to='/'>Join Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ToggleNav;