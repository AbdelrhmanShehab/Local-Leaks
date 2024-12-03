import React from "react";
import "./Item.module.css";
import style from "./Item.module.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ItemDetails from "./ItemDetails";
import UserReviewCard from "../../Components/UserReviewCard/UserReviewCard";
import Card from "../../Components/Card/Card";
import FAQs from "../../Components/FQAs/FQAs";
import { SmallButton } from "../../Components/ReusableComponents/ReusableComponents";
import minusIcon from "../../Assets/minus-icon.svg";
const Item = () => {
  const FQAsData = [
    {
      questionNum: "01",
      questionContent: "What is StreamVibe?",
      questionAnswer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
      miniMax: minusIcon,
    },
    {
      questionNum: "02",
      questionContent: "What devices can I use to watch StreamVibe?",
      questionAnswer:
        "You can watch StreamVibe on various devices, including smartphones, tablets, smart TVs, and computers. StreamVibe is compatible with most popular web browsers and operating systems.",
      miniMax: minusIcon,
    },
    {
      questionNum: "03",
      questionContent: "How do I search for movies and shows on StreamVibe?",
      questionAnswer:
        "Use the search bar located at the top of the homepage. Simply type in the title or keyword related to the movie or show you’re looking for, and press the search button to see the results.",
      miniMax: minusIcon,
    },
    {
      questionNum: "04",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
  ];
  const mayLikeCardsData = [
    {
      id: "5001",
      imgSrc: require("../../Assets/CardImages/cardItem1.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 750",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
    },
    {
      id: "5002",
      imgSrc: require("../../Assets/CardImages/cardItem2.png"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 950",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "classic",
    },
    {
      id: "5003",
      imgSrc: require("../../Assets/CardImages/cardItem3.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 850",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "streetwear",
    },
    {
      id: "5004",
      imgSrc: require("../../Assets/CardImages/cardItem4.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "classic",
    },
  ];

  const userReviewsData = [
    {
      nameReview: "Abdelrhman Hossam",
      descReview:
        "This is a fake dataset for this king of situations you need to fill any dummy data make sure to ",
    },
    {
      nameReview: "Abdelrhman Hossam",
      descReview:
        "This is a fake dataset for this king of situations you need to fill any dummy data make sure to ",
    },
    {
      nameReview: "Abdelrhman Hossam",
      descReview:
        "This is a fake dataset for this king of situations you need to fill any dummy data make sure to ",
    },
  ];
  return (
    <>
      <Header />
      <ItemDetails />
      <div className={style.buyThisAndFQAs}>
        <section className={style.suggestOutfit}>
          <h2>For the perfect outfit you should buy this:</h2>
          <div className={style.cardContainer}>
            <Card
              id="5001"
              imgSrc={require("../../Assets/CardImages/cardItem1.jpg")}
              title="Regular Fit Regular Hem Satin Trousers"
              price="EGP 750"
              colors={["#009688", "#000", "#3f51b5"]}
            />
            <SmallButton smallButtonLabel={"Add to cart"} />
          </div>
        </section>
        <section className={style.FQAsContainer}>
          <div className={style.flexQuestions}>
            {/* Mapping the Questions */}
            {FQAsData.map((data, index) => (
              <FAQs
                key={index}
                questionNum={data.questionNum}
                questionContent={data.questionContent}
                questionAnswer={data.questionAnswer}
                miniMax={data.miniMax}
              />
            ))}
          </div>
        </section>
      </div>
      <section className={style.mayLikeSection}>
        <h2>You may also like:</h2>
        <div className={style.mayLikeCards}>
          {mayLikeCardsData.map((card, index) => (
            <Card
              key={index}
              id={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              price={card.price}
              colors={card.colors}
            />
          ))}
        </div>
      </section>
      <section className={style.productInsights}>
        <div className={style.insightGroup}>
          <h2>Item Reviews</h2>
          <p>Total Reviews:</p>
          <h2>10.0k</h2>
        </div>
        <div className={style.insightGroupMiddle}>
          <h2>Item Sales</h2>
          <p>Total Purchases:</p>
          <h2>210</h2>
        </div>
        <div className={style.insightGroup}>
          <h2>Item Ratings</h2>
          <p>Average Rating:</p>
          <h2>4.1 / 5</h2>
        </div>
      </section>
      <section className={style.userReviewsSection}>
        <div className={style.reviewHeadingDesc}>
          <h1>User Reviews</h1>
          <p>There's no faliure. only feedback</p>
        </div>
        <div className={style.cardsReview}>
          {userReviewsData.map((data, index) => (
            <UserReviewCard
              key={index}
              nameReview={data.nameReview}
              descReview={data.descReview}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Item;
