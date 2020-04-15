import React, { useState } from "react";

import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: "wash dishes", completed: false },
    { id: 1, text: "clean driveway", completed: false },
  ]);

  function CompleteTodo(id: any) {
    let newTodos: any[] = [];

    todos.forEach((todo) => {
      console.log(todo);

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
      {todos.map((todo) => (
        <Todo
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
