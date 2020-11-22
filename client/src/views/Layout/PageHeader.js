import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Image
} from "react-bootstrap";
import logo from "assets/logo.jpg";
import Search from "views/Search";

const PageHeader = () => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Navbar.Brand href="/">
        <Image src={logo} style={{ height: 60, width: 60, padding: 10 }} alt="game of thrones"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/battles">Battles</Nav.Link>
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default PageHeader;
