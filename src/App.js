//useState

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const changeName = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div className="App">
      <form>
        <input
      type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <p>{name}</p>
        <button onClick={changeName}>Click me</button>
      </form>
    </div>
  );
}

export default App;
