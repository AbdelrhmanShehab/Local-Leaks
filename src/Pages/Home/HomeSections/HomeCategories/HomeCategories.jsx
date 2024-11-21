import React from 'react';
import style from './HomeCategories.module.css';

import EncryptedStyle from '../../../../Assets/HomeImages/HomeCategories/EncryptedStyle.jpg';
import MostPopular from '../../../../Assets/HomeImages/HomeCategories/MostPopular.jpg';
import MenCollections from '../../../../Assets/HomeImages/HomeCategories/MenCollections.jpg';
import WomanCollections from '../../../../Assets/HomeImages/HomeCategories/WomanCollections.jpg';
import WinterLeaks from '../../../../Assets/HomeImages/HomeCategories/WinterLeaks.jpg';

const HomeCategories = () => {
    return (
        <div className={style.container}>
            <div className={style.leftContainer}>
                <button>
                    <img src={MostPopular} alt="MostPopular" />
                    <div class={style.overlay}></div>
                    <h2>Most Popular</h2>
                </button>
                <button>
                    <img src={WinterLeaks} alt="WinterLeaks" />
                    <div class={style.overlay}></div>
                    <h2>Winter Leaks</h2>
                </button>
            </div>
            <div className={style.midContainer}>
                <button className={style.encryptedStyle}>
                    <img src={EncryptedStyle} alt="EncryptedStyle" />
                    <div class={style.overlay}></div>
                    <h1>Encrypted Style Decrypted for You</h1>
                </button>
                <button>
                    <img src={MenCollections} alt="MenCollections" />
                    <div class={style.overlay}></div>
                    <h2>Men Collections</h2>
                </button>
            </div>
            <div className={style.rightContainer}>
                <button>
                    <img src={WomanCollections} alt="WomanCollections" />
                    <div class={style.overlay}></div>
                    <h2>Woman Collections</h2>
                </button>
            </div>
        </div>
    );
};

export default HomeCategories;