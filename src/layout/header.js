import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <div>
      <header>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/sign-in">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </div>
  );
}
