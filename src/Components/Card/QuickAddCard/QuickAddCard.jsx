import React, { useState } from 'react';
import style from './QuickAddCard.module.css';

import cardImage from '../../../Assets/CardImages/cardItem1.jpg';

const QuickAddCard = ({ onClose }) => {
    const [selectedColor, setSelectedColor] = useState(null); // State for selected color

    const addToCartBtn = () => {
        onClose();
    };


    const colors = ['#FF5733', '#C70039', '#900C3F']; // Fixed color array

    const handleClickInside = (event) => {
        event.stopPropagation(); // Prevent click from propagating to the overlay
    };

    const handleColorClick = (color) => {
        setSelectedColor((prevColor) => (prevColor === color ? null : color)); // Toggle color selection
    };

    return (
        <main className={style.quickAddCard} onClick={handleClickInside}>
            <button className={style.closeButton} onClick={onClose} aria-label="Close Quick Add Card">
                ✖
            </button>
            <article  className={style.quickAddCardHeader}>
                <img src={cardImage} alt="Regular Fit Satin Trousers" className={style.productImage} />
                <div className={style.quickAddCardHeaderDescription}>
                    <h1 id="quickAddTitle" className={style.productTitle}>
                        Regular Fit Regular Hem Satin Trousers
                    </h1>
                    <span>800 EGP</span>
                </div>
            </article>
            <section className={style.productDetails}>
                <div className={style.productDetailsColor}>
                    <h2>Color:</h2>
                    <div className={style.colorOptions} role="radiogroup" aria-label="Choose a color">
                        {colors.map((color, index) => (
                            <span
                                key={index}
                                className={`${style.colorDot} ${selectedColor === color ? style.colorDotSelected : ''}`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorClick(color)}
                                role="radio"
                                aria-checked={selectedColor === color}
                                tabIndex={0}
                                aria-label={`Select color ${color}`}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className={style.productDetailsSize}>
                    <h2>Size:</h2>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
            </section>
            <div className={style.quickAddCardButton}>
                <button onClick={addToCartBtn}>Add to cart</button>
                <button>Buy it now</button>
            </div>
        </main>
    );
};

export default QuickAddCard;
