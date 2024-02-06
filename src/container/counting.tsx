import * as React from "react";
import { Component, useState } from "react";

const Counting = () => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <button onClick={Increase}>Increment</button>
      <>Count: {number}</>
      <button onClick={Decrease}>Decrement</button>
    </>
  );
};
export default Counting;
