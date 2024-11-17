import React from 'react';
import style from './BestSeller.module.css';

import bestSeller1 from '../../../../Assets/BestSeller/BestSeller1.jpg';
import bestSeller2 from '../../../../Assets/BestSeller/BestSeller2.jpg';
import bestSeller3 from '../../../../Assets/BestSeller/BestSeller3.jpg';
import bestSeller4 from '../../../../Assets/BestSeller/BestSeller4.jpg';
import bestSeller5 from '../../../../Assets/BestSeller/BestSeller5.jpg';
import bestSeller6 from '../../../../Assets/BestSeller/BestSeller6.jpg';

const BestSellerItems = [
    {
        title: 'Hoddie',
        imgs: [
            bestSeller1,
            bestSeller2,
            bestSeller3
        ]
    }
    // ,
    // {
    //     title: 'SweatShirt',
    //     imgs: [
    //         bestSeller4,
    //         bestSeller5,
    //         bestSeller6
    //     ]
    // }
] 

const BestSeller = () => {
    return (
        <div className={style.bestSeller}>
            <h1>BestSeller</h1>
            <div className={style.bestSellerContainer}>
                {BestSellerItems.map((item, index) => (
                    <div className={style.bestSellerImgaes}>
                        {/* First and Second Images Stacked */}
                        <div className={style.leftImages}>
                            <img src={item.imgs[0]} alt="BestSeller 1" className={style.firstImg} />
                            <img src={item.imgs[1]} alt="BestSeller 2" className={style.secondImg} />
                        </div>

                        {/* Third Image and Pagination */}
                        <div  className={style.rightContent}>
                            <img src={item.imgs[2]} alt="BestSeller 3" className={style.thirdImg} />
                            <button>Hello</button>
                        </div>
                    </div>
                ))}

                <div className={style.bestSellerDescription}>
                    <h4>Brand Name</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur et.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;