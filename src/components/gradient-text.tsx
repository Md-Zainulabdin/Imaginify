import React from "react";

interface Props {
  text: string;
  size: string;
}

const GradientText: React.FC<Props> = ({ size, text }) => {
  return (
    <div>
      <h1
        className={`font-bold py-3 text-${size}xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-200`}
      >
        {text}
      </h1>
    </div>
  );
};

export default GradientText;
