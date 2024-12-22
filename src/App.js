import { React, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import style from "./Assets/App.module.css";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
const Items = lazy(() => import("./Pages/Items/Items"));
const Item = lazy(() => import("./Pages/Item/Item"));
const Favorites = lazy(() => import("./Pages/Favorites/Favorites"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const JoinUs = lazy(() => import("./Pages/JoinUs/JoinUs"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"));
const SideBarNav = lazy(() => import("./Components/SideBar/SideBarNav.jsx"));
const Brands = lazy(() => import("./Pages/Brands/Brands.jsx"));
const AboutUs = lazy(() => import("./Pages/KnowUs-4pages/AboutUs/AboutUs.jsx"));
const FAQs = lazy(() => import("./Pages/KnowUs-4pages/FAQs/FAQs.jsx"));
const MyOrders = lazy(() => import("./Pages/AccountSettings/MyOrders/MyOrders.jsx"));
const MyProfile = lazy(() => import("./Pages/AccountSettings/MyProfile/MyProfile.jsx"));
const PaymentData = lazy(() => import("./Pages/AccountSettings/PaymentData/PaymentData.jsx"));
const ContactUs = lazy(() => import("./Pages/KnowUs-4pages/ContactUs/ContactUs.jsx"));
const ShippingReturns = lazy(() => import("./Pages/KnowUs-4pages/ShippingReturns/ShippingReturns.jsx"));


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={style.app}>

        <div className={style.container}>
          <SideBarNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        <main className={style.container}>
          <Header showSideBar={toggleSidebar} />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/items" element={<Items />} />
              <Route path="/item" element={<Item />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/joinUs" element={<JoinUs />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/shipping-and-returns" element={<ShippingReturns />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/payment-data" element={<PaymentData />} />
            </Routes>
          </Suspense>
          <Footer isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </main>

      </div>
    </Router>
  );
}

export default App;
