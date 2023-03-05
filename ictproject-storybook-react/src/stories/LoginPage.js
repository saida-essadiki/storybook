import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Banner from "./Banner";
import { LoginForm } from "./LoginForm";

import "./LoginPage.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import img from './assets/img.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

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

            <div className="linecomponent">
              <hr className="line" />
              <p>Or</p>
              <hr className="line" />
            </div>

           
              <div className="buttons">
                <button className="socialButton">
                  <span className="middle"><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
                  <span>Login with Facebook</span>
                </button>

                <button className="socialButton">
                  <span className="middle"><FontAwesomeIcon icon={faGoogle} size="2x" /></span>
                  <span>Login with Google</span>
                </button>

                <button className="socialButton">
                  <span className="middle"><FontAwesomeIcon icon={faTwitter} size="2x"  /></span>
                  <span>Login with Twitter</span>
                </button>
          </div>
          </div>
            
          
        



          <div className="flex-item-loginpage">
            <img className="img_old" src={img} alt="img_oldcomputer" />
          </div>
      </div>
</div>





    </>



  );
}

LoginPage.propTypes = {};

export default LoginPage;
