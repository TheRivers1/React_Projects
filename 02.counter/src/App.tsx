import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <div className="counter-container">
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        {count > 0 ? (
          <p className="positive">The count is positive</p>
        ) : count < 0 ? (
          <p className="negative">The count is negative</p>
        ) : (
          <p className="neutral">The count is neutral</p>
        )}
      </div>
    </>
  );
}

export default App;
