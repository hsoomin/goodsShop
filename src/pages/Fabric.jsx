import React from 'react';
import Slide from '../components/Slide';
import Tab from '../components/Tab';
import List from '../components/List'; 
import SlideData from '../data/Slide.json';
import ProductData from '../data/ProductData.json';


const Fabric = () => {
    
    const fabricSlides = SlideData.filter(slide => slide.category === "fabric");
    const fabricProducts = ProductData.filter(
        (product) =>
            product.category === 'new_fabric' || product.category === 'weekly_fabric'
    );
    //label: 탭에 표시될 텍스트, value: 해당 탭에 대한 값
    const tabLabels = [
        { label: 'New arrivals', value: 'new_fabric' },
        { label: 'Weekly best', value: 'weekly_fabric' },
    ];
    const fabricList = ProductData.filter(product => product.sort === "fabric");

    return (
        <div>
            <Slide slideData={fabricSlides} />
            <Tab tabs={tabLabels} tabData={fabricProducts} />
            <List products={fabricList} />
        </div>
    );
};

export default Fabric;

