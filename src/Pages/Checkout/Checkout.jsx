import React, {useState} from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import style from "./Checkout.module.css";

import item1 from '../../Assets/CardImages/cardItem1.jpg';
import item2 from '../../Assets/CardImages/cardItem2.png';

import { TextBox, DropdownInput } from "../../Components/ReusableComponents/ReusableComponents";



const Checkout = () => {

    const [selectedCountry, setSelectedCountry] = useState("");



    return (
        <>
            <Header />
            <main className={style.checkout}>
                {/* Left Section */}
                <section className={style.leftSection}>
                    {/* Contact */}
                    <article>
                        <h2>Contact</h2>
                        <div className={style.textBoxAndDropDown}>
                            <TextBox
                                label="Email Address"
                                inputType="email"
                                inputPlaceholder="Email Address"
                            />
                        </div>
                    </article>

                    {/* Delivery */}
                    <article className={style.delivery}>
                        <h2>Delivery</h2>
                        <div className={style.deliveryRow}>
                            <div className={style.textBoxAndDropDown}>
                                <DropdownInput
                                    inputLabel="Country"
                                    defaultOption="Egypt"
                                    options={[
                                        { value: "palestine", label: "Palestine" },
                                        { value: "egypt", label: "Egypt" },
                                        { value: "oman", label: "Oman" },
                                        { value: "sudia", label: "Sudia" },
                                    ]}
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    width="100%"
                                />
                            </div>
                            <div className={style.textBoxAndDropDown}>
                                <TextBox
                                    label="Address"
                                    inputType="text"
                                    inputPlaceholder="Where you want to receive your order"
                                />
                            </div>
                        </div>

                        <div className={style.deliveryRow}>
                            <div className={style.firstAndSecondName}>
                                <TextBox
                                    label="First Name"
                                    inputType="text"
                                    inputPlaceholder="First Name"
                                />
                                <TextBox
                                    label="Last Name"
                                    inputType="text"
                                    inputPlaceholder="Last Name"
                                />
                            </div>
                            <div className={style.textBoxAndDropDown}>
                                <TextBox
                                    label="Phone Number"
                                    inputType="number"
                                    inputPlaceholder="phone"
                                />
                            </div>
                        </div>

                        <div className={style.deliveryRow}>
                            <div className={style.cityAndGovernment}>
                                <TextBox
                                    label="City"
                                    inputType="text"
                                    inputPlaceholder="Cairo"
                                />
                                <TextBox
                                    label="Government"
                                    inputType="text"
                                    inputPlaceholder="Government"
                                />
                            </div>
                            <div className={style.textBoxAndDropDown}>
                                <TextBox
                                    label="Postal Card(Optional)"
                                    inputType="number"
                                    inputPlaceholder=""
                                />
                            </div>
                        </div>
                    </article>
                </section>

                {/* Right Section */}
                <section className={style.rightSection}>
                    <article className={style.orderSummary}>
                        <div className={style.item}>
                            <div className={style.itemImageWrapper}>
                                <span>1</span>
                                <img src={item1} alt="Nike Special Kit Hoodie" />
                            </div>
                            <div className={style.itemImageDescription}>
                                <p>NIKE SPECIAL KIT HOODIE LOREM</p>
                                <p>M / Blue Navy</p>
                            </div>
                            <p className={style.itemImagePrice}>EGP 750</p>
                        </div>
                        <div className={style.item}>
                            <div className={style.itemImageWrapper}>
                                <span>1</span>
                                <img src={item2} alt="Nike Special Kit Hoodie" />
                            </div>
                            <div>
                                <p>NIKE SPECIAL KIT HOODIE LOREM</p>
                                <p>M / Blue Navy</p>
                            </div>
                            <p>EGP 750</p>
                        </div>
                    </article>

                    <article className={style.discount}>
                        <label htmlFor="discountCode">Discount Code</label>
                        <div className={style.discountRow}>
                            <input
                                type="text"
                                id="discountCode"
                                name="discountCode"
                                placeholder="Discount"
                            />
                            <button>Apply</button>
                        </div>
                    </article>

                    <article className={style.totals}>
                        <p>
                            Subtotal: <span>EGP 2350</span>
                        </p>
                        <p>
                            Shipping: <span>EGP 50</span>
                        </p>
                        <p className={style.total}>
                            Total: <span>EGP 2400</span>
                        </p>
                    </article>

                    {/* Payment Method */}
                    <article className={style.paymentMethod}>
                        <h2>Payment Method</h2>
                        <div>
                            <label>
                                <input type="radio" name="payment" value="cod" />
                                Cash On Delivery
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="payment" value="online" />
                                Pay Online (Cards - Wallets)
                            </label>
                        </div>
                    </article>
                    <button className={style.proceedButton}>Save and Proceed</button>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Checkout;
