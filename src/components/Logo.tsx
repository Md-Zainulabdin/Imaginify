"use client";
import React from "react";
import { motion } from "framer-motion";
import { reveal } from "@/lib/animation";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="show"
        className="logo flex items-center gap-4"
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Image src={"/logo.png"} alt="Logo" width={35} height={35} />
        </motion.div>
        <h2 className="font-cal text-2xl font-bold">Imaginify</h2>
      </motion.div>
    </div>
  );
};

export default Logo;
