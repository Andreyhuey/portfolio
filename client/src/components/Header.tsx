import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-8 md:py-10 lg:py-12">
      <div className="sm:container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href="#">
            <h2 className="text-3xl">O.O</h2>
          </Link>
          {/* button */}
          <Link
            href="https://www.canva.com/design/DAFidbClCEA/J4gIc-1S6VBPARWVS41iRw/edit?utm_content=DAFidbClCEA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            <button className="btn btn-sm">
              <p>Resume</p>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
