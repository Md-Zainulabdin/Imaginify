import React from "react";
import NextHead from "next/head";

interface Props {
  children: React.ReactNode;
  description: string;
}

const Head: React.FC<Props> = ({ children, description }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      {children}
      <meta name="description" content={description || ""} />
    </NextHead>
  );
};

export default Head;
