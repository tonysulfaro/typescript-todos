import React from "react";

import styled from "styled-components";

export interface INav {}

const StyledNav = styled.nav`
  margin: 0 0 1em 0;
  padding: 0.5em 2em;
  width: 100%;
  background-color: lightblue;
  color: white;
`;

export const Nav = (props: INav) => {
  return (
    <StyledNav>
      <p>
        <strong>Todo List</strong>
      </p>
    </StyledNav>
  );
};
