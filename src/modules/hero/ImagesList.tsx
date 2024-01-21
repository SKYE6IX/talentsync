import React from "react";
import Image from "next/image";
import Image1 from "./assets/image01.png";
import Image2 from "./assets/image02.png";
import Image3 from "./assets/image03.png";
import Image4 from "./assets/image04.png";
import Image5 from "./assets/image05.png";
import Image6 from "./assets/image06.png";

function ImagesList() {
  const images = [
    { url: Image1, name: "image-1", bgColor: "rgba(255, 156, 102, 1)" },
    { url: Image2, name: "image-2", bgColor: "rgba(214, 187, 251, 1)" },
    { url: Image3, name: "image-3", bgColor: "rgba(172, 220, 121, 1)" },
    { url: Image4, name: "image-4", bgColor: "rgba(179, 184, 219, 1)" },
    { url: Image5, name: "image-5", bgColor: "rgba(254, 200, 75, 1)" },
    { url: Image6, name: "image-6", bgColor: "rgba(254, 163, 180, 1)" },
  ];
  return (
    <>
      {images.map((image) => (
        <div
          key={image.name}
          style={{ background: image.bgColor }}
          className="image-wrapper"
        >
          <Image src={image.url} alt={image.name} />
        </div>
      ))}
    </>
  );
}

export default ImagesList;
