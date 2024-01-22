import React from "react";
import Image from "next/image";
import Shopify from "../icons/Shopify";
import Start from "../icons/Start";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import avatar from "./asssets/avatar.png";
import image1 from "./asssets/image01.jpeg";
import image2 from "./asssets/image02.jpeg";
import image3 from "./asssets/image03.jpeg";
import image4 from "./asssets/image04.jpeg";
import image5 from "./asssets/image05.jpeg";
import "./testimonies.scss";

function Testimonies() {
  const images = [
    { url: image1, name: "image01" },
    { url: image2, name: "image02" },
    { url: image3, name: "image03" },
    { url: image4, name: "image04" },
    { url: image5, name: "image05" },
  ];
  return (
    <section className="testimonies-block">
      <div className="testimonies-block__inner-container">
        <div className="testimonies-block__text-wrapper">
          <div className="testimonies-block__logo">
            <Shopify />
          </div>
          <div className="testimonies-block__rating">
            {Array.from({ length: 5 }, (_, i) => (
              <Start key={i} />
            ))}
          </div>
          <h3 className="testimonies-block__text">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h3>
          <div className="testimonies-block__profile-wrapper">
            <div className="testimonies-block__profile-avatar">
              <Image src={avatar} alt="avatar" width={56} height={56} />
            </div>
            <div className="testimonies-block__profile-name">
              <h5>Sarah Thompson</h5>
              <p>Project Manager, Shopify</p>
            </div>
            <div className="testimonies-block__arrows">
              <div className="testimonies-block__arrows-wrapper">
                <ArrowLeft />
              </div>
              <div className="testimonies-block__arrows-wrapper">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies-block__images-container">
          {images.map((img) => (
            <div key={img.name} className="testimonies-block__image-wrapper">
              <Image src={img.url} alt={img.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonies;
