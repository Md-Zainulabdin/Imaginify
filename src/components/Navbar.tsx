import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { getAuth } from "@/lib/auth";
import Logout from "./ui/logout";

const Navbar = async () => {
  const auth = await getAuth();
  return (
    <nav>
      <div className="nav-wrapper py-6 px-12 border-b flex items-center justify-between">
        <div className="logo">
          <Logo />
        </div>

        <div className="auth-menu">
          {auth?.user ? (
            <Logout />
          ) : (
            <Button asChild className="h-8 group">
              <Link href={"/auth/login"}>
                {" "}
                Login{" "}
                <ArrowRight
                  className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  size={18}
                />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
