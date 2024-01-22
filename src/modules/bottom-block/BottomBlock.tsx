import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import CheckIcon from "../icons/CheckIcon";
import image1 from "./assets/image01.png";
import "./bottom-block.scss";

function BottomBlock() {
  return (
    <section className="bottom-block">
      <div className="bottom-block__header">
        <h3>Ready to clear the path to perfect communication?</h3>
        <div className="bottom-block__title-list">
          <h5>
            <CheckIcon />
            30 days free trial
          </h5>
          <h5>
            <CheckIcon />
            Cancel at any time
          </h5>
          <h5>
            <CheckIcon />
            Access to all features
          </h5>
          <h5>
            <CheckIcon />
            Peronalized onboarding
          </h5>
        </div>
        <div className="bottom-block__buttons">
          <Button type="none-fill" text="Talk to sales" />
          <Button type="fill" text="Start your free trial" />
        </div>
      </div>
      <div className="bottom-block__image">
        <div className="bottom-block__image-wrapper">
          <Image
            src={image1}
            alt="screen describe  a confrence call"
            width={1024}
            height={682}
          />
        </div>
      </div>
    </section>
  );
}

export default BottomBlock;
