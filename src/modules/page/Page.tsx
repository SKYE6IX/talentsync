import React from "react";
import Headline from "../headline/Headline";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <div className="background-image"></div>
      <Headline />
    </div>
  );
}
