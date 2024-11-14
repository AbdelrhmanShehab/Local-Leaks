import React from 'react';
import { Link , useLocation } from "react-router-dom";
import style from './Header.module.css';

const Header = () => {

    const location = useLocation();
    

    return (
        <header className={style.header}>
            <div className={style.logo}>Logo</div>
            <div className={style.navtags}>
                <ul>
                    <li className={location.pathname === '/' ? style.navTagsSelected : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/deals' ? style.navTagsSelected : ''}>
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li className={location.pathname === '/categories' ? style.navTagsSelected : ''}>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li className={location.pathname === '/new-arrivals' ? style.navTagsSelected : ''}>
                        <Link to="/new-arrivals">New Arrivals</Link>
                    </li>
                </ul>
            </div>
            <div  className={style.navBtn}>
                <button>Join Us</button>
                <button>Shop Now</button>
            </div>
        </header>
    );
};

export default Header;