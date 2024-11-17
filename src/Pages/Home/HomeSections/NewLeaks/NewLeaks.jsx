import React from 'react';
import style from './NewLeaks.module.css';

import newLeaks1 from '../../../../Assets/NewLeaks/NewLeaks1.jpg';
import newLeaks2 from '../../../../Assets/NewLeaks/NewLeaks2.jpg';
import newLeaks3 from '../../../../Assets/NewLeaks/NewLeaks3.jpg';
import newLeaks4 from '../../../../Assets/NewLeaks/NewLeaks4.jpg';
import newLeaks5 from '../../../../Assets/NewLeaks/NewLeaks5.jpg';

const NewLeaksImages = [
    {
        id: 2001,
        imgSrc: newLeaks1,
        price: "600"
    },
    {
        id: 2002,
        imgSrc: newLeaks2,
        price: "500"
    },
    {
        id: 2003,
        imgSrc: newLeaks3,
        price: "400"
    },
    {
        id: 2004,
        imgSrc: newLeaks4,
        price: "700"
    },
    {
        id: 2005,
        imgSrc: newLeaks5,
        price: "500"
    }
]


const NewLeaks = () => {
    return (
        <div className={style.newLeaks}>
            <h1>New Leaks</h1>
            <div className={style.newLeaksContainer}>
                <div className={style.newLeaksLeftImg}>
                    <img src={NewLeaksImages[0].imgSrc} alt="" />
                </div>
                <div className={style.newLeaksRightImgs}>
                    <img src={NewLeaksImages[1].imgSrc}  alt="" />
                    <img src={NewLeaksImages[2].imgSrc}  alt="" />
                    <img src={NewLeaksImages[3].imgSrc}  alt="" />
                    <img src={NewLeaksImages[4].imgSrc}  alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewLeaks;