import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const name = "Magali";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Card name={"Magali"} age={"21"} hobbie={"Fazer trilhas na natureza"}></Card>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Button text={name} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
