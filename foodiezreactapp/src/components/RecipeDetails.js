import React from "react";
import { Redirect, useParams } from "react-router-dom";
import recipeStore from "../stores/recipeStore";
import Moment from "react-moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import UpdateRecipeModal from "./UpdateRecipeModal";
import { useState } from "react";
import authStore from "../stores/authStore";

function RecipeDetails(props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const slug = useParams().recipeSlug;

  const recipe = props.recipe;

  return (
    <div className="detailBackground">
      <br />
      <br />
      <br />
      <div>
        <h2>Recipe: </h2>

        {recipe && ( // if there is recipe show its data
          <>
            <br />
            <h1>hi</h1>
            <h4> Recipe: {recipe.name}</h4>
            <br />
            <img className="card-image-top " src={recipe.image} alt="recipe" />
            <br />
            <br />
            <div className="row justify-content-center align-self-center col-10">
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Steps: {recipe.recipe}</p>
              <p>Recipe Owner: {recipe.name.owner}</p>
            </div>
            <br />
            <p className="buttons">
              {authStore.user?._id === recipe.owner._id && (
                <>
                  {" "}
                  <Button
                    className="buttons"
                    variant="outline-warning"
                    onClick={openModal}
                  >
                    Update Recipe
                  </Button>
                  <UpdateRecipeModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    recipe={recipe}
                  />
                  <br />
                </>
              )}
            </p>
          </>
        )}
      </div>
      <br />
      <br />
    </div>
  );
}

export default observer(RecipeDetails);

//not appearing when clicked on the recipe
