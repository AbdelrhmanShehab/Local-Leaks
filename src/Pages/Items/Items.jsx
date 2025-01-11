import React, { useState } from "react";
import style from "./Items.module.css";
import Card from "../../Components/Card/Card";
import CheckBoxFilter from "../../Components/CheckBoxFilter/CheckBoxFilter";

const filterOptions = [
  {
    group: "Gender",
    options: [
      { value: "forWomen", label: "For Women" },
      { value: "forMen", label: "For Men" },
      { value: "forBoth", label: "For Both" },
    ],
  },
  {
    group: "Style",
    options: [
      { value: "casual", label: "Casual" },
      { value: "classic", label: "Classic" },
      { value: "streetwear", label: "Streetwear" },
    ],
  },
  {
    group: "Brand",
    options: [
      { value: "LC Wakiki", label: "LC Wakiki" },
      { value: "LC Wakiki", label: "LC Wakiki" },
      { value: "LC Wakiki", label: "LC Wakiki" },
      { value: "LC Wakiki", label: "LC Wakiki" },
      { value: "LC Wakiki", label: "LC Wakiki" },
      { value: "LC Wakiki", label: "LC Wakiki" },
    ],
  },
  {
    group: "Category",
    options: [
      { value: "t-shirt", label: "T-shirt" },
      { value: "jacket", label: "Jacket" },
      { value: "hoodie", label: "Hoodie" },
      { value: "trousers", label: "Trousers" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "jumpers", label: "Jumpers" },
    ],
  },
  {
    group: "Size",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xlarge", label: "XL" },
    ],
  },
  {
    group: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
      { value: "pink", label: "Pink" },
    ],
  },
];

