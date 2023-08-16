import React from "react";

export default function Contact() {
  return (
    <div className="section" id="contact">
      <div className="sm:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* text */}
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let&apos;s work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <div className="flex-1 border border-slate-500 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <form>
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                placeholder="Your email"
                required
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                type="text"
                placeholder="Your message"
                required
              ></textarea>
              <button className="btn btn-lg" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
