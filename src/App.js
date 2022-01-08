import React, { useState } from "react";
import "./App.css";

function App() {
  let hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let d = new Date();
  const [date, setDate] = useState(d);
  let hour = d.getHours() % 12;

  setTimeout(() => {
    d = new Date();
    setDate(d);
    // let hour = d.getHours() % 12;
    // hours = [];
    // for (let i = 1; i <= hour; i++) {
    //   hours = [...hours, i];
    // }
  }, 30000);

  return (
    <div className="App">
      <div className="container mt-5 mb-5">
        <h2>
          {date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h2>
        <div className="row">
          {hours.map((d, i) => {
            return (
              <div className="col-sm-2 mt-4 " key={i}>
                <div
                  className={
                    d < date.getHours()
                      ? "pastHr"
                      : d === date.getHours()
                      ? "activeHr"
                      : "content"
                  }
                >
                  <p className="inlineTime">{d % 12 === 0 ? 12 : d % 12}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
