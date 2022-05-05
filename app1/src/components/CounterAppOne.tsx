import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>
        Add by one each click <strong>APP-111-</strong>
      </h3>
      <div>Your click count : {count} </div>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
      <hr/>
      <Link to={"/app1/detail_view1"}>test1</Link>
      <br/>
      <Link to={"/app1/detail_view2"}>test2</Link>
    </div>
  );
};

export default Counter;
