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
                            <button onClick={handlePrevClick}>
                                {/* &lt; */}
                                <svg width="18" height="15" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.906 24.6579C14.2603 24.6646 14.608 24.5595 14.9008 24.3571C15.1936 24.1548 15.4171 23.8653 15.5404 23.5286C15.6636 23.1919 15.6806 22.8247 15.5889 22.4779C15.4972 22.131 15.3013 21.8216 15.0284 21.5924L4.58482 12.5333L15.0349 3.47416C15.2258 3.33314 15.3858 3.15356 15.5047 2.94674C15.6237 2.73992 15.6991 2.51036 15.7261 2.27254C15.7531 2.03473 15.7312 1.79382 15.6617 1.56502C15.5922 1.33622 15.4766 1.12451 15.3223 0.94323C15.168 0.761953 14.9783 0.615055 14.7652 0.511805C14.552 0.408554 14.3201 0.351196 14.0839 0.343348C13.8478 0.335497 13.6126 0.377327 13.3933 0.466198C13.1739 0.555069 12.9751 0.689054 12.8094 0.859694L0.862804 11.2065C0.674924 11.3691 0.524068 11.571 0.420628 11.7984C0.317186 12.0257 0.26362 12.2731 0.26362 12.5235C0.26362 12.7739 0.317186 13.0212 0.420628 13.2486C0.524068 13.476 0.674924 13.6779 0.862804 13.8405L12.8094 24.22C13.1136 24.4907 13.5013 24.6455 13.906 24.6579Z" fill="white"/>
                                </svg>
                            </button>
                            {BestSellerItems.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`${style.dot} ${currentIndex === idx ? style.active : ''}`}
                                    onClick={() => handleDotClick(idx)}
                                ></span>
                            ))}
                            <button onClick={handleNextClick}>
                                {/* &gt; */}
                                <svg width="18" height="15" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.094 0.342095C1.73965 0.335437 1.39202 0.440541 1.09922 0.642862C0.806411 0.845184 0.582908 1.13472 0.459632 1.4714C0.336356 1.80809 0.319405 2.17527 0.411125 2.52214C0.502845 2.86902 0.698701 3.17843 0.971589 3.40756L11.4152 12.4667L0.965137 21.5258C0.774225 21.6669 0.614234 21.8464 0.495262 22.0533C0.376289 22.2601 0.300918 22.4896 0.273906 22.7275C0.246893 22.9653 0.268825 23.2062 0.338318 23.435C0.407811 23.6638 0.523356 23.8755 0.67766 24.0568C0.831964 24.238 1.02168 24.3849 1.23483 24.4882C1.44798 24.5914 1.67994 24.6488 1.91606 24.6567C2.15219 24.6645 2.38736 24.6227 2.60673 24.5338C2.8261 24.4449 3.02491 24.3109 3.19061 24.1403L15.1372 13.7935C15.3251 13.6309 15.4759 13.429 15.5794 13.2016C15.6828 12.9743 15.7364 12.7269 15.7364 12.4765C15.7364 12.2261 15.6828 11.9788 15.5794 11.7514C15.4759 11.524 15.3251 11.3221 15.1372 11.1595L3.19061 0.780018C2.88641 0.509339 2.49866 0.354493 2.094 0.342095Z" fill="white"/>
                                </svg>
                            </button>
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