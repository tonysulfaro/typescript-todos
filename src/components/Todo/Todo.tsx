import React from "react";

import styled, { css } from "styled-components";
import Button from "../Button";

export interface TodoInterface {
  id: any;
  text: String;
  completed: boolean;
  CompleteTodo: Function;
  DeleteTodo: Function;
}

const Container = styled.div<TodoInterface>`
  box-shadow: 5px 5px 5px 5px lightgray;
  border-radius: 5px;
  width: 50%;
  padding: 1em;
  margin: 10px;

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
    `};
`;

export const Todo = (props: TodoInterface) => {
  return (
    <Container {...props}>
      <p>Title: {props.text}</p>
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
