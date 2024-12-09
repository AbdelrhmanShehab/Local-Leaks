import React, { useEffect, useState } from 'react';
import style from "./Favorites.module.css"; 

import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Favourits = () => {
    
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        // Fetch favorite items from localStorage
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoriteItems(favorites);
    }, []);

    return (
        <>
            <Header />
            <main className={style.favoritesContainer}>
                <header className={style.favoritesHeader}>
                    <h1>Loved By you</h1>
                </header>
                <section className={style.cardItems}>
                    {favoriteItems.length > 0 ? (
                        favoriteItems.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                price={item.price}
                                colors={item.colors}
                            />
                        ))
                    ) : (
                        <p className={style.noItemsFound}>No favorite items found.</p>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Favourits;