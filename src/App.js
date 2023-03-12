import "./styles.css";
import React from "react";
import Counter from "./Counter";
// Import the Name component here similar to the Counter above
import Name from "./Name";

export default function App() {
  return (
    <div className="App">
      {/* Render the Name component here after importing */}
      <Name />
      <Counter />
    </div>
  );
}
