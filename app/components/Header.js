"use client";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Nav.Link href="/" className="logo">
          <FontAwesomeIcon icon={faTerminal} style={{ fontSize: 30 }} />
          <h4 className="brand">Kamesh S</h4>{" "}
          <p className="text">software developer</p>
        </Nav.Link>
        <Nav>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <span className="v"></span>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
