import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Brands.module.css";
import style from "./Brands.module.css";
import brandOne from "../../Assets/Brands/brand1.svg";
import brandTwo from "../../Assets/Brands/brand2.svg";
import brandThree from "../../Assets/Brands/brand3.svg";
import brandFour from "../../Assets/Brands/brand4.svg";
import brandFive from "../../Assets/Brands/brand5.svg";
import brandSix from "../../Assets/Brands/brand6.svg";
import brandSeven from "../../Assets/Brands/brand7.svg";
const Brands = () => {
  const brandsLogosRowOne = [
    { id: 1, src: brandOne, alt: "Brand One" },
    { id: 2, src: brandTwo, alt: "Brand Two" },
    { id: 3, src: brandThree, alt: "Brand Three" },
  ];
  const brandsLogos = [
    { id: 4, src: brandFour, alt: "Brand Four" },
    { id: 5, src: brandFive, alt: "Brand Five" },
    { id: 6, src: brandSix, alt: "Brand Six" },
    { id: 7, src: brandSeven, alt: "Brand Seven" },
    { id: 8, src: brandTwo, alt: "Brand Two Duplicate" },
    { id: 9, src: brandSix, alt: "Brand Six Duplicate" },
    { id: 10, src: brandFive, alt: "Brand Five Duplicate" },
    { id: 11, src: brandFour, alt: "Brand Four Duplicate" },
  ];
  return (
    <main className={style.brandsMain}>
      <div className={style.flexSloganAndEgyptBrands}>
        <div className={style.smallerContainer}>
          <h1>
            <span>------</span>AT LOCAL LEAKS, <br />
            OUR BRANDS ARE MORE THAN <br />
            PARTENRS
          </h1>
        </div>
        <p className={style.egyptProudTxt}>
          PROUDLY
          <br /> MADE
          <br /> IN
          <br /> EGYPT{" "}
        </p>
      </div>
      <p className={style.shopByTxt}>
        SHOP
        <br /> BY
        <br /> BRAND{" "}
      </p>
      <div className={style.smallerContainer}>
        <div className={style.brandsThreeCards}>
          {brandsLogosRowOne.map((brand) => (
            <article key={brand.id} className={style.brandCard}>
              <img
                src={brand.src}
                alt={brand.alt}
                className={style.brandImage}
              />
            </article>
          ))}
        </div>
        <div className={style.brandsAllCards}>
          {brandsLogos.map((brand) => (
            <article key={brand.id} className={style.brandCard}>
              <img
                src={brand.src}
                alt={brand.alt}
                className={style.brandImage}
              />
              <p className={style.productsNumBrand}>1300 Products</p>
            </article>
          ))}
        </div>
      </div>
      <p className={style.brandNum}>
        <span>37</span> BRANDS AND MORE FOR YOU
      </p>
    </main>
  );
};
export default Brands;
