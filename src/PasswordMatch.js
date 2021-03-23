import "./styles.css";
import { useState } from "react";

export default function PasswordMatch() {
  const [firstin, setfirsrin] = useState("");
  const [secin, setsecin] = useState("");
  const [show, setshow] = useState("");

  function clickhandler() {
    if (firstin === secin) {
      setshow("Good! password match!");
    } else if (firstin !== secin) {
      setshow("Enter same Password  !");
    }
  }

  return (
    <div className="App">
      <h2>Password Match</h2>
      <div>
        <input
          type="password"
          onChange={(e) => {
            setfirsrin(e.target.value);
          }}
        ></input>
      </div>

      <br />

      <div>
        <input
          type="password"
          onChange={(e) => {
            setsecin(e.target.value);
          }}
        ></input>
      </div>

      <br />

      <button onClick={clickhandler}>check</button>
      <br />
      {show}

      <p>
        ...............................................................................................
      </p>
    </div>
  );
}
