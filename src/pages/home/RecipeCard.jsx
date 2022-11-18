import React from "react";
import { CardImg } from "react-bootstrap";
import CardStyle, { Cards } from "./Home.styled";

const RecipeCard = ({ data }) => {
  console.log("recipedata:", data);
  return (
    <Cards>
      {data.map((item, index) => {
        const { recipe } = item;
        return (
          <CardStyle key={index}>
            <h3>{recipe.label}</h3>

            <CardImg src={recipe.image} alt="" />

            <button>View More</button>
          </CardStyle>
        );
      })}
    </Cards>
  );
};

export default RecipeCard;
