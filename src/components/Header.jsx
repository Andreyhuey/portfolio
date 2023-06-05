import React from "react";

export default function Header() {
  return (
    <header className="py-8">
      <div className="sm:container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <h2 className="text-3xl">O.O</h2>
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <a
              href="https://www.canva.com/design/DAFidbClCEA/J4gIc-1S6VBPARWVS41iRw/edit?utm_content=DAFidbClCEA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
