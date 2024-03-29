import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";
import categoryStore from "../stores/categoryStore";
import { useParams } from "react-router";

export default function AddRecipeModal(props) {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    recipe: "",
    ingredients: "",
    // owner: "",
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipe(props.categoryId, recipe);
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
        <Modal.Title id="contained-modal-title-vcenter">Add Recipe</Modal.Title>
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
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleImage} name="image" />
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
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="ingredients"
              placeholder="Enter needed ingredients for your recipe"
            />
          </Form.Group>
        </Form>
        <p>only registered users can create Recipes</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          Create Recipe
        </Button>
        <Button variant="warning" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

//add recipe not working
