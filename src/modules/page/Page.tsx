import React from "react";
import FirstScreen from "../first-screen-seection/FirstScreen";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <div className="background-image"></div>
      <FirstScreen />
    </div>
  );
}
