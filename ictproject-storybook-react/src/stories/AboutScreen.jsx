import React from "react";
import About from "./About";
import Footer from "./Footer";
import Banner from "./Banner";
import Sidebar from "./Sidebar";


export function AboutScreen() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Banner />
      <br />
        <About />
      <br />
      <Footer />

      </div>
      
    </>
  );
}