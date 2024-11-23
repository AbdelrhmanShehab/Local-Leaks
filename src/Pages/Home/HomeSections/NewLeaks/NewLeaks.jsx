import React from 'react';
import style from './NewLeaks.module.css';

import newLeaks1 from '../../../../Assets/HomeImages/NewLeaks/NewLeaks1.jpg';
import newLeaks2 from '../../../../Assets/HomeImages/NewLeaks/NewLeaks2.jpg';
import newLeaks3 from '../../../../Assets/HomeImages/NewLeaks/NewLeaks3.jpg';
import newLeaks4 from '../../../../Assets/HomeImages/NewLeaks/NewLeaks4.jpg';
import newLeaks5 from '../../../../Assets/HomeImages/NewLeaks/NewLeaks5.jpg';

const NewLeaksImages = [
    {
        id: 2001,
        imgSrc: newLeaks1,
        price: "600",
    },
    {
        id: 2002,
        imgSrc: newLeaks2,
        price: "500",
    },
    {
        id: 2003,
        imgSrc: newLeaks3,
        price: "400",
    },
    {
        id: 2004,
        imgSrc: newLeaks4,
        price: "700",
    },
    {
        id: 2005,
        imgSrc: newLeaks5,
        price: "500",
    },
];

const NewLeaks = () => {
    return (
        <section className={style.newLeaks}>
            <header>
                <h1>New Leaks</h1>
            </header>
            <div className={style.newLeaksContainer}>
                {/* Highlighted Item */}
                <article className={style.newLeaksLeftImg}>
                    <figure>
                        <img src={NewLeaksImages[0].imgSrc} alt={`Product ${NewLeaksImages[0].id}`} />
                        <figcaption>
                            <div className={style.overlay}></div>
                            <div className={style.priceAndAddBtn}>
                                <h2>{NewLeaksImages[0].price} EGP</h2>
                                <button>
                                    <i className="fas fa-shopping-cart" style={{ marginRight: "5px" }}></i>
                                    Add to Basket
                                </button>
                            </div>
                        </figcaption>
                    </figure>
                </article>

                {/* Smaller Items */}
                <div className={style.newLeaksRightImgs}>
                    {NewLeaksImages.slice(1).map((item) => (
                        <article key={item.id} className={style.newLeaksRightImg}>
                            <figure>
                                <img src={item.imgSrc} alt={`Product ${item.id}`} />
                                <figcaption>
                                    <div className={style.overlay}></div>
                                    <div className={style.priceAndAddBtn}>
                                        <h2>{item.price} EGP</h2>
                                        <button>
                                            <i className="fas fa-shopping-cart" style={{ marginRight: "5px" }}></i>
                                            Add to Basket
                                        </button>
                                    </div>
                                </figcaption>
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewLeaks;
