import React, { useState } from 'react';
import style from './Items.module.css';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';

const Items = () => {

    const [selectedFilter, setSelectedFilter] = useState(''); // To track selected filter
    const [isListVisible, setIsListVisible] = useState(true); // To track visibility


    const handleFilterClick = (filterId) => {
        setSelectedFilter((prevSelected) =>
            prevSelected === filterId ? "" : filterId
        ); // Unselect if already selected
    };

    const toggleListVisibility = () => {
        setIsListVisible((prev) => !prev); // Toggle visibility
    };

    const filterOptions = [
        { id: 'high-to-low', label: 'Price from high to low' },
        { id: 'low-to-high', label: 'Price from low to high' },
        { id: 'best-selling', label: 'Best selling' },
        { id: 'new-arrivals', label: 'New arrivals' },
    ];

    // Array of card data
    const originalCardsData = [
        {
            id: '5001',
            imgSrc: require('../../Assets/CardImages/cardItem1.jpg'),
            title: 'Regular Fit Regular Hem Satin Trousers',
            price: 'EGP 750',
            colors: ['#009688', '#000', '#3f51b5'],
        },
        {
            id: '5002',
            imgSrc: require('../../Assets/CardImages/cardItem2.png'),
            title: 'Slim Fit Denim Jacket',
            price: 'EGP 950',
            colors: ['#FF5733', '#C70039', '#900C3F'],
        },
        {
            id: '5003',
            imgSrc: require('../../Assets/CardImages/cardItem3.jpg'),
            title: 'Regular Fit Regular Hem Satin Trousers',
            price: 'EGP 850',
            colors: ['#009688', '#000', '#3f51b5'],
        },
        {
            id: '5004',
            imgSrc: require('../../Assets/CardImages/cardItem4.jpg'),
            title: 'Slim Fit Denim Jacket',
            price: 'EGP 900',
            colors: ['#FF5733', '#C70039', '#900C3F'],
        }, 
    ];

    // Sort cardsData based on selected filter
    const sortedCardsData = [...originalCardsData].sort((a, b) => {
    // [...originalCardsData] spreed operator => Shallow Copy
        const priceA = parseInt(a.price.replace("EGP ", ""), 10);
        // replace("EGP ", ""): Removes the "EGP " prefix from the string, leaving just the numeric portion (e.g., "750").
        const priceB = parseInt(b.price.replace("EGP ", ""), 10);
        // parseInt(..., 10): Converts the string into an integer. 
        // The second argument(10) ensures that the number is interpreted in base 10.

        if (selectedFilter === "high-to-low") {
            return priceB - priceA; // Sort descending
        }
        if (selectedFilter === "low-to-high") {
            return priceA - priceB; // Sort ascending
        }
        return 0; // Keep the original order
    });


    return (
        <>
            <Header />
            <main className={style.items}>
                <aside className={style.filterSide}>
                    <header>
                        <h1 className={style.filterHeader}>New Leaks</h1>
                    </header>
                    <section className={style.sortBySection}>
                        <header className={style.sortBy}>
                            <h2>Sort By</h2>
                            <button onClick={toggleListVisibility} >
                                {isListVisible ? (
                                    <svg width="14" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.75 0.75H1.25C0.918479 0.75 0.600537 0.881696 0.366117 1.11612C0.131696 1.35054 0 1.66848 0 2C0 2.33152 0.131696 2.64946 0.366117 2.88388C0.600537 3.1183 0.918479 3.25 1.25 3.25H18.75C19.0815 3.25 19.3995 3.1183 19.6339 2.88388C19.8683 2.64946 20 2.33152 20 2C20 1.66848 19.8683 1.35054 19.6339 1.11612C19.3995 0.881696 19.0815 0.75 18.75 0.75Z" fill="white"/>
                                    </svg>
                                ) : (
                                    <svg width="14" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.75 8.75H11.25V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366117C10.6495 0.131696 10.3315 0 10 0C9.66848 0 9.35054 0.131696 9.11612 0.366117C8.8817 0.600537 8.75 0.918479 8.75 1.25V8.75H1.25C0.918479 8.75 0.600537 8.8817 0.366117 9.11612C0.131696 9.35054 0 9.66848 0 10C0 10.3315 0.131696 10.6495 0.366117 10.8839C0.600537 11.1183 0.918479 11.25 1.25 11.25H8.75V18.75C8.75 19.0815 8.8817 19.3995 9.11612 19.6339C9.35054 19.8683 9.66848 20 10 20C10.3315 20 10.6495 19.8683 10.8839 19.6339C11.1183 19.3995 11.25 19.0815 11.25 18.75V11.25H18.75C19.0815 11.25 19.3995 11.1183 19.6339 10.8839C19.8683 10.6495 20 10.3315 20 10C20 9.66848 19.8683 9.35054 19.6339 9.11612C19.3995 8.8817 19.0815 8.75 18.75 8.75Z" fill="white"/>
                                    </svg>
                                ) }
                            </button>
                        </header>
                        {isListVisible && (
                            <ul className={style.filterList}>
                                {filterOptions.map((option) => (
                                    <li
                                        key={option.id}
                                        className={`${style.filterOption} ${
                                            selectedFilter === option.id ? style.active : ""
                                        }`}
                                        onClick={() => handleFilterClick(option.id)}
                                    >
                                        <span>{option.label}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </aside>

                <section className={style.cardItems}>
                    {sortedCardsData.map((card, index) => (
                        <Card
                            key={index}
                            id={card.id}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            price={card.price}
                            colors={card.colors}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Items;