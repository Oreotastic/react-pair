import React, { useState } from "react";
import moment from "moment";
import "./App.css";
function App() {
  let [days, setWeek] = useState([]);
  let now = moment().startOf("week");
  let week = [now];
  let i = 0;
  while (week.length < 7) {
    week.push(moment(now).add("day", ++i));
  }

  //   console.log(now);
  //   console.log(week);
  function startOfWeek() {
    now = week[week.length - 1].endOf("week");
    let start = moment(now).add("day", 1);
    for (let i = 0; i < 7; i++) {
      let current = moment(start).add("day", i);
      setWeek([
        ...days,
        {
          date: current["_d"]
        }
      ]);
      week.push(moment(start).add("day", i));
      console.log(current["_d"]);
    }
    console.log(week);
    console.log(days);
  }
  return (
    <div>
      {week.map(day => (
        <div className="box">
          <p>{moment(day).format("dddd MM/DD/YYYY")}</p>
        </div>
      ))}
      <button className="lastWeek">Last Week</button>
      <button onClick={startOfWeek} className="nextWeek">
        Next Week
      </button>
    </div>
  );
}
export default App;
