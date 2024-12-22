import React, { useState, useEffect } from "react";
import style from "./Checkout.module.css";

import item1 from "../../Assets/CardImages/cardItem1.jpg";
import item2 from "../../Assets/CardImages/cardItem2.png";

import { useNavigate } from "react-router-dom";

import {
  TextBox,
  DropdownInput,
  Checkbox,
  BigButton,
} from "../../Components/ReusableComponents/ReusableComponents";

const Checkout = () => {

  const navigate = useNavigate();

  const submitBtn = () => {
    navigate("/my-orders");
  };



  // Separate state for each input field
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [government, setGovernment] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [selectedOption, setSelectedOption] = useState("cash");
  const [areRequiredFieldsFilled, setAreRequiredFieldsFilled] = useState(false);

  // Track missing fields
  useEffect(() => {
    const missingFields = [];

    if (!email.trim()) missingFields.push("Email");
    if (!country.trim()) missingFields.push("Country");
    if (!address.trim()) missingFields.push("Address");
    if (!firstName.trim()) missingFields.push("First Name");
    if (!lastName.trim()) missingFields.push("Last Name");
    if (!phone.trim()) missingFields.push("Phone");
    if (!city.trim()) missingFields.push("City");
    if (!government.trim()) missingFields.push("Government");

    console.log("Missing fields:", missingFields);

    setAreRequiredFieldsFilled(missingFields.length === 0);
  }, [email, country, address, firstName, lastName, phone, city, government]);

  // Handler functions to update state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email:", e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    console.log("Country:", e.target.value);
  };
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleGovernmentChange = (e) => setGovernment(e.target.value);
  const handleDiscountCodeChange = (e) => setDiscountCode(e.target.value);
  const handleCheckboxChange = (option) => setSelectedOption(option);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areRequiredFieldsFilled) {
      alert("Order submitted successfully");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} className={style.checkout}>
          {/* Left Section */}
          <section className={style.leftSection}>
            {/* Contact */}
            <article className={style.deliveryContactUs}>
              <h2>Contact</h2>
              <div className={style.textBoxAndDropDown}>
                <TextBox
                  label="Email Address"
                  inputType="email"
                  inputPlaceholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
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
                    value={country}
                    onChange={handleCountryChange}
                    width="100%"
                  />
                </div>
                <div className={style.textBoxAndDropDown}>
                  <TextBox
                    label="Address"
                    inputType="text"
                    inputPlaceholder="Where you want to receive your order"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>

              <div className={style.deliveryRow}>
                <div className={style.firstAndSecondName}>
                  <TextBox
                    label="First Name"
                    inputType="text"
                    inputPlaceholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                  <TextBox
                    label="Last Name"
                    inputType="text"
                    inputPlaceholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
                <div className={style.textBoxAndDropDown}>
                  <TextBox
                    label="Phone Number"
                    inputType="number"
                    inputPlaceholder="Phone"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>

              <div className={style.deliveryRow}>
                <div className={style.cityAndGovernment}>
                  <TextBox
                    label="City"
                    inputType="text"
                    inputPlaceholder="Cairo"
                    value={city}
                    onChange={handleCityChange}
                  />
                  <TextBox
                    label="Government"
                    inputType="text"
                    inputPlaceholder="Government"
                    value={government}
                    onChange={handleGovernmentChange}
                  />
                </div>

                <div className={style.textBoxAndDropDown}>
                  <TextBox
                    label="Postal Card (Optional)"
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
                  <strong>M / Blue Navy</strong>
                </div>
                <span className={style.itemImagePrice}>EGP 750</span>
              </div>
              <div className={style.item}>
                <div className={style.itemImageWrapper}>
                  <span>1</span>
                  <img src={item2} alt="Nike Special Kit Hoodie" />
                </div>
                <div className={style.itemImageDescription}>
                  <p>NIKE SPECIAL KIT HOODIE LOREM</p>
                  <strong>M / Blue Navy</strong>
                </div>
                <span className={style.itemImagePrice}>EGP 750</span>
              </div>
            </article>

            <article className={style.discount}>
              <div className={style.textbox}>
                <TextBox
                  label="Discount Code"
                  inputType="text"
                  inputPlaceholder="Discount"
                  value={discountCode}
                  onChange={handleDiscountCodeChange}
                />
              </div>
              <button className={style.discountButton}>Apply</button>
            </article>

            <article className={style.totals}>
              <p className={style.totalBar}>
                <span>Subtotal: </span>
                <strong>EGP 2350</strong>
              </p>
              <p className={style.totalBar}>
                <span>Shipping: </span>
                <strong>EGP 50</strong>
              </p>
              <hr />
              <p className={style.totalBar}>
                <span>Total: </span>
                <strong>EGP 2400</strong>
              </p>
            </article>

            {/* Payment Method */}
            <article className={style.paymentMethod}>
              <h2>Payment Method</h2>
              <div>
                <Checkbox
                  id="cash"
                  label="Cash on Delivery"
                  checked={selectedOption === "cash"}
                  onChange={() => handleCheckboxChange("cash")}
                />
                <Checkbox
                  id="credit"
                  label="Credit Card"
                  checked={selectedOption === "credit"}
                  onChange={() => handleCheckboxChange("credit")}
                />
              </div>
            </article>

            <div className={style.saveAndProceedBtn}>
              <BigButton
                onClick={submitBtn}
                buttonType="submit"
                buttonText="Submit Order"
                disabled={!areRequiredFieldsFilled}
              />
            </div>
          </section>
        </form>
      </main>
    </>
  );
};

export default Checkout;
