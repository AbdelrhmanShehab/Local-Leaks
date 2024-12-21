import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./PaymentData.module.css";
import style from "./PaymentData.module.css";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
const PaymentData = () => {
  return (
    <>
      <SettingsSideBar />
    </>
  );
};
export default PaymentData;
