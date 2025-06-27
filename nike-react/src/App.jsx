import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Shape from "./components/Shape";

function App() {
  const [count, setCount] = useState(0);

  const name = "Magali";

  return (
    <>
      <div className="display-flex">
        <Shape color={"purple"} shapeType={"square"} />
        <Shape color={"orange"} shapeType={"circle"} />
        <Shape color={"green"} shapeType={"rectangle"} />
      </div>

      <div>
        <div className="display-flex">
          <div className="card1">
            <Button2 label={"Uma label"} size={"small"} variant={"green"} />
            <Button2 label={"Uma label"} size={"medium"} variant={"green"} />
            <Button2 label={"Uma label"} size={"large"} variant={"green"} />
          </div>
          <div className="card1">
            <Button2 label={"Uma label"} size={"small"} variant={"red"} />
            <Button2 label={"Uma label"} size={"medium"} variant={"red"} />
            <Button2 label={"Uma label"} size={"large"} variant={"red"} />
          </div>
          <div className="card1">
            <Button2 label={"Uma label"} size={"small"} variant={"yellow"} />
            <Button2 label={"Uma label"} size={"medium"} variant={"yellow"} />
            <Button2 label={"Uma label"} size={"large"} variant={"yellow"} />
          </div>
        </div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <card1 name={"Magali"} age={"21"} hobbie={"Fazer trilhas na natureza"}></card1> */}

      <div className="">
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
