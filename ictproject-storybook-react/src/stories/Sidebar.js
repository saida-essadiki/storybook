import React, { useState } from 'react';
import styled from 'styled-components';
import './Sidebar.css';

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
  margin-right:50px;
  margin: 40px;
`;

function Sidebar({loggedIn}) {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`container ${showSidebar ? 'sidebar-visible' : 'sidebar-hidden'}`}>
      {showSidebar && <div className="sidebar"> <Logo src="./../public/logo.png" alt="Logo" />
      
      <ul className='links'>
     <ul className='link'><a href='/'>Home</a> </ul> 
     <ul className='link'> <a href='http://localhost:6006/?path=/story/feedback-page--default'>Feedback</a></ul>
     <ul className='link'><a href='http://localhost:6006/?path=/story/stories-aboutscreen--def'>Contact Us</a></ul>
     <ul className='link'> <a href='/'>About Us</a></ul>
    </ul>
     <LoginButton>{loggedIn ? 'Hello Storytesters' : 'Login'}</LoginButton>
     
    </div>}
       <button className='toggle' onClick={toggleSidebar}>-</button>
   
    </div>
  );
}

export default Sidebar;
