import { useState } from "react";
import "./App.css";

function App() {
  const getColor = localStorage.getItem("color");
  const [color, setColor] = useState(!getColor ? "#ffa500" : getColor);
  const colors = [
    "#ffe74c",
    "#ff5964",
    "#38618c",
    "#35a7ff",
    "#4c6085",
    "#36f1CD",
    "#32322c",
    "#ffffff",
    "#ffa500",
  ];

  const changeColor = () => {
    let randNum = Math.floor(Math.random() * colors.length);
    let randColor = colors[randNum];
    setColor(randColor);
    localStorage.setItem("color", randColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="main">
        <div className="bg-color">
          <h1>Background Color: {color}</h1>
        </div>
        <div className="button">
          <button className="btn" onClick={changeColor}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// Task 1: Create a state variable called color, which you will show on the front end.
// Task 2: Create an array of colors (HEX-codes)
// Task 3: Create a function which changes the background color upon clicking the button.
// Task 4: Select a random color from the array of colors (use Math.Random).
// Task 5: Change the value of the state variable.
