import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import firstProduct from '../../Assets/CardImages/cardItem1.jpg';
import secondProduct from '../../Assets/CardImages/cardItem2.png';

import style from './Cart.module.css';

const Cart = () => {
    return (
        <div className={style.cart}>


            <h1 className={style.cartHeader}>Your Cart</h1>
            <p className={style.cartCount}>2 Products</p>

            <main className={style.cartMain}>
                <section className={style.cartDetails}>

                    {/* Product 1 */}
                    <article className={style.cartItem}>
                        <img
                            src={firstProduct}
                            alt="Nike Special Kit Hoodie"
                            className={style.cartItemImage}
                        />
                        <div className={style.cartItemDetails}>
                            <h2 className={style.cartItemTitle}>NIKE SPECIAL KIT HOODIE</h2>
                            <p className={style.cartItemColorSize}>M / Blue Navy</p>
                            <p className={style.cartItemPriceAndTotalPricee}>
                                Price:<span className={style.cartItemPrice}>EGP 750</span>
                                &nbsp;   Total:<span className={style.cartItemPrice}>EGP 750</span>
                            </p>
                        </div>
                        <div className={style.cartItemQuantity}>
                            Qty
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </div>
                        <button className={style.cartItemRemove} aria-label="Remove item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M135.2 17.7c6.1-10.2 17.1-17.7 29.6-17.7h118.4c12.5 0 23.6 7.4 29.6 17.7l11.3 18.3H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.5 68.5 16c-8.8 0-16-7.2-16-16s7.2-16 16-16H123.9l11.3-18.3zm-55.2 78.3H368L347.7 452.3c-2.1 23.1-21.7 41.7-44.9 41.7H145.2c-23.2 0-42.8-18.6-44.9-41.7L80 96zm89.5 89.5c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12s12-5.4 12-12V197.5c0-6.6-5.4-12-12-12zm96 0c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12s12-5.4 12-12V197.5c0-6.6-5.4-12-12-12zm-48 0c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12s12-5.4 12-12V197.5c0-6.6-5.4-12-12-12z" />
                            </svg>
                        </button>
                    </article>

                    {/* Product 2 */}
                    <article className={style.cartItem}>
                        <img
                            src={secondProduct}
                            alt="Nike Special Kit Hoodie"
                            className={style.cartItemImage}
                        />
                        <div className={style.cartItemDetails}>
                            <h2 className={style.cartItemTitle}>NIKE SPECIAL KIT HOODIE</h2>
                            <p className={style.cartItemColorSize}>M / Gray</p>
                            <p className={style.cartItemPriceAndTotalPricee}>
                                Price:<span className={style.cartItemPrice}>EGP 800</span>
                                &nbsp;   Total:<span className={style.cartItemPrice}>EGP 1600</span>
                            </p>
                        </div>
                        <div className={style.cartItemQuantity}>
                            Qty
                            <button>+</button>
                            <span>2</span>
                            <button>-</button>
                        </div>
                        <button className={style.cartItemRemove} aria-label="Remove item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M135.2 17.7c6.1-10.2 17.1-17.7 29.6-17.7h118.4c12.5 0 23.6 7.4 29.6 17.7l11.3 18.3H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.5 68.5 16c-8.8 0-16-7.2-16-16s7.2-16 16-16H123.9l11.3-18.3zm-55.2 78.3H368L347.7 452.3c-2.1 23.1-21.7 41.7-44.9 41.7H145.2c-23.2 0-42.8-18.6-44.9-41.7L80 96zm89.5 89.5c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12s12-5.4 12-12V197.5c0-6.6-5.4-12-12-12zm96 0c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12s12-5.4 12-12V197.5c0-6.6-5.4-12-12-12zm-48 0c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12s12-5.4 12-12V197.5c0-6.6-5.4-12-12-12z" />
                            </svg>
                        </button>
                    </article>
                </section>

                <aside className={style.orderSummary}>
                    <div className={style.orderSummaryHeader}>
                        <h2>Order Summary</h2>
                    </div>
                    <div className={style.orderSummaryDetails}>
                        <div className={style.orderSummaryDetailsPrice}>
                            <p>
                                Total: <span>EGP 2350</span>
                            </p>
                            <p>
                                Shipping: <span>to be calculated</span>
                            </p>
                        </div>
                        <button className={style.checkoutButton}>Go to checkout</button>
                        <button className={style.continueShopping}>Continue shopping</button>
                    </div>
                </aside>
            </main>


        </div>
    );
};

export default Cart;
