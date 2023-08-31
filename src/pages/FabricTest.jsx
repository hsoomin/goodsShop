import React from 'react';
import Slide from '../components/Slide';
import Tab from '../components/Tab';
import List from '../components/List'; 
import ProductData from '../data/ProductData.json';
import SlideData from '../data/Slide.json';



const FabricTest = () => {
    
    const interiorSlides = SlideData.filter(slide => slide.category === "interior");
    // const interiorSlides = SlideData.filter(slide => slide.category === "fabric");
    // const interiorSlides = SlideData.filter(slide => slide.category === "kitchen");


    const interiorProducts = ProductData.filter(
        (product) =>
            product.category === 'new_interior' || product.category === 'weekly_interior'
    );
    // const interiorProducts = ProductData.filter(product => product.sort === "interior");

    // Define tab labels and values
    const tabLabels = [
        { label: 'New arrivals', value: 'new_interior' },
        { label: 'Weekly best', value: 'weekly_interior' },
    ];

    const interiorList = ProductData.filter(product => product.sort === "interior");
    

    return (
        <div>
            <Slide slideData={interiorSlides} />
            <Tab tabs={tabLabels} tabData={interiorProducts} />
            <List products={interiorList} />
        </div>
    );
};

export default FabricTest;