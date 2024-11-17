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
        <div className={style.topBrands}>
            <h1>Our Top Brands</h1>
            <div className={style.brandsContainer}>
                {Brands.map((brand) => (
                    <div className={style.brands} key={brand.title}>
                        <div className={style.brand}>
                            <h2>{brand.title}</h2>
                            <p>{brand.projectsNumber} Products</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBrands;