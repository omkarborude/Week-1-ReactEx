import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import PasswordMatch from "./PasswordMatch";
import Designertool from "./Designertool";
import Tabsswitch from "./Tabsswitch";
import ShowPassword from "./ShowPassword";
import Darkmode from "./Darkmode";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <PasswordMatch />
    <ShowPassword />
    <Designertool />
    <Tabsswitch />
    <Darkmode />
  </StrictMode>,
  rootElement
);
