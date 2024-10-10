import React from "react";
import Footer from "./footer";
// import Header from "./header";
import NavBar from "components/home/NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
