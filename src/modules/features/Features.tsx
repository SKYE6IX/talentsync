import React from "react";
import Image from "next/image";
import featureImage from "./assets/features-image.png";
import VideoRecoder from "../icons/VideoRecoder";
import Recording from "../icons/Recording";
import Calender from "../icons/Calender";
import LockUnlocked from "../icons/LockUnlocked";
import HandDrawArrow from "./assets/HandDrawArrow";
import "./features.scss";

function Features() {
  return (
    <section className="feature-block">
      <div className="hand-draw-arrow">
        <HandDrawArrow />
      </div>
      <div className="inner-container">
        <div className="feature-block__header">
          <h4>The ClearLink Advantage</h4>
          <h2>Why choose ClearLink?</h2>
          <p>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
        <div className="feature-block__body">
          <div className="feature-block__feature-items">
            <div className="feature-block__feature">
              <div className="feature-icon-wrapper">
                <VideoRecoder />
              </div>
              <h3>Crystal-clear HD video</h3>
              <p>
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>
            <div className="feature-block__feature">
              <div className="feature-icon-wrapper">
                <Recording />
              </div>
              <h3>Noise-canceling audio</h3>
              <p>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </div>
            <div className="feature-block__feature">
              <div className="feature-icon-wrapper">
                <Calender />
              </div>
              <h3>Scheduling made easy</h3>
              <p>
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </p>
            </div>
            <div className="feature-block__feature">
              <div className="feature-icon-wrapper">
                <LockUnlocked />
              </div>
              <h3>Bank-grade security</h3>
              <p>
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </div>
          </div>
          <div className="feature-block__image">
            <Image
              src={featureImage}
              alt="image-fill-with-people"
              width={544}
              height={527}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
