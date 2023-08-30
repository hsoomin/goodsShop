import React from 'react';
import Tab from '../components/Tab';
import Products from '../data/ProductData.json'; 
import Slide from '../components/Slide';

const FabricTest = () => {
    return (
        <div>
            <Slide products={Products}/>
            <Tab products={Products} />
        </div>
    );
};

export default FabricTest;
