import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="foot-memu">
                    <div className="foot-addr">
                        <h3 className='foot-logo'><img src= {require("../img/logo.png")}  alt="" /></h3>
                        <address>경기도 성남시 분당구 801 <br/> Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</address>
                        <div className='copy'>COPYRIGHT &copy; SOOMIN ALL RIGHT RESERVED.</div>
                    </div>
                    <ul className='foot-info'>
                        <li><Link to="">ABOUT US</Link>
                            <ul>
                                <li><Link to="">Company</Link></li>
                                <li><Link to="">Recruit</Link></li>
                                <li><Link to="">Contact</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">HELP</Link>
                            <ul>
                                <li><Link to="">Notice</Link></li>
                                <li><Link to="">FAQ</Link></li>
                                <li><Link to="">1:1 question</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;