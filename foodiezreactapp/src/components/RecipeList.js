import React, { useState } from "react";
import RecipeDetail from "./RecipeDetail";
import { Button } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import AddRecipeModal from "./AddRecipeModal";
import categoryStore from "../stores/categoryStore";
import { useParams } from "react-router";
// add cat modal

function RecipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { categoryId } = useParams();
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const category = categoryStore.categories.find(
    (category) => category._id === categoryId
  );
  const recipes = recipeStore.recipes
    .filter((recipe) => recipe.category.name === category.name)
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeDetail recipe={recipe} />);

  return (
    <div>
      <br />
      <p className="search">
        <Button className="add-button" variant="warning" onClick={openModal}>
          Add Recipe
        </Button>
        <SearchBar setQuery={setQuery} />{" "}
      </p>

      <AddRecipeModal isOpen={isOpen} closeModal={closeModal} />
      <div className="col-md-auto text-center list">{recipes}</div>
    </div>
  );
}

export default observer(RecipeList);
