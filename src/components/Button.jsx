import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: rgb(114, 114, 236);
  background-color: rgba(64, 224, 208);
  border-color: rgb(114, 114, 236);
  border-radius: 5px;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: rgba(64, 224, 208);
    background-color: rgb(114, 114, 236);
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
