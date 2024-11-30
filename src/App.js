import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from './Assets/App.module.css';

const Home = lazy(() => import('./Pages/Home/Home')); 
const Login = lazy(() => import('./Pages/Login/Login')); 
const Signup = lazy(() => import('./Pages/Signup/Signup')); 
const Items = lazy(() => import('./Pages/Items/Items')); 
const Item = lazy(() => import('./Pages/Item/Item')); 
const Favorites = lazy(() => import('./Pages/Favorites/Favorites')); 
const Cart = lazy(() => import('./Pages/Cart/Cart')); 

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Router>
          <Suspense fallback={<h1>Loading...</h1>} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/items" element={<Items />} />
              <Route path="/item" element={<Item />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
