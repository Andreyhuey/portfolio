"use client";

import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  function sendEmail(e: any) {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_yhzzl9v",
        "template_w1hornj",
        form.current,
        "W7DratuiH2eK_miQV",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        },
      );
    setTimeout(function () {
      e.target.reset();
    }, 4000);
  }
  return (
    <div className="section" id="contact">
      <ToastContainer />
      <div className="sm:container mx-auto">
        {/* for phones and tabs */}
        <div className="flex flex-col lg:flex-row gap-x-10 pt-12 lg:items-start">
          <div className="lg:hidden flex-1 flex justify-center mb-10 items-center">
            <div>
              <h2 className="h1 leading-tight text-accent text-center">
                Get in touch.
              </h2>
              <h2 className="text-[35px] lg:text-[90px] leading-none mb-12 text-center">
                Let&apos;s work together!
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="hidden flex-1 lg:flex justify-start items-center">
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
          <div className="flex flex-col justify-center items-center">
            <form
              className="max-w-lg lg:w-auto border border-slate-500 gap-y-6 pb-24 rounded-2xl p-6"
              onSubmit={sendEmail}
              ref={form}
            >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                name="email_id"
                placeholder="Your email"
                required
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
                name="message"
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
