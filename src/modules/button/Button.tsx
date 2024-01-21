import React from "react";
import clsx from "clsx";
import "./button.scss";
type ButtunProps = {
  text: string;
  type: "fill" | "none-fill";
};

function Button({ text, type }: ButtunProps) {
  return (
    <button
      className={clsx(
        "button",
        { fill: type === "fill" },
        { "none-fill": type === "none-fill" }
      )}
    >
      {text}
    </button>
  );
}

export default Button;
