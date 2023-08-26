import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  const [count, setCount] = useState(3);

  return (
    <div className="container">
      <Header count={count} setCount={setCount} />
      <Content count={count} setCount={setCount} />
    </div>
  );
};

export default App;
