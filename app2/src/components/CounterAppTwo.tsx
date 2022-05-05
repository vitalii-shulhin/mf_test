import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>
        Add by one each click <strong>APP-222-</strong>
      </h3>
      <div>Your click count : {count} </div>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
