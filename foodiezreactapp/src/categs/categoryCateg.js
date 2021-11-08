import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryCateg {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  categories = [];

  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) {
        formData.append(key, newCategory[key]);
      }
      const response = await instance.post("/categories", formData);
      this.categories.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryCateg.js ~ line 16 ~ CategoryCateg ~ createCategory= ~ error",
        error
      );
    }
  };

  fetchCategories = async () => {
    try {
      const response = await instance.get("/ingredients");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoryCateg -> fetchCategories -> error", error);
    }
  };

  createRecipe = async (caregoryId, recipe) => {
    try {
      const formData = new FormData();
      for (const key in recipe) {
        formData.append(key, recipe[key]);
      }
      const res = await instance.post(
        `/categories/${caregoryId}/recipes`,
        formData
      );
      caregoryId.recipe.push(res.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryCateg.js ~ line 45 ~ createRecipe= ~ error",
        error
      );
    }
  };
}

const categoryCateg = new CategoryCateg();
categoryCateg.fetchCategories();

export default categoryCateg;
