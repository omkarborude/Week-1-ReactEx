import "./styles.css";
import { useState } from "react";

function Home() {
  return (
    <div>
      <h2>Home Tab</h2>
      <p>Welcome TO Home Tab. bdiwno mdwmdmdm mdowmdlwm nidmwk.</p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile Tab</h2>
      <p>Welcome TO Profileme Tab. bdiw dwdno Ho mdw dowmdlwm ndwdidmwk.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Tab</h2>
      <p>Welcome TO About Tab. bdidwd wno About mdw dd dowm dwwdlwm nidmwk.</p>
    </div>
  );
}

export default function Tabsswitch() {
  const [tab, settab] = useState(<Home />);
  return (
    <div className="App">
      <button onClick={() => settab(<Home />)}>Home</button>

      <button onClick={() => settab(<About />)}>About</button>

      <button onClick={() => settab(<Profile />)}>Profile</button>

      {tab}
      <p>
        ..............................................................................................
      </p>
    </div>
  );
}
