import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import authStore from "../stores/authStore";

export default function SignUpModal() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <div>
      <Button variant="outline-info " onClick={() => setIsOpen(true)}>
        Sign up
      </Button>
      <Modal
        show={isOpen}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="username"
                placeholder="Enter your username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="firstName"
                placeholder="Enter your first name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="lastName"
                placeholder="Enter your last name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleSubmit}>
            Sign up
          </Button>
          <Button variant="info" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
