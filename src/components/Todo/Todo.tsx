import React from "react";

import styled, { css } from "styled-components";
import Button from "../Button";

export interface ITodo {
  id: any;
  text: String;
  completed: boolean;
  CompleteTodo: Function;
  DeleteTodo: Function;
}

const Container = styled.div<ITodo>`
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 45%;
  padding: 1em;
  margin: 10px;

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
    `};
`;

export const Todo = (props: ITodo) => {
  return (
    <Container {...props}>
      <p>{props.text}</p>
      <Button
        onClick={(e: Event) => {
          props.CompleteTodo(props.id);
        }}
      >
        Complete
      </Button>
      <Button
        danger
        onClick={(e: Event) => {
          props.DeleteTodo(props.id);
        }}
      >
        Delete
      </Button>
    </Container>
  );
};
