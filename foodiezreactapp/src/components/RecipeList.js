import Card from "./RecipeCard";
import { useState } from "react";
import RecipeModal from "./RecipeModal";
import { observer } from "mobx-react";
import { Form, Row, Stack } from "react-bootstrap";

function RecipeList({ recipes, categoryId }) {
  const [query, setQuery] = useState("");

  const recipeList = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <Card key={recipe._id} recipe={recipe} />);

  return (
    <div>
      <h1 className="title">Recipes</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for recipe by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <RecipeModal categoryId={categoryId} />
      </Stack>

      <Row>{recipeList}</Row>
    </div>
  );
}

export default observer(RecipeList);
