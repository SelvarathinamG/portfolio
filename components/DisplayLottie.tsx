import React from "react";
import Lottie from "react-lottie";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div
      onClick={() => null}
      style={{ width: "100%", maxWidth: 780, margin: "0 auto" }}
    >
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
