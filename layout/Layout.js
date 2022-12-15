import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">{children}</main>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
