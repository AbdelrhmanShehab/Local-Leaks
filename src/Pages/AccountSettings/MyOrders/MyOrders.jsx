import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./MyOrders.module.css";
import style from "./MyOrders.module.css";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
const MyOrders = () => {
  return (
    <>
      <SettingsSideBar />
    </>
  );
};
export default MyOrders;
