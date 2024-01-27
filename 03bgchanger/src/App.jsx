import { useState } from "react";


function App() {
  const [color, setColor] = useState("white");

  const changeColor = (clr) => {
    setColor(clr)
  }

  return (
    <div className="w-screen h-screen  duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button onClick={() => changeColor('red')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-red-500 text-white">
            RED
          </button>
          <button onClick={() => changeColor('green')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-green-500 text-white">
            GREEN
          </button>
          <button onClick={() => changeColor('blue')} className="outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500 text-white">
            BLUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
