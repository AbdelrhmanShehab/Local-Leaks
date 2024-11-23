import React from 'react';
import style from './Home.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';       
import HomeCategories from './HomeSections/HomeCategories/HomeCategories';
import TopBrands from './HomeSections/TopBrands/TopBrands';
import BestSeller from './HomeSections/BestSeller/BestSeller';  
import NewLeaks from './HomeSections/NewLeaks/NewLeaks';
import OurServices from './HomeSections/OurServices/OurServices';
import LifestyleWear from './HomeSections/LifestyleWear/LifestyleWear';
import NewSletter from './HomeSections/NewSletter/NewSletter';

const Home = () => {
    return (
        <div className={style.home}>
            <Header />
            <HomeCategories />
            <TopBrands />
            <BestSeller />
            <NewLeaks />
            <OurServices />
            <LifestyleWear />
            <NewSletter />
            <Footer />
        </div>
    );
};

export default Home;