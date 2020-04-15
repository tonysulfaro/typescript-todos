import React from "react";

import styled, { css } from "styled-components";

export interface ButtonInterface {
  text: String;
  primary?: any;
  danger?: any;
}

export const Button = (props: ButtonInterface) => {
  const StyledButton = styled.button<ButtonInterface>`
    background: transparent;
    color: lightblue;
    border: 2px solid lightblue;
    border-radius: 5px;
    padding: 1em;

    ${(props) =>
      props.primary &&
      css`
        background: lightblue;
        color: white;
      `}

    ${(props) =>
      props.danger &&
      css`
        background: palevioletred;
        border: 2px solid palevioletred;
        color: white;
      `}
  `;

  return <StyledButton {...props}>{props.text}</StyledButton>;
};
