"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ToolsCardProps {
  image: string;
  index: number;
  title: string;
}

export default function ToolsCard({ image, index, title }: ToolsCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className="relative overflow-hidden h-[200px] w-[200px] flex justify-center items-center "
      style={{ flexShrink: 0 }}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex justify-center items-center"
          >
            <div className="absolute pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 p-2 flex items-center gap-[0.5ch] rounded-xl"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="text-black">{title}</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        key={index}
        src={image}
        alt={title}
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 h-full"
      />
    </motion.div>
  );
}
