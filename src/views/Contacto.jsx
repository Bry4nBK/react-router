import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">
      ¿en qué te podemos ayudar?
    </h2>
    <Form>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="formDescription" className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Describe tu consulta" />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  </Container>
);

export default Contact;
