import React from "react";
import { Navbar, Form, Button, Image, Nav } from "react-bootstrap";
import "./style.css";

function HomeHeader() {
  return (
    <Navbar expand="lg" className="navbar navbar-default" variant="dark">
      <Navbar.Brand href="/">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          className="img-fluid navbar__brand"
        />
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
