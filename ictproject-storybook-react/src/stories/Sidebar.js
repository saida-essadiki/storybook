import React, { useState } from "react";
import styled from "styled-components";
import "./Sidebar.css";

const Logo = styled.img`
  height: 90px;
  margin-left: 60px;
  margin-top: 20px;
`;
const LoginButton = styled.button`
  background-color: purple;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 90px;
  margin-left: 70px;
  margin-right: 50px;
  margin: 40px;
`;

function Sidebar({ loggedIn }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="sidebar">
      {" "}
      <Logo src="./../public/logo.png" alt="Logo" />
      <a class="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <LoginButton>{loggedIn ? "Hello Storytesters" : "Login"}</LoginButton>
    </div>
  );
}

export default Sidebar;
