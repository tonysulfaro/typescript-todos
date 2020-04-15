import styled, { css } from "styled-components";

export interface IButton {
  primary?: any;
  danger?: any;
  onClick?: any;
}

export const StyledButton = styled.button<IButton>`
  background: transparent;
  color: lightblue;
  border: 2px solid lightblue;
  border-radius: 5px;
  padding: 1em;
  margin-right: 10px;
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
    `};
`;
