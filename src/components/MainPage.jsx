import React from 'react';
import Mainslide from './Mainslide';
import Mdpick from './Mdpick';
import MdTab from './MdTab';
import Magazine from './Magazine';
import Banner from "./Banner";
import Page from "./Page";

const MainPage = () => {

    return (
        <div>
            <Mainslide/> 
            <Mdpick/> 
            <MdTab/>
            <Banner/>
            <Page/>
            <Magazine/> 
        </div>
    );
};

export default MainPage;