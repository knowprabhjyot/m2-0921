import React from "react";

export default function Square({ mark, position, handleClick }) {
  return (
    <div
      className={`square mark${mark}`}
      onClick={() => handleClick(position)}
    ></div>
  );
}
