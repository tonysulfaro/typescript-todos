import React, { useState } from "react";

import styled from "styled-components";

import Button from "../Button";

export interface ITodoInput {
  AddTodo: Function;
}

const Container = styled.div<ITodoInput>`
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 95%;
  padding: 1em;
  margin: 10px;
`;

const StyledInput = styled.input`
  padding: 1em;
  border-radius: 5px;
  margin-right: 10px;
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
          if (todo === "") {
            return;
          }

          props.AddTodo(todo);
          settodo("");
        }}
      >
        Add Todo
      </Button>
    </Container>
  );
};
