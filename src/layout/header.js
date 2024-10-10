import React from "react";
// import Nav from "react-bootstrap/Nav";
import Navbar from "pages/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
  return (
    // <div>
    //   <header>
    //     <Nav defaultActiveKey="/" as="ul">
    //       <Nav.Item as="li">
    //         <Nav.Link href="/">Home</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item as="li">
    //         <Nav.Link href="/sign-in">Login</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item as="li">
    //         <Nav.Link href="/register">Register</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </header>
    // </div>
    <Navbar></Navbar>

  );
}
