import React, { useState } from "react";
import { useCounter } from "./store/ReducerStore";

function Counter() {
  const [inputVal, setInputVal] = useState(null);
  const { dispatchCounter, counter } = useCounter();
  function increment(e) {
    e.preventDefault();
    dispatchCounter({
      type: "INCREMENT",
    });
  }

  function decrement(e) {
    e.preventDefault();
    dispatchCounter({
      type: "DECREMENT",
    });
  }

  function add(e) {
    e.preventDefault();
    dispatchCounter({
      type: "ADD",
      payload: inputVal,
    });
  }

  function sub(e) {
    e.preventDefault();
    dispatchCounter({
      type: "SUB",
      payload: inputVal,
    });
  }

  return (
    <div className="container">
      <h1 className="text-center text-danger mt-3 p-4 bg-black rounded-4">{counter}</h1>
      <div className="text-center">
        <button onClick={increment} className="btn btn-primary me-2">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-danger">
          Decrement
        </button>
        <br />
        <input
          onChange={(e) => setInputVal(e.target.value)}
          className="mt-3 p-1 bg-body-tertiary"
          type="number"
        />
        <br />
        <button onClick={add} className="btn btn-warning me-2 mt-2">
          Add
        </button>
        <button onClick={sub} className="btn btn-secondary mt-2">
          Sub
        </button>
      </div>
    </div>
  );
}

export default Counter;
