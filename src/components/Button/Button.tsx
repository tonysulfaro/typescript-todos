import React from "react";

import styled, { css } from "styled-components";

export interface ButtonInterface {
  text: String;
  primary?: boolean;
  danger?: boolean;
}

export const Button = (props: ButtonInterface) => {
  const Button = styled("button")<{ primary?: boolean }>`
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
    border-radius: 5px;
    padding: 1em;

    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}
  `;

  return <Button {...props}>{props.text}</Button>;
};
