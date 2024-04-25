import Image from "next/image";

import { tools } from "../constants/constants";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimation,
  useAnimationFrame,
} from "framer-motion";

// import LazyLoad from "react-lazyload";

import { useEffect, useRef, useState } from "react";

interface Tool {
  title: string;
  image: string;
}

interface ParallaxImageProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxImage({ children, baseVelocity = 100 }: ParallaxImageProps) {
  const baseX = useMotionValue(0);
  const { scrollX } = useScroll();
  const scrollVelocity = useVelocity(scrollX);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  //

  const controls = useAnimation();

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const [scrollerWidth, setScrollerWidth] = useState(0);

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerWidth = scrollerRef.current.getBoundingClientRect().width;
      setScrollerWidth(scrollerWidth);
    }
  }, [children]);

  const x = useTransform(baseX, (v) => `${(v / scrollerWidth) * 100}%`);

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div
        className="scroller"
        ref={scrollerRef}
        style={{ x }}
        animate={controls}
        transition={{ loop: Infinity }}
      >
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Tools() {
  return (
    <div className="sm:container mx-auto group py-14 w-full">
      <ParallaxImage baseVelocity={-80}>
        <div className="flex space-x-10 md:space-x-16 w-fit">
          {tools?.map((tool, index) => {
            const { image, title } = tool;
            return (
              // <LazyLoad key={index} height={200}>
              <Image
                key={index}
                src={image}
                alt={title}
                width={100}
                height={100}
                className="max-w-none cursor-pointer"
              />
              // </LazyLoad>
            );
          })}
        </div>
      </ParallaxImage>
    </div>
  );
}
