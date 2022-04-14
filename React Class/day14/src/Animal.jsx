import React from "react";
import { useParams } from "react-router-dom";

export default function Animal() {
  // Try to capture the dynamic route, using a react hook
  const { type } = useParams();

  const getImage = (path, alt) => {
    return <img src={path} alt={alt} />;
  };

  return (
    <div>
      {type === "dog"
        ? getImage("/dog.jpg", "Dog")
        : getImage("/cat.jpg", "Cat")}
    </div>
  );
}

