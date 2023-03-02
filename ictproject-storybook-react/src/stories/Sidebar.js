import React, { useState } from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import logo from "../../public/logo.png"


const LoginButton = styled.button`
  background-color: purple;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin-left: auto;
  margin-right:auto;
  margin-top: 25%;
`;

function Sidebar({loggedIn}) {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
    
    <div class="sidebar"> 
      <div className='logo'>
        <img src={logo} alt="Logo" /> 
      </div>
        
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

         <LoginButton>{loggedIn ? 'Hello Storytesters' : 'Login'}</LoginButton>
    </div>
    
    
    </>  
  );
}

export default Sidebar;
