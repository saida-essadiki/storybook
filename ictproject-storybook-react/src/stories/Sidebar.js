import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, Outlet} from 'react-router-dom';
import './Sidebar.css';
import logo from "./assets/logo.png"


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

function Sidebar({loggedIn}) { const [showSidebar, setShowSidebar] = useState(true);
 

  return (
    <>
    
    <div class="sidebar"> 
     <div className='logo'>
        <img src={logo} alt="Logo" /> 
      </div>
        
        <a href='/'>Home</a>
        <a href='feedback'>Feedback</a>
        <a href='/login'> Login</a>
        <a href='/about'>About US</a>
       

         <LoginButton>{loggedIn ? 'Hello Storytesters' : 'Login'}</LoginButton>
  
    </div>
    
    <Outlet/>
    </>  
  );
}

export default Sidebar;
