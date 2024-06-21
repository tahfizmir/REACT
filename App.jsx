/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="w-full fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"style={{background:"orange"}}>
        <div className="fixed flex flex-wrap justify-center gap-3 rounded-2xl px-2 py-2 flex-auto text-justify" style={{backgroundColor:"white"}}>
          <button className=" shadow-lg outline-dashed px-4 rounded-xl " style={{background:"red",margin:4}} onClick={()=>{setColor("red")}}>Red</button>
          <button className="outline-dashed px-4 rounded-xl border-solid" style={{background:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
          <button className="outline-dashed px-4 rounded-xl" style={{background:"yellow"}} onClick={()=>{setColor("yellow")}}>Red</button>
          <button className="outline-dashed px-4 rounded-xl" style={{background:"green"}} onClick={()=>{setColor("green")}}>Green</button>

        </div>
      </div>
    </div>
  );
}

export default App;
