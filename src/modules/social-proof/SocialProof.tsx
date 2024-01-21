import React from "react";
import Shopify from "../icons/Shopify";
import Coinbase from "../icons/Coinbase";
import Dropbox from "../icons/Dropbox";
import Intercom from "../icons/Intercom";
import Marvel from "../icons/Marvel";
import Automattic from "../icons/Automattic";
import "./social-proof.scss";
function SocialProof() {
  const socialIcons = [
    { icon: Shopify, name: "shopify" },
    { icon: Coinbase, name: "coinbase" },
    { icon: Dropbox, name: "dropbox" },
    { icon: Intercom, name: "intercom" },
    { icon: Marvel, name: "marvel" },
    { icon: Automattic, name: "automattic" },
  ];
  return (
    <div className="social-proof">
      <div className="inner-wrapper">
        <h3 className="social-proof__title">
          Join 1,500+ companies already video conferencing the ClearLink way
        </h3>
        <div className="social-proof__icons">
          {socialIcons.map((icon) => {
            const Icon = icon.icon;
            return <Icon key={icon.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
