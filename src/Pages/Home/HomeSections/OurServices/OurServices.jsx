import React from 'react';
import style from './OurServices.module.css';
import ourServicesImg from '../../../../Assets/HomeImages/OurServices.png'

const OurServices = () => {
    return (
        <div className={style.ourServices}>
            <div className={style.ourServicesContainer}>
                <div className={style.servicesDescription}>
                    <p>
                        <strong>Exclusive Local Collections; </strong>
                        Shop unique and exclusive fashion from the best local brands, all in one place.
                    </p>
                    <p>
                        <strong>Custom Modeling; </strong>
                        Choose a model that matches your body type to see how clothes fit before you buy.
                    </p>
                    <p>
                        <strong>Personalized Recommendations; </strong>
                        Get tailored style suggestions based on your preferences and trending local brands.
                    </p>
                </div>
                <div className={style.servicesImage}>
                    <h1>Our Services</h1>
                    <img src={ourServicesImg} alt="Our Services" />
                    <div className={style.imageCircle}></div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;