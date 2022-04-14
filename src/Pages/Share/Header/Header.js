import { signOut } from "firebase/auth";
import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Icon/logo.png";
import auth from "../../../firebase.init";
const Header = () => {
  const [user]=useAuthState(auth);
  const handleSingout=()=>{
    signOut(auth);
  }
  return (
    <Navbar sticky="top" bg="info" expand={false}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} height="50px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Car Details
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 bg-light">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                Order
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {
                user? <button onClick={handleSingout}  className="btn btn-link text-light bg-success text-decoration-none">Sing Out</button>:
                <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
