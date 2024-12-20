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
            </Routes>
          </Suspense>
          <Footer isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </main>
      </div>
    </Router>
  );
}

export default App;
