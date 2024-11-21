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
                    <div className={style.overlay}></div>
                    <h2>Most Popular</h2>
                </button>
                <button>
                    <img src={WinterLeaks} alt="WinterLeaks" />
                    <div className={style.overlay}></div>
                    <h2>Winter Leaks</h2>
                </button>
            </div>
            <div className={style.midContainer}>
                <div className={style.encryptedStyle}>
                    <img src={EncryptedStyle} alt="EncryptedStyle" />
                    <div className={style.overlay}></div>
                    <h1>Encrypted Style Decrypted for You</h1>
                </div>
                <button>
                    <img src={MenCollections} alt="MenCollections" />
                    <div className={style.overlay}></div>
                    <h2>Men Collections</h2>
                </button>
            </div>
            <div className={style.rightContainer}>
                <button>
                    <img src={WomanCollections} alt="WomanCollections" />
                    <div className={style.overlay}></div>
                    <h2>Woman </h2>
                </button>
            </div>
        </div>
    );
};

export default HomeCategories;