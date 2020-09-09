import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
import mainImage from "../src/images/mainImage2.jpg";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import Header from "./components/Header";

const App = () => {
  //authentications
  const APP_ID = "27471244";
  const APP_KEY = "6e7c2322a2951cad701ea97ab8c9acf1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  // const [countTo] = useState(100);
  // const [countFrom] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getRecipes();
  }, [query]); //[]: run ONLY when you submit the button
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    //once 'request' comes back,
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const sections = [
    { title: "APPETIZERS", url: "#" },
    { title: "CHICKEN RECIPES", url: "#" },
    { title: "BEEF RECIPES", url: "#" },
    { title: "PORK RECIPES", url: "#" },
    { title: "SHRIMP RECIPES", url: "#" },
    { title: "BBQ&GRILLING", url: "#" },
    { title: "COCKTAILS", url: "#" },
    { title: "AIR FRYER RECIPES", url: "#" },
    { title: "DESSERT RECIPTES", url: "#" },
    { title: "COOKIES RECIPES", url: "#" },
    { title: "CAKE RECIPES", url: "#" },
  ];

  return (
    <div className="App">
      {/* navbar */}
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Yummyrecipes
        </a>
        <form onSubmit={getSearch} className="search-form">
          <Icon color="pink" name="search" size="large" />
          <input
            className="active-pink-3 active-pink-4"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Find a recipe"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <img src={mainImage} className="main-image" alt="mainImage" />
      </nav>

      {/* sections */}
      <Header title="blog" sections={sections} />

      {/* Recipes */}
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            // calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            instructions={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
