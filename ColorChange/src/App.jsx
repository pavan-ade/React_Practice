import { useState } from "react";
import "./App.css";
import ChangeBUtton from "./Component/ChangeButton";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color}}>
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0 "
        
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={ () => setColor('green')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-300">
            Green
          </button>
          <button 
          onClick={ () => setColor('red')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-300">
            Red
          </button>
          <button 
          onClick={ () => setColor('blue')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-300">
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
