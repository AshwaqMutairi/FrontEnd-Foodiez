import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
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
  console.log(category.recipies);
  const recipes = category.recipies
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeItem recipe={recipe} />);

  // const recipes = recipeStore.recipes
  //   .filter((recipe) => recipe.category.name === category.name)
  //   .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((recipe) => <RecipeItem recipe={recipe} />);

  return (
    <div>
      <br />
      <div className="header">
        <h4 className="category-title">{category.name}</h4>
        <p className="search">
          <Button className="add-button" variant="warning" onClick={openModal}>
            Add Recipe
          </Button>
          <SearchBar setQuery={setQuery} />{" "}
        </p>
      </div>
      <AddRecipeModal
        isOpen={isOpen}
        closeModal={closeModal}
        categoryId={categoryId}
      />
      <div className="col-md-auto text-center list">{recipes}</div>
    </div>
  );
}

export default observer(RecipeList);

//make add recipe only appear to users
//recipes not adding nor fetching?
