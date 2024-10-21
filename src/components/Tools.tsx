import { animate, motion, useMotionValue } from "framer-motion";
import { tools } from "../constants/constants";
import ToolsCard from "./ToolsCard";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

export default function Tools() {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <main className=" py-20 w-full relative h-[200px] overflow-x-hidden">
      <motion.div
        className="absolute left-0 bottom-0 flex gap-4 h-full"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...tools, ...tools].map(({ image, title }, index) => (
          <ToolsCard image={image} title={title} index={index} key={index} />
        ))}
      </motion.div>
    </main>
  );
}
