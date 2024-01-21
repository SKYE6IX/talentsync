import React from "react";
import Image from "next/image";
import RobotHead from "../icons/RobotHead";
import Avatar1 from "./assets/avatar01.png";
import Avatar2 from "./assets/avatar02.png";
import Avatar3 from "./assets/avatar03.png";
import Avatar4 from "./assets/avatar04.png";
import Avatar5 from "./assets/avatar05.png";
import ImagesList from "./ImagesList";
import FeatureList from "./FeatureList";
import Start from "../icons/Start";
import "./hero.scss";

function Hero() {
  const avatars = [
    { url: Avatar1, name: "avatar-1" },
    { url: Avatar2, name: "avatar-2" },
    { url: Avatar3, name: "avatar-3" },
    { url: Avatar4, name: "avatar-4" },
    { url: Avatar5, name: "avatar-5" },
  ];
  return (
    <div className="hero">
      <div className="hero__text-container">
        <h2>
          Uniting the world,
          <br />
          one video call at a time
        </h2>
        <p>
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="hero__button-wrapper">
          <button>Start your free trial</button>
          <p>
            <RobotHead /> Discover AI assistant
          </p>
        </div>
        <div className="hero__reviews">
          <div className="hero__reviews-avatar-wrapper">
            {avatars.map((avatar) => (
              <div key={avatar.name} className="hero__reviews-avatar">
                <Image src={avatar.url} alt={avatar.name} />
              </div>
            ))}
          </div>
          <div className="hero__reviews-rating-wrapper">
            <div className="hero__reviews-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <Start key={i} />
              ))}
              <span>5.0</span>
            </div>
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </div>
      <div className="hero__images-container">
        <div className="hero__image-lists">
          <ImagesList />
        </div>
        <div className="hero__feature-lists">
          <FeatureList />
        </div>
      </div>
    </div>
  );
}

export default Hero;
