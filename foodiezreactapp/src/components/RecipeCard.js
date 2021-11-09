import { Button, Card, Col } from "react-bootstrap";
import categoryCateg from "../categs/categoryCateg";
import RecipeModal from "./RecipeModal";

function RecipeCard({ recipe }) {
  const handleDelete = () => categoryCateg.deleteRecipe(recipe._id);

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button>
          <RecipeModal oldRecipe={recipe} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RecipeCard;
