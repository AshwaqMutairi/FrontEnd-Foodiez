import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import categoryCateg from "../categs/categoryCateg";

function RecipeModal({ categoryId }) {
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
    // creator we need to add the user who creat it
    // ingrediants we need to add them
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    categoryCateg.createRecipe(categoryId, recipe);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        New
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your recipe's name"
                name="name"
                value={recipe.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>

            {/* Recipe creator shoud be the user so he don't need 
            to enter his name! */}

            {/* <InputGroup className="mb-3">
              <InputGroup.Text>Creator</InputGroup.Text>
              <FormControl
                placeholder="Your recipe's name"
                name="name"
                value={recipe.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup> */}
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
              <FormControl
                name="description"
                value={recipe.description}
                type="text"
                onChange={handleChange}
                placeholder="Description"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              Add Recipe
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeModal;
