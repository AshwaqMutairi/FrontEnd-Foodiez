import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipeStore {
  constructor() {
    makeAutoObservable(this);
  }

  recipes = [];

  loading = true;

  createRecipe = async (newRecipe) => {
    try {
      // const formData = new FormData();
      // for (const key in newRecipe) {
      //   formData.append(key, newRecipe[key]);
      // }
      const response = await instance.post("/recipes", newRecipe); //formData
      this.recipes.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes");
      this.recipes = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateRecipe = async (recipeId, updatedRecipe) => {
    try {
      const response = await instance.put(`/recipe/${recipeId}`, updatedRecipe);

      this.recipes = this.recipes.map((recipe) =>
        recipe._id === recipeId ? response.data : recipe
      );
    } catch (error) {
      console.log("error", error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();

export default recipeStore;
