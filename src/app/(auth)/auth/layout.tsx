import React from "react";

import Link from "next/link";
import { redirect } from "next/navigation";

import { getAuth } from "@/lib/auth";
import Logo from "@/components/Logo";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = async ({ children }) => {
  const auth = await getAuth();

  if (auth?.user) {
    redirect("/");
  }

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
