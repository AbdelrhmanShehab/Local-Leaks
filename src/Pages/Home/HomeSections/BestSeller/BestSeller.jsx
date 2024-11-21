import React, { useState } from 'react';
import style from './BestSeller.module.css';

import bestSeller1 from '../../../../Assets/HomeImages/BestSeller/BestSeller1.jpg';
import bestSeller2 from '../../../../Assets/HomeImages/BestSeller/BestSeller2.jpg';
import bestSeller3 from '../../../../Assets/HomeImages/BestSeller/BestSeller3.jpg';
import bestSeller4 from '../../../../Assets/HomeImages/BestSeller/BestSeller4.jpg';
import bestSeller5 from '../../../../Assets/HomeImages/BestSeller/BestSeller5.jpg';
import bestSeller6 from '../../../../Assets/HomeImages/BestSeller/BestSeller6.jpg';

const BestSellerItems = [
    {
        id: 1001,
        title: 'Hoddie',
        imgs: [bestSeller1, bestSeller2, bestSeller3],
        price: '750',
        description: 'A contemporary design crafted to catch attention while still blending in with the crowd. Super comfy and lightweight makes it perfect for any occasion.'
    }
    ,
    {
        id: 1002,
        title: 'SweatShirt',
        imgs: [bestSeller4, bestSeller5, bestSeller6],
        price: '450',
        description: 'A stylish piece that effortlessly combines modern aesthetics with timeless appeal. Crafted with comfort in mind, this item offers a lightweight feel that’s perfect for any season.'
    }
] 

const BestSeller = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? BestSellerItems.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === BestSellerItems.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={style.bestSeller}>
            <h1>BestSeller</h1>
            <div className={style.bestSellerContainer}>
                <div className={style.bestSellerImgaes}>
                    {/* First and Second Images Stacked */}
                    <div className={style.leftImages}>
                        <img src={BestSellerItems[currentIndex].imgs[0]} alt="BestSeller 1" className={style.firstImg} />
                        <img src={BestSellerItems[currentIndex].imgs[1]} alt="BestSeller 2" className={style.secondImg} />
                    </div>

                    {/* Third Image and Pagination */}
                    <div  className={style.rightContent}>
                        <img src={BestSellerItems[currentIndex].imgs[2]} alt="BestSeller 3" className={style.thirdImg} />
                        {/* Pagination Dots */}
                        <div className={style.pagination}>
                            <button onClick={handlePrevClick}>&lt;</button>
                            {BestSellerItems.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`${style.dot} ${currentIndex === idx ? style.active : ''}`}
                                    onClick={() => handleDotClick(idx)}
                                ></span>
                            ))}
                            <button onClick={handleNextClick}>&gt;</button>
                        </div>
                    </div>
                </div>

                <div className={style.bestSellerDescription}>
                    <h4>{BestSellerItems[currentIndex].title}</h4>
                    <span>{BestSellerItems[currentIndex].price} EGP</span>
                    <div className={style.sizes}>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <button key={size} className={size === 'M' ? style.active : ''}>
                                {size}
                            </button>
                        ))}
                    </div>
                    <p>{BestSellerItems[currentIndex].description}</p>
                    <button className={style.addToBasket}>
                        <i className="fas fa-shopping-cart" style={{ marginRight: "5px" }}></i>
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;