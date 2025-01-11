import React from "react";
import style from "./Footer.module.css";
import typoLogo from "../../Assets/typoLogo.svg";
import { SmallButton } from "../ReusableComponents/ReusableComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    const homePageBtn = () => {
        window.scrollTo(0, 0);
    };

    const joinUsBtn = () => {
        navigate("/joinUs");
    };

    const itemsPageBtn = () => {
        navigate("/items");
    };

    const aboutUsBtn = () => {
        navigate("/about-us");
    };

    const contactUsBtn = () => {
        navigate("/contact-us");
    };

    const ordersBtn = () => {
        navigate("/my-orders");
    };


    const faqsBtn = () => {
        navigate("/faqs");
    };

    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerLogo}>
                    <img src={typoLogo} alt="Local Leaks Logo" className={style.logo} onClick={homePageBtn}/>
                    <p>Where Local Brands Meet Cyber Style</p>
                </div>
                <div className={style.footerLinks}>
                    <div className={style.footerColumn}>
                        <h4>Join as a brand</h4>
                        <SmallButton smallButtonLabel="Join now" onClick={joinUsBtn}/>
                    </div>
                    <div className={style.footerColumn}>
                        <h4>Shop Now</h4>
                        <ul>
                            <li onClick={itemsPageBtn}>New Arrivals</li>
                            <li onClick={itemsPageBtn}>Men</li>
                            <li onClick={itemsPageBtn}>Women</li>
                            <li onClick={itemsPageBtn}>Winter Collection</li>
                        </ul>
                    </div>
                    <div className={style.footerColumn}>
                        <h4>Know us</h4>
                        <ul>
                            <li  onClick={aboutUsBtn}>About Us</li>
                            <li  onClick={contactUsBtn}>Contact Us</li>
                            <li  onClick={joinUsBtn}>Join as a brand</li>
                        </ul>
                    </div>
                    <div className={style.footerColumn}>
                        <h4>Help</h4>
                        <ul>
                            <li >Local Leaks policy</li>
                            <li onClick={ordersBtn}>Track your order</li>
                            <li onClick={faqsBtn}>FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footerLine}> </div>
            <div className={style.footerBottom}>
                <p>Local Leaks {new Date().getFullYear()}</p>
                <div className={style.socialIcons}>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.tiktok.com/"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
