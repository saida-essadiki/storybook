import React, { useState } from "react";
import { Button } from "./Button";
import styled from "styled-components";
import './LoginForm.css';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;

const InputWrap = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 1px solid #ddd;
  padding: 8px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;
const StyledP = styled.p`
  margin-top: 10px;
  align-items: center;
`;

export const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLogin = () => {
    let loginSuccessful = true;

    if (!email || !password) {
      setLoginMessage(null);
    } else {
      if (loginSuccessful) {
        console.log("Logged in successfully");
        setLoginMessage(
          <StyledP>
            Your account is ready and we should probably get you started!
          </StyledP>
        );
      } else {
        return null;
      }
    }
  };

  return (
  <div className="feedback-container-login">
    <StyledForm>
      <InputWrap>
        <StyledLabel htmlFor="login-form-email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          id="login-form-email"
          data-testid="email"
          onChange={handleInput}
        />
      </InputWrap>

      <InputWrap>
        <StyledLabel htmlFor="login-form-password">Password</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          id="login-form-password"
          data-testid="password"
          onChange={handleInput}
        />
      </InputWrap>

      <Button
        size="small"
        label="LogIn"
        onClick={handleLogin}
        disabled={!email || !password}
        data-testid="login-button"
      >
        Log In
      </Button>

      {loginMessage}
    </StyledForm>
    </div>
  );
};
