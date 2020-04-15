import React from "react";

import styled, { css } from "styled-components";

export interface ButtonInterface {
  text: String;
  primary?: boolean;
  danger?: boolean;
}

export const Button = (props: ButtonInterface) => {
  const Button = styled("button")<{ primary?: boolean; danger?: boolean }>`
    background: transparent;
    color: palegreen;
    border: 2px solid palegreen;
    border-radius: 5px;
    padding: 1em;

    ${(props) =>
      props.primary &&
      css`
        background: palegreen;
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

  return <Button {...props}>{props.text}</Button>;
};
