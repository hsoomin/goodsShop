import React from 'react';
import './ToggleNav.scss'
import {Link, NavLink} from 'react-router-dom';
import logo from '../img/logo.png'; //src
import { CgClose } from "react-icons/cg"; 
import { AiOutlineMenu } from "react-icons/ai"; 

const ToggleNav = () => {

    return (
        <header className="header">
            <div className="container">
                <h1><Link to="/"><img  src={logo} alt="logo"  className="logo" /></Link></h1>
                <div className="menuBar">
                    <AiOutlineMenu className="menu-icon"/>
                    <CgClose className="close-menu"/>
                </div>
            </div>
            <div className="header-drop">
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
                            <li><Link to='/'>Sing Up</Link></li>
                            <li><Link to='/'>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ToggleNav;


