import React from 'react';
import style from './Items.module.css';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Items = () => {
    return (
        <>
            <Header />
            <main className={style.items}>
                <aside></aside>
                <section></section>
            </main>
            <Footer />
        </>
    );
};

export default Items;