const Items = () => {
  const sortOptions = [
    { id: "high-to-low", label: "Price from high to low" },
    { id: "low-to-high", label: "Price from low to high" },
    { id: "best-selling", label: "Best selling" },
    { id: "new-arrivals", label: "New arrivals" },
  ];

  // Array of card data
  const originalCardsData = [
    {
      id: "5001",
      imgSrc: require("../../Assets/CardImages/cardItem1.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 750",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
      gender: "forMen",
    },
    {
      id: "5002",
      imgSrc: require("../../Assets/CardImages/cardItem2.png"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 950",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "casual",
      Gender: "forMen",
    },
    {
      id: "5003",
      imgSrc: require("../../Assets/CardImages/cardItem3.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 850",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
      gender: "forWomen",
    },

    {
      id: "5009",
      imgSrc: require("../../Assets/CardImages/casual 1.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "classic",
      gender: "forWomen",
    },
    {
      id: "5010",
      imgSrc: require("../../Assets/CardImages/casual 2.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "classic",
      gender: "forMen",
    },
    {
      id: "5011",
      imgSrc: require("../../Assets/CardImages/casual 3.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "classic",
      gender: "forMen",
    },
    {
      id: "5012",
      imgSrc: require("../../Assets/CardImages/streetware 1.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "streetwear",
      gender: "forMen",
    },
    {
      id: "5014",
      imgSrc: require("../../Assets/CardImages/streetware 2.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "streetwear",
      gender: "forWomen",
    },
    {
      id: "5014",
      imgSrc: require("../../Assets/CardImages/streetware 3.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "streetwear",
      gender: "forWomen",
    },
    {
      id: "5014",
      imgSrc: require("../../Assets/CardImages/classic 4.1.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "classic",
      gender: "forMen",
    },
    {
      id: "5002",
      imgSrc: require("../../Assets/CardImages/cardItem2.png"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 950",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "casual",
      gender: "forMen",
    },
    {
      id: "5003",
      imgSrc: require("../../Assets/CardImages/cardItem3.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 850",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
      gender: "forWomen",
    },
    {
      id: "5004",
      imgSrc: require("../../Assets/CardImages/cardItem4.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "casual",
      gender: "forWomen",
    },
    {
      id: "5005",
      imgSrc: require("../../Assets/CardImages/cardItem1.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 750",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
      gender: "forMen",
    },
    {
      id: "5006",
      imgSrc: require("../../Assets/CardImages/cardItem2.png"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 950",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "casual",
      gender: "forMen",
    },
    {
      id: "5007",
      imgSrc: require("../../Assets/CardImages/cardItem3.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 850",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
      gender: "forWomen",
    },
    {
      id: "5004",
      imgSrc: require("../../Assets/CardImages/cardItem4.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "casual",
      gender: "forWomen",
    },
    {
      id: "5001",
      imgSrc: require("../../Assets/CardImages/cardItem1.jpg"),
      title: "Regular Fit Regular Hem Satin Trousers",
      price: "EGP 750",
      colors: ["#009688", "#000", "#3f51b5"],
      style: "casual",
      gender: "forMen",
    },
    {
      id: "5008",
      imgSrc: require("../../Assets/CardImages/cardItem4.jpg"),
      title: "Slim Fit Denim Jacket",
      price: "EGP 900",
      colors: ["#FF5733", "#C70039", "#900C3F"],
      style: "casual",
      gender: "forWomen",
    },
  ];

  const [selectedSort, setSelectedSort] = useState(""); // To track selected filter
  const [isListVisible, setIsListVisible] = useState(true); // To track visibility
  const [selectedStyles, setSelectedStyles] = useState([]); // Track selected styles
  const [selectedGenders, setSelectedGenders] = useState([]); // to track gendres
  const handleSortClick = (sortId) => {
    setSelectedSort((prevSelected) => (prevSelected === sortId ? "" : sortId)); // Unselect if already selected
  };

  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev); // Toggle visibility
  };

  // Handle option change (for multiple selected options)
  const handleFilterChange = (group, option) => {
    if (group === "Gender") {
      setSelectedGenders((prevSelectedGenders) => {
        if (prevSelectedGenders.includes(option)) {
          return prevSelectedGenders.filter((item) => item !== option); // Remove gender if already selected
        } else {
          return [...prevSelectedGenders, option]; // Add selected gender
        }
      });
    } else if (group === "Style") {
      setSelectedStyles((prevSelectedStyles) => {
        if (prevSelectedStyles.includes(option)) {
          return prevSelectedStyles.filter((item) => item !== option); // Remove style if already selected
        } else {
          return [...prevSelectedStyles, option]; // Add selected style
        }
      });
    }
  };

  // Function to handle both the style filter and price sort
  const filteredAndSortedCardsData = [...originalCardsData]
    .filter((card) => {
      // Check if the card's style matches any selected style
      const matchesStyle =
        selectedStyles.length === 0 || selectedStyles.includes(card.style);

      // Check if the card's gender matches any selected gender
      const matchesGender =
        selectedGenders.length === 0 || selectedGenders.includes(card.gender);

      return matchesStyle && matchesGender;
    })
    .sort((a, b) => {
      // Sort by price if the selected sort is set
      const priceA = parseInt(a.price.replace("EGP ", ""), 10);
      const priceB = parseInt(b.price.replace("EGP ", ""), 10);

      if (selectedSort === "high-to-low") {
        return priceB - priceA; // Sort descending
      }
      if (selectedSort === "low-to-high") {
        return priceA - priceB; // Sort ascending
      }
      return 0; // Keep the original order
    });

  return (
    <>
      <main className={style.items}>
        {/* aside sorting and filtering section */}
        <header>
          <h1 className={style.filterHeader}>New Leaks</h1>
        </header>
        <aside className={style.filterSide}>
          <section className={style.sortBySection}>
            {/* sort by section */}
            <header className={style.sortByHeader}>
              <h2>Sort By</h2>
              <button onClick={toggleListVisibility}>
                {isListVisible ? (
                  <svg
                    width="14"
                    height="4"
                    viewBox="0 0 20 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 0.75H1.25C0.918479 0.75 0.600537 0.881696 0.366117 1.11612C0.131696 1.35054 0 1.66848 0 2C0 2.33152 0.131696 2.64946 0.366117 2.88388C0.600537 3.1183 0.918479 3.25 1.25 3.25H18.75C19.0815 3.25 19.3995 3.1183 19.6339 2.88388C19.8683 2.64946 20 2.33152 20 2C20 1.66848 19.8683 1.35054 19.6339 1.11612C19.3995 0.881696 19.0815 0.75 18.75 0.75Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 8.75H11.25V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366117C10.6495 0.131696 10.3315 0 10 0C9.66848 0 9.35054 0.131696 9.11612 0.366117C8.8817 0.600537 8.75 0.918479 8.75 1.25V8.75H1.25C0.918479 8.75 0.600537 8.8817 0.366117 9.11612C0.131696 9.35054 0 9.66848 0 10C0 10.3315 0.131696 10.6495 0.366117 10.8839C0.600537 11.1183 0.918479 11.25 1.25 11.25H8.75V18.75C8.75 19.0815 8.8817 19.3995 9.11612 19.6339C9.35054 19.8683 9.66848 20 10 20C10.3315 20 10.6495 19.8683 10.8839 19.6339C11.1183 19.3995 11.25 19.0815 11.25 18.75V11.25H18.75C19.0815 11.25 19.3995 11.1183 19.6339 10.8839C19.8683 10.6495 20 10.3315 20 10C20 9.66848 19.8683 9.35054 19.6339 9.11612C19.3995 8.8817 19.0815 8.75 18.75 8.75Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            </header>
            {isListVisible && (
              <ul className={style.sortList}>
                {sortOptions.map((option) => (
                  <li
                    key={option.id}
                    className={`${style.sortOption} ${
                      selectedSort === option.id ? style.active : ""
                    }`}
                    onClick={() => handleSortClick(option.id)}
                  >
                    <span>{option.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* filter by section */}
          <section className={style.filterBySection}>
            <header className={style.filterByHeader}>
              <h2>Filter By:</h2>
            </header>
            {filterOptions.map(({ group, options }) => (
              <CheckBoxFilter
                key={group}
                group={group}
                options={options}
                selectedOptions={selectedStyles}
                onOptionChange={handleFilterChange}
              />
            ))}
            <div className={style.filterByButton}>
              <button className={style.applyFilterButton}>Apply filter</button>
              <button className={style.surpriseMeButton}>Surprise me</button>
            </div>
          </section>
        </aside>

        {/* displayed items */}
        <section className={style.cardItems}>
          {filteredAndSortedCardsData.map((card, index) => (
            <Card
              key={index}
              id={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              price={card.price}
              colors={card.colors}
              gender={card.gender}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Items;
