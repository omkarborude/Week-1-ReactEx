import "./styles.css";
import { useState } from "react";

export default function Darkmode() {
  const [bgcolor, setbgcolor] = useState("white");
  let [color, setColor] = useState("black");

  function clickhandler() {
    if (bgcolor == "white" && color == "black") {
      setbgcolor("black");
      setColor("white");
    } else {
      setbgcolor("white");
      setColor("black");
    }
  }

  const darkmode = {
    min-height: "100px",
    width: "auto",
    backgroundColor: bgcolor,
    color: color
  };
  return (
    <div className="App">
      <div style={darkmode}>
        <h2>dark mode</h2>
        <button onClick={clickhandler}>Change background</button>
      </div>
      <p>
        ..............................................................................................
      </p>
    </div>
  );
}
