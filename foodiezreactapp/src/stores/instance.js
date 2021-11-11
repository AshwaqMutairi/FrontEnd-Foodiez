import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default instance;

//Routes
// app.use("/api/categories");
// get("/:categoryId", fetchCategory);
// get("/", fetchCategories);
// post("/", createCategory);
// post("/:categoryId/recipies", createRecipe
// );

// app.use("/api/recipes");
// router.get("/:recipeId", fetchRecipe);
// router.get("/", fetchRecipes);
