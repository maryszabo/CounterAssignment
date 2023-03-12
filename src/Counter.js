import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    // Fill in code for increment here
    setCount(count + 1);
    //try setCount(a => a+1);
  }
  function decrement() {
    // Fill in code for decrement here
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Counter Assignment</h2>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
