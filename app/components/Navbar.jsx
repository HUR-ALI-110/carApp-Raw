import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full absolute z-10">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div>
          <button
            type="button"
            className="text-blue-700 bg-white mt-5 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
