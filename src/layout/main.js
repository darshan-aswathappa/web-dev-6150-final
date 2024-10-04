import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
