import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h3`
  font-size: 2rem;
  letter-spacing: 2px;
`;

const Input = styled.input`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  outline: none;
  padding-block: 5px;
  width: 100px;
  background-color: red;
  color: white;
  cursor: pointer;
`;

export default function App() {
  return (
    <div className="App">
      <FormContainer>
        <Heading>Sign Up</Heading>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <ButtonContainer>
          <Button>Cancel</Button>
          <Button>Login</Button>
        </ButtonContainer>
      </FormContainer>
    </div>
  );
}
