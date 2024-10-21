import { animate, motion, useMotionValue } from "framer-motion";
import { tools } from "../constants/constants";
import ToolsCard from "./ToolsCard";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function Tools() {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 35,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className=" py-14 w-full relative h-[250px] overflow-x-hidden">
      <motion.div
        className="absolute left-0 bottom-0 flex gap-4 h-full"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...tools, ...tools].map(({ image, title }, index) => {
          return <ToolsCard image={image} title={title} index={index} />;
        })}
      </motion.div>
    </div>
  );
}
