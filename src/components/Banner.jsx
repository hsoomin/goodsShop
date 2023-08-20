import React, { useState, useEffect } from 'react';


const Banner = () => {

    const [bannerVisible, setBannerVisible] = useState(false);
    const [showParagraphs, setShowParagraphs] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBannerVisible(true);
        }, 500); 
    }, []);

    useEffect(() => {
        if (bannerVisible) {
            const timer = setInterval(() => {
                setShowParagraphs(prevState => prevState + 1);
            }, 500); 

            return () => clearInterval(timer);
        }
    }, [bannerVisible]);

    return (
        <div className={`banner ${bannerVisible ? 'visible' : ''}`}>
            <div className="banner-text">
                <p className={showParagraphs >= 1 ? 'show' : ''}>We select only the high-end Furniture design brand</p>
                <p className={showParagraphs >= 2 ? 'show' : ''}>and create your furniture project.</p>
                <p className={showParagraphs >= 3 ? 'show' : ''}>What we pursue is to let space</p>
                <p className={showParagraphs >= 4 ? 'show' : ''}>have the right tempo for each of our customer.</p>
                <p className={showParagraphs >= 5 ? 'show' : ''}>Not too slow, not too fast,</p>
                <p className={showParagraphs >= 6 ? 'show' : ''}>but the adequate speed for each one.</p>
            </div>
        </div>
    );
};

export default Banner;