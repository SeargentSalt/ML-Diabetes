import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar  from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
export default function NavigationBar () {
  return (
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#About">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#UploadImage">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  )
}
