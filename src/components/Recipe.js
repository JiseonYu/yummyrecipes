import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./recipe.css";

const Recipe = ({ title, calories, image, ingredients, instructions }) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img className="card-img-top" src={image} alt="Image1" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        {/* <p className="card-text text-secondary">{ingredients}</p> */}
        <ol className="card-text text-secondary">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>

        {/* <p>{calories}</p> */}
        <a href={instructions} className="btn btn-outline-success">
          See More Instructions
        </a>
      </div>
    </div>
  );
};

export default Recipe;
