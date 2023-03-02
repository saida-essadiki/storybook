import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Banner from "./Banner";
import { LoginForm } from "./LoginForm";

import "./LoginPage.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import img from '../../public/img_loginpage.jpg'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  padding-bottom: 10px;
`;

function LoginPage(props) {
  return (
    <>
    <Sidebar />
      <div className="content">
      <Banner />
        <div className="flex-container">
        
        <div className="flex-item-loginpage">
        <LoginForm />
        </div>
        <div className="flex-item-loginpage">
          <div className="img">
         <img src={img} alt="img_oldcomputer" />
        </div>
        </div>

        </div>
        
        
              
      </div>
    </>


   
  );
}

LoginPage.propTypes = {};

export default LoginPage;
