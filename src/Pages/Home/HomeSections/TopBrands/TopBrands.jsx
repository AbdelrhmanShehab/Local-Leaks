import React from 'react';
import style from './TopBrands.module.css';


const Brands = [ 
    {
        title: 'Mamzi',
        projectsNumber: '4100'
    },
    {
        title: 'Lotfy',
        projectsNumber: '3000'
    },
    {
        title: 'Saskia',
        projectsNumber: '1100'
    },
    {
        title: 'Meraki',
        projectsNumber: '2500'
    },
    {
        title: 'Up-fuse',
        projectsNumber: '2800'
    },
]

const TopBrands = () => {
    return (
        <section className={style.topBrands}>
            <header>
                <h1>Our Top Brands</h1>
            </header>
            <div className={style.brandsContainer}>
                {Brands.map((brand) => (
                    <article className={style.brands} key={brand.title}>
                        <div className={style.brand}>
                            <h2>{brand.title}</h2>
                            <p>{brand.projectsNumber} <br /> Products</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default TopBrands;