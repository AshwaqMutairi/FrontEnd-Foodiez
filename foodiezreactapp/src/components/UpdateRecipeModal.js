import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";

export default function UpdateRecipeModal(props) {
  const [recipe, setRecipe] = useState({
    name: props.recipe.name,
    image: props.recipe.image,
    recipe: props.recipe.recipe,
    ingredients: props.recipe.ingredients,
    owner: props.recipe.owner,
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.updateRecipe(props.recipe._id, recipe);
    props.closeModal();
  };

  return (
    <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Recipe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter Recipe Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="image"
              placeholder="Enter image url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Recipe</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="recipe"
              placeholder="Enter the steps for your recipe"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Owner</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="owner"
              placeholder="Enter you name"
            />
          </Form.Group>
        </Form>
        <p>only registered users can Update Recipes</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          Update Recipe
        </Button>
        <Button variant="warning" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
