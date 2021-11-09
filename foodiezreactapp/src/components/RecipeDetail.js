import React from "react";
import { Redirect, useParams } from "react-router";
import RecipeCateg from "../categs/RecipeCateg";

const RecipeDetail = () => {
  const { RecipeSlug } = useParams();
  const Recipe = RecipeCateg.Categories.find(
    (Recipe) => Recipe.slug === RecipeSlug
  );
  if (!Recipe) return <Redirect to="/Categories" />;
  return (
    <div className="detail">
      <img className="detail-img" src={Recipe.image} alt={Recipe.name} />
      <h2 className="title">{Recipe.name}</h2>
      {/* the creator name */}
      <h2 className="title">{Recipe.creator}</h2>
      <h3 className="title"> {Recipe.description} </h3>
      {/* we have to add the ingrediants */}
      <h4 className="title"> {Recipe.ingrediants} </h4>
    </div>
  );
};

export default RecipeDetail;
