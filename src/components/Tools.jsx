import Image from "next/image";

import { tools } from "../constants/constants";

export default function Tools() {
  return (
    <div className="sm:container mx-auto group py-14">
      <div className="flex space-x-10 md:space-x-16 animate-loop-scroll group-hover:paused">
        {tools &&
          tools.map((tool, index) => {
            const { image, title } = tool;
            return (
              <>
                <Image
                  key={index}
                  src={image}
                  alt={title}
                  weight={50}
                  height={75}
                  className="max-w-none cursor-pointer"
                />
              </>
            );
          })}
      </div>
    </div>
  );
}
