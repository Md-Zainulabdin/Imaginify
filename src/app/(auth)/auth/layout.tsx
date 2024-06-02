import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <Link href={"/"} className="logo flex items-center justify-center py-20">
        <Logo />
      </Link>
      <div className="w-full flex items-center justify-center mt-16">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
