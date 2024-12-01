import React, { useState } from "react";
import style from "./ReusableComponents.module.css";
import RegistrationPhoto from '../../Assets/registrationPhoto.jpg';

// small button component/

export const SmallButton = ({ smallButtonLabel }) => {
  return <button className={style.smallButton}>{smallButtonLabel}</button>;
};

// BigButton Component
export const BigButton = ({ buttonType, buttonText, disabled }) => {
  return (
    <button className={style.bigButton} type={buttonType} disabled={disabled}>
      {buttonText}
    </button>
  );
};


// Checkbox
export const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <li className={style.checkBox}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

// Textbox and its label
export const TextBox = ({
  label,
  inputType,
  inputPlaceholder,
  forgetPassword,
}) => {
  return (
    <div>
      <label htmlFor={inputType} className={style.textBoxLabel}>
        <span>{label}</span>
        {/* Conditionally render the "Forgot password?" link based on forgetPassword prop */}
        {inputType === "password" && forgetPassword === "yes" && (
          <a href="/login">Forgot password?</a>
        )}
      </label>
      <input
        type={inputType}
        id={inputType}
        placeholder={inputPlaceholder}
        className={style.textBoxInputField}
        required
      />
    </div>
  );
};

// Google Button
export const GoogleButton = () => {
  return (
    <button
      className={style.googleLogin}
      type="button"
      aria-label="Login with Google"
    >
      <svg
        width="20"
        height="17"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.76215 15.7122L4.85713 19.0908L1.54929 19.1607C0.560727 17.3272 0 15.2294 0 13.0001C0 10.8443 0.524266 8.81147 1.45356 7.02148H1.45427L4.39918 7.56139L5.68923 10.4886C5.41922 11.2758 5.27206 12.1208 5.27206 13.0001C5.27216 13.9543 5.44502 14.8687 5.76215 15.7122Z"
          fill="#00FF2A"
        />
        <path
          d="M25.7728 10.5713C25.9221 11.3577 26 12.1698 26 12.9999C26 13.9306 25.9021 14.8384 25.7157 15.7142C25.0829 18.6942 23.4293 21.2963 21.1386 23.1377L21.1379 23.137L17.4286 22.9477L16.9036 19.6706C18.4236 18.7792 19.6115 17.3842 20.2372 15.7142H13.2858V10.5713H25.7728Z"
          fill="#00FF2A"
        />
        <path
          d="M21.1379 23.1369L21.1386 23.1376C18.9108 24.9283 16.0807 25.9997 13 25.9997C8.04932 25.9997 3.74505 23.2326 1.54932 19.1605L5.76218 15.7119C6.86002 18.6419 9.68645 20.7276 13 20.7276C14.4243 20.7276 15.7586 20.3426 16.9036 19.6705L21.1379 23.1369Z"
          fill="#00FF2A"
        />
        <path
          d="M21.2978 2.99284L17.0864 6.44069C15.9014 5.69999 14.5007 5.27211 13 5.27211C9.61141 5.27211 6.73211 7.45352 5.68927 10.4886L1.45426 7.02142H1.45355C3.61714 2.85 7.97569 0 13 0C16.1543 0 19.0464 1.12359 21.2978 2.99284Z"
          fill="#00FF2A"
        />
      </svg>
      <span>Login with Google</span>
    </button>
  );
};


// AuthenticationBanner For Login and Signup banner
export const AuthenticationBanner = () => {
  return (
    <section className={style.bannerSection}>
        <img 
            src={RegistrationPhoto}
            alt="Promotional image for Local Leaks" 
            className={style.leftImage} 
        />
        <h1 className={style.bannerSectionShopSmart}>Shop Smart</h1>
        <h2 className={style.bannerSectionShopLocal}>Shop Local.</h2>
        <h3 className={style.bannerSectionLocalLeaks}>Local Leaks</h3>
    </section>
  );
};


// selected Inputs
export const InputSelect = ({ inputLabel, buttons, onChange }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonText) => {
    // Toggle selection
    const newValue = selectedButton === buttonText ? null : buttonText;
    setSelectedButton(newValue);

    // Call external callback if provided
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={style.inputSelectGroup}>
      <label className={style.inputSelectLabel}>{inputLabel}</label>
      <div className={style.inputSelectOptions}>
        {buttons.map((buttonText, index) => (
          <button
            key={index}
            className={`${style.inputSelectButton} ${
              selectedButton === buttonText ? style.active : ""
            }`}
            onClick={() => handleButtonClick(buttonText)}
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
};


// Dropdown Input
export const DropdownInput = ({ inputLabel, defaultOption, options, onChange, width }) => {
  return (
    <div className={style.inputGroup}>
      {inputLabel && <label className={style.inputLabel}>{inputLabel}</label>}
      <select
        className={style.selectBox}
        onChange={onChange}
        style={{ width: width || '72px' }} // Use the passed width prop, fallback to default
      >
        <option value="">{defaultOption} </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};