import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    //active
    const activeStyle={
        color:'purple'
    }
    return (
        <nav className='nav'>
            <ul className='listWrap'>
                <li><NavLink to="/interior" style={({isActive})=>(isActive ? activeStyle:undefined)}>INTERIOR</NavLink></li>
                <li><NavLink to="/kitchen" style={({isActive})=>(isActive ? activeStyle:undefined)}>KITCHEN</NavLink></li>
                <li><NavLink to="/fabric" style={({isActive})=>(isActive ? activeStyle:undefined)}>FABRIC</NavLink></li>
                <li><NavLink to="/event" style={({isActive})=>(isActive ? activeStyle:undefined)}>EVENT</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;