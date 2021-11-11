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
        <img className="card-image-top" src={recipe.image} alt={recipe.name} />
        <h5>{recipe.owner.username}</h5>
        {/* <h4>{recipe.ingredients}</h4>
        <h4>{recipe.recipe}</h4> */}
      </div>
    </Link>
  );
}

export default RecipeItem;

//update button should appear only inside the recipe detail and only to users
