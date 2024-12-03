import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import QuickAddCard from "./QuickAddCard/QuickAddCard";

const Card = ({ id, imgSrc, title, price, colors }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null); // State to track selected color
  const [quickAddButtonClicked, setQuickAddButtonClicked] = useState(false);

  useEffect(() => {
    // Retrieve favorites from localStorage when component mounts
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavoriteExists = favorites.some((item) => item.id === id);
    setIsFavorite(isFavoriteExists);
  }, [id]); // Re-run when id changes

  const handleFavoriteClick = () => {
    const newFavorite = { id, imgSrc, title, price, colors };

    // Retrieve existing favorites or initialize an empty array
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check if the item already exists in the favorites
    const isFavoriteExists = favorites.some((item) => item.id === id);

    if (!isFavoriteExists) {
      // Add new favorite
      const updatedFavorites = [...favorites, newFavorite];

      // Save updated favorites to localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      setIsFavorite(true);

      // Log the updated favorites table
      console.log("Updated Favorites:", updatedFavorites);
    } else {
      const updatedFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      // Update the state to reflect the item is no longer a favorite
      setIsFavorite(false);
      console.log(`Item with ID: ${id} is removed from favorites`);
      console.log(updatedFavorites);
    }
  };

  // Handle click on color dot with toggle functionality
  const handleColorClick = (color) => {
    setSelectedColor((prevColor) => (prevColor === color ? null : color)); // Toggle color selection
  };

  const quickAddButtonHandler = () => {
    setQuickAddButtonClicked(true);
  };
  const handleCloseQuickAdd = () => {
    setQuickAddButtonClicked(false);
  };

  return (
    <div className={style.card}>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img src={imgSrc} alt={title} />
          <button
            className={style.favoriteButton}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? (
              // Display the filled heart SVG when item is a favorite
              <svg
                width="18"
                height="32"
                viewBox="0 0 29 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5458 0C19.1936 0 17.9013 0.306387 16.7048 0.91071C15.8903 1.322 15.1421 1.86847 14.5 2.51682C13.8579 1.86847 13.1097 1.322 12.2952 0.91071C11.0986 0.306387 9.8063 0 8.45413 0C3.79254 0 0 3.74869 0 8.35644C0 11.62 1.74377 15.0862 5.18281 18.6588C8.05423 21.6418 11.5697 24.1283 14.0132 25.6891L14.5 26L14.9868 25.6891C17.4303 24.1284 20.9458 21.6418 23.8172 18.6588C27.2562 15.0862 29 11.62 29 8.35644C29 3.74869 25.2075 0 20.5458 0Z"
                  fill="#00FF2A"
                />
              </svg>
            ) : (
              // Display the empty heart SVG when item is not a favorite
              <svg
                width="18"
                height="32"
                viewBox="0 0 29 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 26C14.0876 26.0002 13.6891 25.8493 13.3789 25.5755C12.2074 24.5431 11.0779 23.573 10.0814 22.7173L10.0763 22.7129C7.15462 20.2039 4.63167 18.0371 2.87627 15.9027C0.914009 13.5167 0 11.2542 0 8.78267C0 6.38139 0.817098 4.16602 2.30057 2.54443C3.80178 0.903661 5.86162 0 8.10137 0C9.77538 0 11.3084 0.533338 12.6579 1.58506C13.3389 2.11589 13.9561 2.76561 14.5 3.52343C15.044 2.76561 15.6611 2.11589 16.3424 1.58506C17.6918 0.533338 19.2248 0 20.8989 0C23.1384 0 25.1985 0.903661 26.6997 2.54443C28.1831 4.16602 29 6.38139 29 8.78267C29 11.2542 28.0862 13.5166 26.124 15.9025C24.3685 18.0371 21.8458 20.2037 18.9246 22.7124C17.9263 23.5695 16.7951 24.5411 15.6209 25.5759C15.3105 25.8494 14.9123 26.0001 14.5 26ZM8.10137 1.71189C6.34177 1.71189 4.7253 2.4196 3.54933 3.70471C2.35591 5.00929 1.69854 6.81262 1.69854 8.78267C1.69854 10.8613 2.46517 12.7204 4.1841 14.8105C5.84548 16.8307 8.31666 18.9528 11.1779 21.4101L11.1832 21.4146C12.1835 22.2736 13.3174 23.2475 14.4976 24.2874C15.6848 23.2455 16.8205 22.2701 17.8228 21.4097C20.6838 18.9524 23.1547 16.8307 24.8161 14.8105C26.5348 12.7204 27.3015 10.8613 27.3015 8.78267C27.3015 6.81256 26.6441 5.00923 25.4507 3.70471C24.2749 2.4196 22.6583 1.71189 20.8989 1.71189C19.6098 1.71189 18.4263 2.12485 17.3814 2.93907C16.4501 3.66504 15.8014 4.58275 15.421 5.22487C15.2255 5.55507 14.8812 5.75216 14.5 5.75216C14.1188 5.75216 13.7745 5.55507 13.5789 5.22487C13.1989 4.58275 12.5501 3.66504 11.6186 2.93907C10.5737 2.12485 9.39017 1.71189 8.10137 1.71189Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
          <button
            className={style.quickAddButton}
            onClick={quickAddButtonHandler}
          >
            Quick Add
          </button>
        </div>
        <div className={style.productDetails}>
          <p className={style.productTitle}>{title}</p>
          <strong className={style.productPrice}>{price}</strong>
          <div className={style.colorOptions}>
            {colors.map((color, index) => (
              <span
                key={index}
                className={`${style.colorDot} ${
                  selectedColor === color ? style.colorDotSelected : ""
                }`} // Add the selected class if color matches
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      {quickAddButtonClicked && (
        <div className={style.quickAddOverlay} onClick={handleCloseQuickAdd}>
          <QuickAddCard onClose={handleCloseQuickAdd} />
        </div>
      )}
    </div>
  );
};

export default Card;
