import React from "react";
// import Footer from "./footer";
import Header from "./header";
// import VantaBackground from "../vanta-background";

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 App">
      {/*<VantaBackground />*/}
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer className="mt-auto">
        {/*<Footer />*/}
      </footer>
    </div>
  );
}
