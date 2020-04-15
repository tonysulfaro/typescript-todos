import React from "react";

import Button from "./components/Button";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo text="wash dishes" completed={false}></Todo>
      <Todo text="wash dishes" completed={true}></Todo>
      <Button text="normal button"></Button>
      <Button primary text="primary button"></Button>
      <Button danger text="danger button"></Button>
    </div>
  );
}

export default App;
