import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const contacts = {
      name: name,
      email: email,
      phone: phone,
    };

    fetch(
      "https://react-ecommorce-website-default-rtdb.firebaseio.com/contactus.json",
      {
        method: "POST",
        body: JSON.stringify(contacts),
        header: {
          "context-type": "application/json",
        },
      }
    );
    console.log(contacts);
    alert("We will contact you soon");
  };

  return (
    <div>
      <h2>Please fill the below details. We will react you Soon</h2>
      <Container className="d-flex justify-content-center mt-5 pt-5">
        <Form onSubmit={handleSubmit}>
          <h2>Please fill the below details. We will reach you soon</h2>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
