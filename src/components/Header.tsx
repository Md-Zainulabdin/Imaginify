import React from "react";

interface Props {
  text: string;
  size: string;
}

const Header: React.FC<Props> = ({ size, text }) => {
  return (
    <div className="inline">
      <h1 className={`font-cal text-${size}xl font-bold`}>{text}</h1>
    </div>
  );
};

export default Header;
