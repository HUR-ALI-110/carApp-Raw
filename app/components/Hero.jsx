import React from "react";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find a Book, or rent a car - quickly and super easy
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our Effortless booking process.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-6 py-3 text-center inline-flex items-center me-2"
          >
            <svg
              className="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Explore Cars
          </button>
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            fill
            className="object-contain"
            alt="hero image"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
