import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

export default function FoodApp() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); 

  useEffect(() => {
    if (search.trim() !== "") {
      fetchMeals();
    } else {
      setMeals([]);
    }
  }, [search]);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMeals([]);
    }
  };

  const handleSearchClick = () => {
    setHasSearched(true);
  };

  return (
    <div>
      <h1>FOOD RECIPE APP</h1>

      <div>
        <input
          type="text"
          placeholder="Search Meals"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      {!hasSearched && <h2>Search and Get Recipes</h2>}


      <div className="recipe-container">
        {meals.length > 0 ? (
          meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
        ) : hasSearched ? (
          search.trim() === "" ? (
            <p>Please enter something
            </p>
            
          ) : (
            <p>Sorry, data not found </p>
          )
        ) : null}
      </div>
    </div>
  );
}
