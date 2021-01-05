import React from "react";
import { Navbar, Form, Button, Nav } from "react-bootstrap";
import "./style.css";

function HomeHeader() {
  return (
    <Navbar expand="lg" className="navbar navbar-default" variant="dark">
      <Navbar.Brand href="/">
        <span
          style={{
            color: "#e50914",
            fontWeight: "bold",
            fontSize: 30,
            letterSpacing: 2,
          }}
        >
          NETFLIX
        </span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Form inline>
            <Button className="button--global">Sign In</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomeHeader;
