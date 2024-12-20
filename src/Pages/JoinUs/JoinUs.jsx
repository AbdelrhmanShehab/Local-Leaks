import React, { useState, useEffect } from 'react';
import style from './JoinUs.module.css';

import { TextBox, BigButton, DropdownInput } from '../../Components/ReusableComponents/ReusableComponents';

const JoinUs = () => {
    const [selectedTargetAudience, setSelectedTargetAudience] = useState("");
    const [selectedWebsite, setSelectedWebsite] = useState("");
    const [selectedIntake, setSelectedIntake] = useState("");
    const [brandName, setBrandName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [government, setGovernment] = useState("");

    // Check if all required fields are filled
    const isFormValid = 
        brandName &&
        email &&
        address &&
        city &&
        government &&
        selectedTargetAudience !== "none" &&
        selectedWebsite !== "none" &&
        selectedIntake !== "none";

    return (
        <>
            <main className={style.joinUs}>
                <h2 className={style.joinUsHeader}>Join as a brand</h2>
                <p className={style.joinUsDescription}>Let your brand shine where local meets trendy.</p>
                
                <TextBox
                    label="Brand Name"
                    inputType="name"
                    inputPlaceholder="Your brand name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                />
                
                <TextBox
                    label="Email Address"
                    inputType="email"
                    inputPlaceholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className={style.joinUsDropdpwn}>
                    <DropdownInput
                        inputLabel="Target Audience"
                        defaultOption="none"
                        options={[
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                        ]}
                        value={selectedTargetAudience}
                        onChange={(e) => setSelectedTargetAudience(e.target.value)}
                        width="110px"
                    />
                    <DropdownInput
                        inputLabel="Have a website?"
                        defaultOption="none"
                        options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                        ]}
                        value={selectedWebsite}
                        onChange={(e) => setSelectedWebsite(e.target.value)}
                        width="110px"
                    />
                </div>

                <TextBox
                    label="Address"
                    inputType="name"
                    inputPlaceholder="Where you want to receive your order"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <div className={style.joinUsTextbox}>
                    <TextBox
                        label="City"
                        inputType="name"
                        inputPlaceholder="Cairo"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextBox
                        label="Government"
                        inputType="name"
                        inputPlaceholder="Cairo"
                        value={government}
                        onChange={(e) => setGovernment(e.target.value)}
                    />
                </div>

                <DropdownInput
                    inputLabel="Intake to join"
                    defaultOption="none"
                    options={[
                        { value: "summer", label: "Summer" },
                        { value: "autumn", label: "Autumn" },
                        { value: "winter", label: "Winter" },
                        { value: "spring", label: "Spring" },
                    ]}
                    value={selectedIntake}
                    onChange={(e) => setSelectedIntake(e.target.value)}
                    width="110px"
                />

                <BigButton
                    buttonType="submit"
                    buttonText="Submit"
                    disabled={!isFormValid} // Disable the button if the form is invalid
                />
            </main>
        </>
    );
};

export default JoinUs;
