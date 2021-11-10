import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  constructor() {
    makeAutoObservable(this);
  }

  categories = [];

  loading = true;

  createCategory = async (newCategory) => {
    try {
      // const formData = new FormData();
      // for (const key in newCategory) {
      //   formData.append(key, newCategory[key]);
      // }
      const response = await instance.post("/categories", newCategory); //formData
      this.categories.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
