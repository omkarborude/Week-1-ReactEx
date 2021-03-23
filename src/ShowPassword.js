import "./styles.css";
import { useState } from "react";

export default function ShowPassword() {
  const [type, settype] = useState("password");
  const [show, setshow] = useState("show");
  return (
    <div className="App">
      <h2>Show Password</h2>
      <input type={type} />
      <button
        onClick={() => {
          if (type === "password") {
            settype("text");
            setshow("hide");
          } else {
            settype("password");
            setshow("Show");
          }
        }}
      >
        {show}
      </button>

      <p>
        ...............................................................................................
      </p>
    </div>
  );
}
