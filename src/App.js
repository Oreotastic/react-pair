import React, {useState} from "react";
import "./App.css";

function App() {

  let [colorValues, setValues] = useState({
      redValue: 0,
      blueValue: 0,
      greenValue: 0
  }) 

  const handleInputs = e => {

    if (e.target.id == "redRange") {
      setValues({...colorValues,redValue:e.target.value})
    } else if (e.target.id == "blueRange") {
      setValues({...colorValues,blueValue:e.target.value})
    } else {
      setValues({...colorValues,greenValue:e.target.value})
    }
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
          backgroundColor: `rgb(${colorValues.redValue},${colorValues.greenValue},${colorValues.blueValue})`
        }}
        className="colorSample"
      ></div>
    </div>
  );
}
export default App;
