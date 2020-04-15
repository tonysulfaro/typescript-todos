import React from "react";

import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button text="normal button"></Button>
      <Button primary text="primary button"></Button>
      <Button danger text="danger button"></Button>
    </div>
  );
}

export default App;
