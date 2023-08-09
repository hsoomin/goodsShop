import React from 'react';
import './Interior.scss'

const interior = () => {
    return (
        <div className='interior-wrap'>
            <h2>인테리어</h2>
            <div className='sticky-banner'>
                <img src={process.env.PUBLIC_URL + '/img/sticky01.jpg'} alt="" />
                <div className='sticky-txt'>
                    <h3>인테리어</h3>
                    <p>인테리어 모두보기</p>
                </div>
            </div>
        </div>
    );
};

export default interior;