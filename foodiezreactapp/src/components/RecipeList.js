import React, { useState } from "react";
import RecipeDetail from "./RecipeDetail";
import { Button } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import AddRecipeModal from "./AddRecipeModal";
// add cat modal

function RecipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  //   const recipes = recipeStore.recipes
  //     .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
  //     .map((recipe) => <RecipeDetail recipe={recipe} />);

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
      {/* <div className="col-md-auto text-center list">{recipes}</div> */}
    </div>
  );
}

export default observer(RecipeList);
