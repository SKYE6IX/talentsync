import React from "react";
import Microphone from "../icons/Microphone";
import VideoRecoder from "../icons/VideoRecoder";
import Monitor from "../icons/Monitor";
import FaceSmiley from "../icons/FaceSmiley";
import MessageText from "../icons/MessageText";
import Setting from "../icons/Setting";

function FeatureList() {
  const featureList = [
    { icon: Microphone, name: "microphone" },
    { icon: VideoRecoder, name: "video-recoder" },
    { icon: Monitor, name: "monitor" },
    { icon: FaceSmiley, name: "face-smiley" },
    { icon: MessageText, name: "message-text" },
    { icon: Setting, name: "stting" },
  ];
  return (
    <>
      {featureList.map((list) => {
        const Icon = list.icon;
        return (
          <div key={list.name} className="feature-wrapper">
            <Icon />
          </div>
        );
      })}
    </>
  );
}

export default FeatureList;
