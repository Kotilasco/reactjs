import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //const [count, setCount] = useState(0);

 /*  const addValue = () => {
     setCount((prevCounter) => prevCounter+ 1)

  };

  const removeValue = () => {
    count > 0 && setCount(prevCount => prevCount - 1);
  }; */
  return (
    <>
      <h1 className="bg-green-500 text-white ">Vite with Tailwind css</h1>
   {/*    <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {count}</p> */}

<Card />

    </>
  );
}

export default App;
