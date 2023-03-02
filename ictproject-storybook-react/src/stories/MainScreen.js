import React from "react";
import "./MainScreen.css";

import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Footer from "./Footer";
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';


export function MainScreen() {
  return (
    <>
    <Sidebar />
    <div className="content">
        <Banner/>
    <div className="container-main">
        <div className="flex-item-card">
            <Card />
        </div>
        <div className="flex-item-card">
            <Card2 />
        </div>
        <div className="flex-item-card">
            <Card3 />
        </div>
        </div>    
        <Footer />
    </div>

    </>
  );
}
