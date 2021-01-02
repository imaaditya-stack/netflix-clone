import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./style.css";

function Header() {
  return (
    <Navbar expand="lg" className="navbar navbar-default" variant="dark">
      <Navbar.Brand href="/">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          className="img-fluid navbar__brand"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ color: "#fff" }}>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>TV Shows</Nav.Link>
          <Nav.Link>Recently added</Nav.Link>
          <Nav.Link>My List</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link>
            <SearchIcon style={{ fontSize: 30 }} />
          </Nav.Link>
          <Nav.Link>
            <NotificationsIcon style={{ fontSize: 30 }} />
          </Nav.Link>
          <Nav.Link>
            <Image
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              className="img-fluid"
              style={{ width: 30 }}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
