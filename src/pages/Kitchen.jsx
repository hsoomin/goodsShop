import React  from 'react';
import Slide from '../components/Slide';
import Tab from '../components/Tab';
import List from '../components/List'; 
import SlideData from '../data/Slide.json';
import ProductData from '../data/ProductData.json';


const Kitchen = () => {
    
    const kitchenSlides = SlideData.filter(slide => slide.category === "kitchen");
    const kitchenProducts = ProductData.filter(
        (product) =>
            product.category === 'new_kitchen' || product.category === 'weekly_kitchen'
    );
    const tabLabels = [
        { label: 'New arrivals', value: 'new_kitchen' },
        { label: 'Weekly best', value: 'weekly_kitchen' },
    ];
    const kitchenList = ProductData.filter(product => product.sort === "kitchen");

    return (
        <div>
            <Slide slideData={kitchenSlides} />
            <Tab tabs={tabLabels} tabData={kitchenProducts} />
            <List products={kitchenList} />
        </div>
    );
};

export default Kitchen;


