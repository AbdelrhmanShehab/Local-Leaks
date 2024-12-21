import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./AboutUs.module.css";
import style from "./AboutUs.module.css";
import KnowUsHeader from "../KnowUsHeader/KnowUsHeader";
const AboutUs = () => {
  return (
    <>
      <KnowUsHeader />
    </>
  );
};
export default AboutUs;
