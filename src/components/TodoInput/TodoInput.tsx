import React, { useState } from "react";

import styled from "styled-components";

import Button from "../Button";

export interface ITodoInput {
  AddTodo: Function;
}

const Container = styled.div<ITodoInput>`
  box-shadow: 5px 5px 5px 5px lightgray;
  border-radius: 5px;
  width: 50%;
  padding: 1em;
  margin: 10px;
`;

const StyledInput = styled.input`
  padding: 1em;
  border-radius: 5px;
`;

export const TodoInput = (props: ITodoInput) => {
  const [todo, settodo] = useState("");

  return (
    <Container {...props}>
      <p>Add Todo:</p>
      <StyledInput
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      ></StyledInput>
      <Button
        primary
        onClick={() => {
          props.AddTodo(todo);
        }}
      >
        Add Todo
      </Button>
    </Container>
  );
};
