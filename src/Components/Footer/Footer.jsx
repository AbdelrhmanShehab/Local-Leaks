import React from "react";
import style from "./Footer.module.css";
import typoLogo from "../../Assets/typoLogo.svg";
import { SmallButton } from "../ReusableComponents/ReusableComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerLogo}>
                    <img src={typoLogo} alt="Local Leaks Logo" className={style.logo} />
                    <p>Where Local Brands Meet Cyber Style</p>
                </div>
                <div className={style.footerLinks}>
                    <div className={style.footerColumn}>
                        <h4>Join as a brand</h4>
                        <SmallButton smallButtonLabel="Join now" />
                    </div>
                    <div className={style.footerColumn}>
                        <h4>Shop Now</h4>
                        <ul>
                        <li>New Arrivals</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Winter Collection</li>
                        </ul>
                    </div>
                    <div className={style.footerColumn}>
                        <h4>Know us</h4>
                        <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Join as a brand</li>
                        </ul>
                    </div>
                    <div className={style.footerColumn}>
                        <h4>Help</h4>
                        <ul>
                        <li>Local Leaks policy</li>
                        <li>Track your order</li>
                        <li>FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footerLine}> </div>
            <div className={style.footerBottom}>
                <p>Local Leaks {new Date().getFullYear()}</p>
                <div className={style.socialIcons}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
