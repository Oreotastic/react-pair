import React, { useState } from "react";
import moment from "moment";
import "./App.css";

function App() {
  let now = moment().startOf("week");
  let week = [now];

  let i = 0;
  while (week.length < 7) {
    week.push(moment(now).add("day", ++i));
  }
  console.log(now);
  console.log(week);

  function startOfWeek() {
    now = week[0].endOf("week");
    console.log(now);
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
