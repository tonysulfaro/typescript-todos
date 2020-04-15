import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function AddTodo(text: string) {
    let newTodos = [...todos];
    newTodos.push({ id: uuidv4(), text, completed: false });
    setTodos(newTodos);
  }

  function CompleteTodo(id: any) {
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

  function DeleteTodo(id: any) {
    alert("delete todo" + id);
  }

  return (
    <div className="App">
      <TodoInput AddTodo={AddTodo}></TodoInput>
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
    </div>
  );
}

export default App;
