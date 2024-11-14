import React from 'react';
import style from './Home.module.css';

import Header from '../../Components/Header/Header';

const Home = () => {
    return (
        <div className={style.home}>
            <Header />
        </div>
    );
};

export default Home;