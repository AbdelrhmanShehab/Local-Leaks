import React from 'react';
import style from './LifestyleWear.module.css';

import classicImg from '../../../../Assets/HomeImages/LifestyleWear/Classic.jpg'
import casualImg from '../../../../Assets/HomeImages/LifestyleWear/Casual.jpg'
import streetWareImg from '../../../../Assets/HomeImages/LifestyleWear/StreetWare.jpg'

const LifeStyleWear = [
    {
        imgSrc: classicImg,
        title: 'Classic'
    },
    {
        imgSrc: casualImg,
        title: 'Casual'
    },
    {
        imgSrc: streetWareImg,
        title: 'Street Ware'
    },
]

const LifestyleWear = () => {
    return (
        <div className={style.lifeStyls}>
            {LifeStyleWear.map((lifeStyle, index) => (
                <div className={style.style} >
                    <div className={style.overlay}></div>
                    <img src={lifeStyle.imgSrc} alt={lifeStyle.title} />
                    <h1>{lifeStyle.title}</h1>
                </div>
            ))}
        </div>
    );
};

export default LifestyleWear;