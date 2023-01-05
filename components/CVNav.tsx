import Link from "next/link";
import { HiHome } from "react-icons/hi";
import React from "react";

export default function CVNav() {
  return (
    <div className="w-full flex justify-between items-center">
      {/* Close Button */}
      <div className="w-1/2 flex justify-start font-semibold text-white dark:text-gold ">
        <Link href={"/"}>
          <span>
            <button className="flex gap-2 items-center">
              <div className="flex">
                <HiHome size={26} />
              </div>
              <div className="hidden md:flex">Go Back Home</div>
            </button>
          </span>
        </Link>
      </div>

      {/* Download Button */}
      <div className="w-1/2 flex justify-end font-semibold text-white dark:text-gold items-center">
        <button className="cursor-pointer bg-white text-royal px-2 py-2 font-semibold dark:bg-gold dark:text-black hover:bg-black hover:text-white dark:hover:bg-white">
          <Link
            target="_blank"
            rel="noreferrer"
            href={
              "https://drive.google.com/file/d/1V03R4uycF4u5UaVJF0Sp2L4Ny_lFzlgR/view"
            }
          >
            Download CV
          </Link>
        </button>
      </div>
    </div>
  );
}
