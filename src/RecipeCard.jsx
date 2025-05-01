import React from "react";
import './App.css'; // or wherever your CSS is

const RecipeCard = ({ meal }) => {
  return (
    <div className="recipe-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <a
        href={meal.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
        className="recipe-button"
      >
        Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
