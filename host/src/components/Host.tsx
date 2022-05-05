import React from "react";
import { Link } from "react-router-dom";

export const Host = () => {
  return (
    <>
      <h1>Host</h1>
      <Link to={"app1"}>test1</Link>
      <hr/>
      <Link to={"app2"}>test2</Link>
    </>
  );
};
