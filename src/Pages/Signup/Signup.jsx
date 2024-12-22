import React, { useState } from "react";
import style from "./Signup.module.css";

import { useNavigate } from "react-router-dom";

import {
  TextBox,
  GoogleButton,
  BigButton,
  AuthenticationBanner,
  InputSelect,
  DropdownInput,
} from "../../Components/ReusableComponents/ReusableComponents";

const Signup = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false); // State to toggle views
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGender, setSelectedGender] = useState(""); // For gender
  const [selectedStyle, setSelectedStyle] = useState(""); // For style

  const handleSignupSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    setShowMoreInfo(true); // Show More Information section
  };

  const handleSelectionChange = (selected, type) => {
    if (type === "gender") {
      setSelectedGender(selected);
    } else if (type === "style") {
      setSelectedStyle(selected);
    }
  };

  // Generate days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString().padStart(2, "0"),
  }));
  const months = [
    { value: 1, label: "Jan" },
    { value: 2, label: "Feb" },
    { value: 3, label: "Mar" },
    { value: 4, label: "Apr" },
    { value: 5, label: "May" },
    { value: 6, label: "Jun" },
    { value: 7, label: "Jul" },
    { value: 8, label: "Aug" },
    { value: 9, label: "Sep" },
    { value: 10, label: "Oct" },
    { value: 11, label: "Nov" },
    { value: 12, label: "Dec" },
  ];
  const years = Array.from({ length: 124 }, (_, i) => ({
    value: 2023 - i,
    label: `${2023 - i}`,
  })); // From 2023 to 1900

  // Check if all required fields are filled
  const isFormValid =
    selectedGender &&
    selectedStyle &&
    selectedDay &&
    selectedMonth &&
    selectedYear;
  
  
  const navigate = useNavigate();

  const submitBtn = () => {
    navigate("/");
  };


  return (
    <>
      {!showMoreInfo ? (
        <main className={style.signup}>
          {/* Left Section */}
          <AuthenticationBanner />

          {/* Right Section */}
          <section className={style.rightSection}>
            {/* Signup Form Section */}
            <form className={style.signupForm} onSubmit={handleSignupSubmit}>
              <h2 className={style.signupFormHeader}>Create Account</h2>
              <p className={style.signupFormDescription}>
                Enter your credentials to create your account.
              </p>

              <GoogleButton />

              <p className={style.separator}>
                <span>or</span>
              </p>

              <TextBox
                label="Your Name"
                inputType="name"
                inputPlaceholder="Please Enter Your Name"
              />
              <TextBox
                label="Email Address"
                inputType="email"
                inputPlaceholder="Email Address"
              />
              <TextBox
                label="Password"
                inputType="password"
                inputPlaceholder="Password"
                forgetPassword="no"
              />

              <div className={style.options}>
                <label>
                  <input type="checkbox" className={style.checkbox} />
                  <span> Keep me signed in</span>
                </label>
              </div>

              <BigButton buttonType="submit" buttonText="Signup" />
              <p className={style.createAccount}>
                Already a member? <a href="/login">Login</a>
              </p>
            </form>
          </section>
        </main>
      ) : (
        // More Information Section
        <div className={style.moreInfoSection}>
          <h2 className={style.moreInfoHeader}>More Information</h2>
          <p className={style.moreInfoDescription}>
            For a better experience, let us know more about you.
          </p>

          <InputSelect
            inputLabel="Your Gender"
            buttons={["Male", "Female"]}
            onChange={(selected) => handleSelectionChange(selected, "gender")}
          />

          <div className={style.inputGroup}>
            <label className={style.inputLabel}>Birthdate</label>
            <div className={style.birthdateOptions}>
              <DropdownInput
                inputLabel=""
                defaultOption="DD"
                options={days}
                onChange={(e) => setSelectedDay(e.target.value)}
              />
              <DropdownInput
                inputLabel=""
                defaultOption="MM"
                options={months}
                onChange={(e) => setSelectedMonth(e.target.value)}
              />
              <DropdownInput
                inputLabel=""
                defaultOption="YYYY"
                options={years}
                onChange={(e) => setSelectedYear(e.target.value)}
              />
            </div>
          </div>

          <InputSelect
            inputLabel="Your Favorite Style:"
            buttons={["Classic", "Casual", "Streetwear"]}
            onChange={(selected) => handleSelectionChange(selected, "style")}
          />

            <BigButton
              onClick={submitBtn}
              buttonType="submit"
              buttonText="Submit"
              disabled={!isFormValid} // Pass the disabled prop based on form validity
          />
        </div>
      )}
    </>
  );
};

export default Signup;
