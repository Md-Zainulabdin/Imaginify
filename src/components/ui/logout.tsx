"use client";
import { signOut } from "next-auth/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";

const Logout = () => {
  return (
    <Button className="h-8 group" onClick={() => signOut()}>
      Log out
      <ArrowRight
        className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        size={18}
      />
    </Button>
  );
};

export default Logout;
