import React from "react";
import "./Item.module.css";
import style from "./Item.module.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ItemDetails from "./ItemDetails";
const Item = () => {
  return (
    <>
      <Header />
      <ItemDetails />
      <Footer />
    </>
  );
};

export default Item;
