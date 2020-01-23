import React from "react";
import "./App.css";
function App() {
  let rv, gv, bv;
  const handleInputs = e => {
    console.dir(e.target.id);
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
      <div className="colorSample"></div>
    </div>
  );
}
export default App;
