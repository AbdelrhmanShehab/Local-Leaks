import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import firstProduct from "../../Assets/CardImages/cardItem1.jpg";
import secondProduct from "../../Assets/CardImages/cardItem2.png";
import cardBasket from "../../Assets/basketCart.svg";

import style from "./Cart.module.css";

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
                &nbsp; Total:
                <span className={style.cartItemPrice}>EGP 750</span>
              </p>
            </div>
            <div className={style.cartItemQuantity}>
              Qty
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <button className={style.cartItemRemove} aria-label="Remove item">
              <img src={cardBasket} alt="Delete" /> 
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
                &nbsp; Total:
                <span className={style.cartItemPrice}>EGP 1600</span>
              </p>
            </div>
            <div className={style.cartItemQuantity}>
              Qty
              <button>+</button>
              <span>2</span>
              <button>-</button>
            </div>
            <button className={style.cartItemRemove} aria-label="Remove item">
              <img src={cardBasket} alt="Delete" />
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
            <button className={style.continueShopping}>
              Continue shopping
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Cart;
