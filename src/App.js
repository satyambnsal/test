import { useState } from "react";
import { Demo } from "./components/Demo";
import "./styles.css";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      {isShow && <Demo />}

      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
}
