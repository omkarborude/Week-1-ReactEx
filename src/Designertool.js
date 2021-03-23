import "./styles.css";
import { useState } from "react";

export default function Designertool() {
  // change bg color to red
  const [redcol, setredcol] = useState("");

  // text size change
  const [fontsize, setfontsize] = useState(10);

  const cahngetextsize = {
    textAlign: "center",
    fontSize: fontsize,
    backgroundColor: redcol
  };
  return (
    <div className="App">
      <h1>change style</h1>

      <p style={cahngetextsize}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      </p>

      {/* change bg color to red */}
      <button
        onClick={() => {
          setredcol("red");
        }}
      >
        Change bg color
      </button>

      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setfontsize(fontsize - 2);
          }}
        >
          -
        </button>
        {fontsize} PX
        <button
          onClick={() => {
            setfontsize(fontsize + 2);
          }}
        >
          +
        </button>
      </div>
      <p>
        ...............................................................................................
      </p>
    </div>
  );
}
