import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => (
  <Container className="text-center my-5">
    <h1 className="mb-4">Error de búsqueda</h1>
    <img 
      src="https://i.pinimg.com/564x/12/01/9c/12019c3ede9651a55824ce56218d48ee.jpg" 
      alt="Not Found"
      className="img-fluid rounded mx-auto d-block" 
    />
  </Container>
);

export default NotFound;
