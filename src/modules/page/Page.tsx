import React from "react";
import Headline from "../headline/Headline";
import SocialProof from "../social-proof/SocialProof";
import Features from "../features/Features";
import Testimonies from "../testimonies/Testimonies";
import Faq from "../faq/Faq";
import BottomBlock from "../bottom-block/BottomBlock";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <div className="background-image"></div>
      <Headline />
      <SocialProof />
      <Features />
      <Testimonies />
      <Faq />
      <BottomBlock />
    </div>
  );
}
