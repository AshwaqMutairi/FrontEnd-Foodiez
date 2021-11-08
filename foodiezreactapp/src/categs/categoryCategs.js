import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryCategs {
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
        "🚀 ~ file: categoryCategs.js ~ line 16 ~ CategoryCategs ~ createCategory= ~ error",
        error
      );
    }
  };

  fetchCategories = async () => {
    try {
      const response = await instance.get("/ingredients");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoryCategs -> fetchCategories -> error", error);
    }
  };
}

const categoryCategs = new CategoryCategs();
categoryCategs.fetchCategories();

export default categoryCategs;
