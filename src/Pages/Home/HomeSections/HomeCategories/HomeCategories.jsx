import React from "react";
import style from "./HomeCategories.module.css";

import { useNavigate } from "react-router-dom";

import EncryptedStyle from "../../../../Assets/HomeImages/HomeCategories/EncryptedStyle.jpg";
import MostPopular from "../../../../Assets/HomeImages/HomeCategories/MostPopular.jpg";
import MenCollections from "../../../../Assets/HomeImages/HomeCategories/MenCollections.jpg";
import WomanCollections from "../../../../Assets/HomeImages/HomeCategories/WomanCollections.jpg";
import WinterLeaks from "../../../../Assets/HomeImages/HomeCategories/WinterLeaks.jpg";

const HomeCategories = () => {
  const navigate = useNavigate();

  const categoriesBtn = () => {
    navigate("/items");
  };

  return (
    <>
      {/*  */}
      {/* the following design is the main design */}
      {/*  */}
      <div className={style.container}>
        <div className={style.leftContainer}>
          <button onClick={categoriesBtn}>
            <img src={MostPopular} alt="MostPopular" />
            <div className={style.overlay}></div>
            <h2>Most Popular</h2>
          </button>
          <button onClick={categoriesBtn}>
            <img src={WinterLeaks} alt="WinterLeaks" />
            <div className={style.overlay}></div>
            <h2 className="white-title">Winter Leaks</h2>
          </button>
        </div>
        <div className={style.midContainer}>
          <div className={style.encryptedStyle}>
            <img
              className={style.hackerMask}
              src={EncryptedStyle}
              alt="EncryptedStyle"
            />
            <h1>Encrypted Style Decrypted for You</h1>
          </div>
          <button
            onClick={categoriesBtn}
            className={style.menCollectionsContainer}
          >
            <img
              className={style.menCollections}
              src={MenCollections}
              alt="MenCollections"
            />
            <div className={style.overlay}></div>
            <h2>Men Collection</h2>
          </button>
        </div>
        <div className={style.rightContainer}>
          <button onClick={categoriesBtn}>
            <img src={WomanCollections} alt="WomanCollections" />
            <div className={style.overlay}></div>
            <h2>Women Collection</h2>
          </button>
        </div>
      </div>
      {/*  */}
      {/* the following design is for mobile view */}
      {/*  */}
      <div className={style.containerMobile}>
        <div className={style.mobileLeftContainer}>
          <div>
            <button
              onClick={categoriesBtn}
              className={style.menCollectionsMobileContainer}
            >
              <img
                className={style.menCollectionsMobile}
                src={MenCollections}
                alt="MenCollections"
              />
              <div className={style.overlay}></div>
              <h2>Men Collection</h2>
            </button>
          </div>
          <div className={style.twoCardsLeftContainerMobile}>
            <button onClick={categoriesBtn} className={style.mostPopularButton}>
              <img src={MostPopular} alt="MostPopular" />
              <div className={style.overlay}></div>
              <h2>Most Popular</h2>
            </button>
            <button onClick={categoriesBtn}>
              <img src={WinterLeaks} alt="WinterLeaks" />
              <div className={style.overlay}></div>
              <h2 className="white-title">Winter Leaks</h2>
            </button>
          </div>
        </div>
        <div className={style.mobileRightContainer}>
          <button onClick={categoriesBtn}>
            <img src={WomanCollections} alt="WomanCollections" />
            <div className={style.overlay}></div>
            <h2>Women Collection</h2>
          </button>
        </div>
      </div>
      <div className={style.encryptedStyle}>
        <img
          className={style.hackerMask}
          src={EncryptedStyle}
          alt="EncryptedStyle"
        />
        <h1>Encrypted Style Decrypted for You</h1>
      </div>
    </>
  );
};

export default HomeCategories;
