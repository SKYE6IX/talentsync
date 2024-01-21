import React from "react";
import Headline from "../headline/Headline";
import SocialProof from "../social-proof/SocialProof";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <div className="background-image"></div>
      <Headline />
      <SocialProof />
    </div>
  );
}
