import React from 'react';
import style from './Home.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';       
import HomeCategories from './HomeSections/HomeCategories/HomeCategories';
import TopBrands from './HomeSections/TopBrands/TopBrands';
import BestSeller from './HomeSections/BestSeller/BestSeller';  

const Home = () => {
    return (
        <div className={style.home}>
            <Header />
            <HomeCategories />
            <TopBrands />
            <BestSeller />
            <Footer />
        </div>
    );
};

export default Home;