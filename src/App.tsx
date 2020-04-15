import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

import Nav from "./components/Nav";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function AddTodo(text: string) {
    let newTodos = [...todos];
    newTodos.push({ id: uuidv4(), text, completed: false });
    setTodos(newTodos);
  }

  function CompleteTodo(id: string) {
    let newTodos: any[] = [];

    todos.forEach((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        newTodos.push(todo);
      } else {
        newTodos.push(todo);
      }

      setTodos(newTodos);
    });
  }

  function DeleteTodo(id: string) {
    let newTodos: any[] = [];

    todos.forEach((todo: ITodo) => {
      if (todo.id !== id) {
        newTodos.push(todo);
      }

      setTodos(newTodos);
    });
  }

  return (
    <div className="App">
      <Nav></Nav>
      <TodoInput AddTodo={AddTodo}></TodoInput>
      <TodoContainer>
        {todos.map((todo: ITodo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            CompleteTodo={CompleteTodo}
            DeleteTodo={DeleteTodo}
          ></Todo>
        ))}
      </TodoContainer>
    </div>
  );
}

export default App;
