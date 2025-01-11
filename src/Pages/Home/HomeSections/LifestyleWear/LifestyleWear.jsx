import React from 'react';
import style from './LifestyleWear.module.css';

import classicImg from '../../../../Assets/HomeImages/LifestyleWear/Classic.jpg';
import casualImg from '../../../../Assets/HomeImages/LifestyleWear/Casual.jpg';
import streetWareImg from '../../../../Assets/HomeImages/LifestyleWear/StreetWare.jpg';

const LifeStyleWear = [
    {
        imgSrc: classicImg,
        title: 'Classic',
    },
    {
        imgSrc: casualImg,
        title: 'Casual',
    },
    {
        imgSrc: streetWareImg,
        title: 'Street Ware',
    },
];

const LifestyleWear = () => {
    return (
        <section className={style.lifeStyle}>
            {LifeStyleWear.map((lifeStyle, index) => (
                <article className={style.style} key={index}>
                    <div className={style.greenShadow} aria-hidden="true"></div>
                    <figure>
                        <img src={lifeStyle.imgSrc} alt={lifeStyle.title} />
                        <figcaption className={style.titleBackgroundShadow}>
                            <h1 className={style.title}>{lifeStyle.title}</h1>
                        </figcaption>
                    </figure>
                    <div className={style.overlay} aria-hidden="true"></div>
                </article>
            ))}
        </section>
    );
};

export default LifestyleWear;

