import React from "react";

import styled, { css } from "styled-components";
import Button from "../Button";

export interface TodoInterface {
  text: String;
  completed: boolean;
}

export const Todo = (props: TodoInterface) => {
  const StyledTodo = styled.div<TodoInterface>`
    box-shadow: 5px 5px 5px 5px lightgray;
    border-radius: 5px;
    width: 50%;
    padding: 1em;

    ${(props) =>
      props.completed &&
      css`
        text-decoration: line-through;
      `}
  `;

  function CompleteTodo() {
    alert("complete todo");
  }

  function DeleteTodo() {
    alert("delete todo");
  }

  return (
    <StyledTodo {...props}>
      <p>Title: {props.text}</p>
      <Button
        text="complete"
        onClick={(e: any) => {
          CompleteTodo();
        }}
      ></Button>
      <Button
        danger
        text="delete"
        onClick={(e: any) => {
          DeleteTodo();
        }}
      ></Button>
    </StyledTodo>
  );
};
