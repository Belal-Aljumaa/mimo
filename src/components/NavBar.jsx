import React, { useState } from "react";
import { Navbar, Row, Nav, Button, Form, Container } from "react-bootstrap";

export const NavBar = ({ filterSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    filterSearch(searchValue);
    setSearchValue("");
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">Mimo Pizza & Döner</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search..."
                className="me-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button variant="outline-success" onClick={onSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
