import React,{useState} from 'react';
import Slide from '../components/Slide';
import Tab from '../components/Tab';
import List from '../components/List'; 
import ProductData from '../data/ProductData.json';
import SlideData from '../data/Slide.json';


const Kitchen = () => {
    
    const kitchenSlides = SlideData.filter(slide => slide.category === "kitchen");
    const kitchenProducts = ProductData.filter(
        (product) =>
            product.category === 'new_kitchen' || product.category === 'weekly_kitchen'
    );
    // Define tab labels and values
    const tabLabels = [
        { label: 'New arrivals', value: 'new_kitchen' },
        { label: 'Weekly best', value: 'weekly_kitchen' },
    ];

    const kitchenList = ProductData.filter(product => product.sort === "kitchen");
    //가격 정렬
    const [sortedKitchenList, setSortedKitchenList] = useState([...kitchenList]);

    const handleSortClick = (sortType) => {
        if (sortType === 'low-price') {
            const sortedByLowPrice = [...kitchenList].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            setSortedKitchenList(sortedByLowPrice);
        } else if (sortType === 'high-price') {
            const sortedByHighPrice = [...kitchenList].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            setSortedKitchenList(sortedByHighPrice);
        } else {
            setSortedKitchenList([...kitchenList]);
        }
    };
    

    return (
        <div>
            <Slide slideData={kitchenSlides} />
            <Tab tabs={tabLabels} tabData={kitchenProducts} />
            <List products={sortedKitchenList} onSortClick={handleSortClick} />
        </div>
    );
};

export default Kitchen;


