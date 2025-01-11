import { React, lazy, Suspense, useState } from "react";
import "./ContactUs.module.css";
import style from "./ContactUs.module.css";
import KnowUsHeader from "../KnowUsHeader/KnowUsHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NewSletter from "../../Home/HomeSections/NewSletter/NewSletter";
import { SmallButton } from "../../../Components/ReusableComponents/ReusableComponents";

import { useNavigate } from "react-router-dom";


const ContactUs = () => {

  const navigate = useNavigate();

  const joinAsBrandBtn = () => {
      navigate("/joinUs");
  };



  return (
    <>
      <KnowUsHeader />
      <main className={style.contactUsSection}>
        <div className={style.contactInfo}>
          <div className={style.contactInfoSection}>
            <h3>For Customers :</h3>
            <p>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#00ff00" }} />{" "}
                01287419214
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#00ff00" }}
                />{" "}
                demo@gmail.com
              </a>
            </p>
          </div>
          <div className={style.contactInfoSection}>
            <h3>For Brands :</h3>
            <p>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#00ff00" }} />
                01062422322
              </a>{" "}
            </p>
            <p>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#00ff00" }}
                />
                demo@gmail.com
              </a>{" "}
            </p>
          </div>
          <div className={style.contactInfoSection}>
            <h3>Social Media :</h3>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#00ff00" }}
              />
              LocalLeaks
            </a>{" "}
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#00ff00" }}
              />{" "}
              LocalLeaks
            </a>
            <a href="https://www.tiktok.com/">
              <FontAwesomeIcon icon={faTiktok} style={{ color: "#00ff00" }} />
              LocalLeaks
            </a>
          </div>
        </div>
        <div className={style.sletterJoin}>
        <NewSletter />
        <div className={style.joinContactUs}>
          <h3>Join as a brand</h3>
            <SmallButton smallButtonLabel="Join Now" onClick={joinAsBrandBtn} />
        </div>
        </div>
      </main>
    </>
  );
};
export default ContactUs;
