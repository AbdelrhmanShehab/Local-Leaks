import React, { useState, useEffect } from "react";
import style from "./UserReviewCard.module.css";
import ratingStarColored from "../../Assets/item-images/ratingStarColored.svg";
import ratingStar from "../../Assets/item-images/ratingStar.svg";
import userEvent from "@testing-library/user-event";

const UserReviewCard = ({ nameReview, descReview }) => {
  return (
    <>
      <article className={style.userReviewCard}>
        <div className={style.userCardContainer}>
        <h2>{nameReview}</h2>
        <div className={style.productRatings}>
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStarColored} alt="rating" />
          <img src={ratingStar} alt="rating" />
        </div>
        <p>{descReview}</p>
        </div>
      </article>
    </>
  );
};
export default UserReviewCard;
