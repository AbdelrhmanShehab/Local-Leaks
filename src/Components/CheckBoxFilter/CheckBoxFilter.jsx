import React, { useState } from 'react';
import style from './CheckBoxFilter.module.css';

import { Checkbox } from '../ReusableComponents/ReusableComponents';


const CheckBoxFilter = ({ group, options, selectedOptions, onOptionChange }) => {
    const [isListVisible, setIsListVisible] = useState(true); // Track visibility

    const toggleListVisibility = () => setIsListVisible(prev => !prev); // Toggle visibility

    // Handle checkbox change
    const handleCheckboxChange = (option) => {
        // Add or remove the option from selectedOptions
        onOptionChange(group, option);
    };

    return (
        <section className={style.checkBoxFilter}>
            <header className={style.checkBoxFilterHeader}>
                <h3>{group}</h3>
                <button
                    onClick={toggleListVisibility}
                    aria-expanded={isListVisible}
                    aria-label={`Toggle ${group} options`}
                >
                    {isListVisible ? (
                        <svg width="14" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.75 0.75H1.25C0.918479 0.75 0.600537 0.881696 0.366117 1.11612C0.131696 1.35054 0 1.66848 0 2C0 2.33152 0.131696 2.64946 0.366117 2.88388C0.600537 3.1183 0.918479 3.25 1.25 3.25H18.75C19.0815 3.25 19.3995 3.1183 19.6339 2.88388C19.8683 2.64946 20 2.33152 20 2C20 1.66848 19.8683 1.35054 19.6339 1.11612C19.3995 0.881696 19.0815 0.75 18.75 0.75Z" fill="white" />
                        </svg>
                    ) : (
                        <svg width="14" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.75 8.75H11.25V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366117C10.6495 0.131696 10.3315 0 10 0C9.66848 0 9.35054 0.131696 9.11612 0.366117C8.8817 0.600537 8.75 0.918479 8.75 1.25V8.75H1.25C0.918479 8.75 0.600537 8.8817 0.366117 9.11612C0.131696 9.35054 0 9.66848 0.366117 10.8839C0.600537 11.1183 0.918479 11.25 1.25 11.25H8.75V18.75C8.75 19.0815 8.8817 19.3995 9.11612 19.6339C9.35054 19.8683 9.66848 20 10 20C10.3315 20 10.6495 19.8683 10.8839 19.6339C11.1183 19.3995 11.25 19.0815 11.25 18.75V11.25H18.75C19.0815 11.25 19.3995 11.1183 19.6339 10.8839C19.8683 10.6495 20 10.3315 20 10C20 9.66848 19.8683 9.35054 19.6339 9.11612C19.3995 8.8817 19.0815 8.75 18.75 8.75Z" fill="white" />
                        </svg>
                    )}
                </button>
            </header>
            {isListVisible && (
                <ul className={style.checkBoxOptions}>
                    {options.map(({ value, label }) => (
                        <li key={value}>
                            <Checkbox
                                id={value}
                                label={label}
                                checked={selectedOptions.includes(value)} // Check if the option is selected
                                onChange={() => handleCheckboxChange(value)} // Toggle the checkbox
                            />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};


export default CheckBoxFilter;