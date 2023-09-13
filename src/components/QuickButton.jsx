import React, { useState, useEffect } from 'react';
import { BiUpArrowAlt } from "react-icons/bi"; 

const QuickButton = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0,behavior: "smooth"});
    };

    return isVisible && (
        <div 
        className="QuickButton"
        onClick={scrollToTop}
        style={{position:'fixed', right: '20px', bottom: '14%', zIndex:101}}>
            <button 
            className="quick_top" 
            type="button"
            style={{width: 56,height: 56,borderRadius: '50%',background: 'lavender',border:'none',cursor: 'pointer'}}
            >
                <BiUpArrowAlt style={{color:'#fff', fontSize:35,}}/>
            </button>
        </div>
    );
};

export default QuickButton;
