import React from "react";
import "./App.css";
function App() {
  // let style = {
  //   backgroundColor: undefined
  // };

  let colorArray = {
    redValue: 0,
    blueValue: 0,
    greenValue: 0
  };
  const handleInputs = e => {
    if (e.target.id == "redRange") {
      colorArray.redValue = Number(e.target.value);
    } else if (e.target.id == "blueRange") {
      colorArray.blueValue = Number(e.target.value);
    } else {
      colorArray.greenValue = Number(e.target.value);
    }

    console.dir(colorArray);
    // style.backgroundColor = `rgb(${colorArray.redValue},
    // ${colorArray.greenValue},
    // ${colorArray.redValue})`;
    // console.log(style);
  };

  return (
    <div className="App">
      <div className="redSlide">
        <input
          onChange={handleInputs}
          id="redRange"
          type="range"
          min="0"
          max="255"
        ></input>
      </div>
      <div className="redSlide">
        <input
          onChange={handleInputs}
          id="blueRange"
          type="range"
          min="0"
          max="255"
        ></input>
      </div>
      <div className="redSlide">
        <input
          onChange={handleInputs}
          id="greenRange"
          type="range"
          min="0"
          max="255"
        ></input>
      </div>
      <div
        style={{
          backgroundColor: `rgb(${colorArray.redValue},${colorArray.greenValue},${colorArray.blueValue})`
        }}
        className="colorSample"
      ></div>
    </div>
  );
}
export default App;
