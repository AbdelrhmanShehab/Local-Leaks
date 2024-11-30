import React from "react";
import { useState } from "react";
import "./Item.module.css";
import style from "./Item.module.css";
import image1 from "../../Assets/item-images/navyBlueOne.png";
import image2 from "../../Assets/item-images/navyBlueTwo.png";
import image3 from "../../Assets/item-images/navyBlueThree.png";
import image4 from "../../Assets/item-images/navyBlueFour.png";
import ratingStarColored from "../../Assets/item-images/ratingStarColored.svg";
import ratingStar from "../../Assets/item-images/ratingStar.svg";
import selectedShield from "../../Assets/item-images/selectedShiled.svg";
import { SmallButton } from "../../Components/ReusableComponents/ReusableComponents";
function ItemDetails() {
  // mapping for colors in product
  const [selectedColor, setSelectedColor] = useState(null);
  const itemColors = [
    { color: "blue", label: "Blue Navy" },
    { color: "white", label: "White" },
    { color: "black", label: "Black" },
    { color: "brown", label: "Brown" },
  ];
  // mapping for sizes in product
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div style={{ display: "flex" }}>
      {/* display all non selected images for the item */}
      <div className={style.mainSideImage}>
        <aside>
          <ul className={style.imageGallery}>
            <li>
              <img
                src={image3}
                alt="Product view 1"
                className={style.imageSide}
              />
            </li>
            <li>
              <img
                src={image2}
                alt="Product view 2"
                className={style.imageSide}
              />
            </li>
            <li>
              <img
                src={image3}
                alt="Product view 3"
                className={style.imageSide}
              />
            </li>
            <li>
              <img
                src={image4}
                alt="Product view 4"
                className={style.imageSide}
              />
            </li>
          </ul>
        </aside>
        {/* display selected image for the item */}
        <main>
          <img
            className={style.productDisplay}
            src={image1}
            alt="Selected product view"
          />
        </main>
      </div>
      {/* Product Details */}
      <section className={style.productDetails}>
        {/* Title and Brand */}
        <header className={style.productHeader}>
          <h1 className={style.productDetails}>
            Nike Special Kit Hoodie LoremoREMIII
          </h1>
          <div className={style.brandModelText}>
            <p className={style.productBrand}>
              Brand Page: <a href="#brand-link">Adidas</a>
            </p>
            <p>|</p>
            <p className={style.productModel}>
              Model Page: <a href="#model-link">Abdelrhman</a>
            </p>
          </div>
        </header>

        {/* Ratings */}
        <div className={style.productRatings}>
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStar} alt="rating" />
        </div>

        {/* Color Options section*/}
        <div className={style.productColors}>
          <p>
            Color: <span>Blue Navy</span>
          </p>
          {/* mapping array of available colors */}
          <div className={style.itemColorsPallete}>
            {itemColors.map((item, index) => (
              <button
                key={index}
                style={{
                  border: item.color === "black" ? "0.2px solid white" : "",
                  backgroundColor: item.color,
                  position: "relative",
                  cursor: "pointer",
                }}
                aria-label={item.label}
                className={style.colorItem}
                onClick={() => setSelectedColor(item.color)}
              >
                {/* Display SVG or icon for selected color */}
                {selectedColor === item.color && (
                  <img
                    src={selectedShield}
                    alt="Selected"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="product-sizes">
          <div
            style={{
              color: "white",
              display: "flex",
              width: "53%",
              justifyContent: "space-between",
            }}
          >
            <p>Size:</p>
            <p
              style={{
                color: "#00ff2a",
                textDecoration: "underline",
                curser: "pointer",
              }}
            >
              size guide
            </p>
          </div>
          <div className={style.sizeOptions}>
            {sizes.map((sizeLabel, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: selectedSize === sizeLabel ? "#00ff2a" : "",
                  color: selectedSize === sizeLabel ? "white" : "",
                }}
                className={style.sizebutton}
                onClick={() => setSelectedSize(sizeLabel)}
              >
                {sizeLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Price */}
        <div className="product-purchase">
          <div className={style.qtySelector}>
            <button className={style.sizebutton}>-</button>
            <span>1</span>
            <button className={style.sizebutton}>+</button>
          </div>
        </div>

        {/* Add to Basket */}
        <div className={style.priceAndBasketContainer}>
          <p className="product-price">EGP 750</p>
          <SmallButton smallButtonLabel={"Add To Basket"} />
        </div>
      </section>
    </div>
  );
}
export default ItemDetails;
