import React, { useState, useEffect } from 'react';

const HorizontalScrollBar = () => {
  
  //css에   ::-webkit-scrollbar{width: 0px;}   를 작성하여 스크롤바를 없애준다.
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    const maxScroll = documentHeight - windowHeight;
    const percentage = (scrollTop / maxScroll) * 100;

    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const barWidth = `${scrollPercentage}%`;


  return (
    <div id="VerticalScrollBar" scrollPercentage={scrollPercentage} style={{
      position:"fixed", top:"0", left:"0", width:"100%", height:'5px', backgroundColor:'#444', color:'white', overflow:'hidden', zIndex:'10000000'
    }}>
        <div className="progress-bar" style={{ width: barWidth, height:'5px', backgroundColor:'lavender'}} />
    </div>
  );
};

export default HorizontalScrollBar;