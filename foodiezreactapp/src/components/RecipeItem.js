import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import UpdateRecipeModal from "./UpdateRecipeModal";
// import Moment from "react-moment";

function RecipeItem(props) {
  const recipe = props.recipe;
  const category = props.category;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <Link
      className="p-5 m-5 col-lg-4 col-sm-12 itemWrapper"
      to={`/recipes/${recipe._id}`}
    >
      <div>
        <h4>{recipe.name}</h4>
        <h4>{recipe.owner.name}</h4>
        <img className="card-image-top" src={recipe.image} alt={recipe.name} />
        <h4>{recipe.ingredients}</h4>
        <h4>{recipe.recipe}</h4>
        {/* <Button
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
        /> */}
      </div>
    </Link>
  );
}

export default RecipeItem;

//update button should appear only inside the recipe detail and only to users
