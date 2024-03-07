"use client";
import { calculateCarRent } from "@/constant";
import Image from "next/image";
import React, { useState } from "react";
import CarDetails from "./CarDetails";
import { generateCarImageUrl } from "@/utils";

const CarCard = ({ car }) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="car-card group">
      <div className="car-car-card__content"> </div>
      <h2 className="car-card__content-title">
        
        {car.make} {car.model}
      </h2>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold"> $ </span>
        {carRent}
        <span className="self-end text-[14px] font-medium"> /day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car, "25")}
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering Wheel"
            />
            <p className="text-[14px]">
              
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            
            <Image src="/tire.svg" width={20} height={20} alt="tire Wheel" />
            <p className="text-[14px]"> {car.drive.toUpperCase()} </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            
            <Image src="/gas.svg" width={20} height={20} alt="Steering Wheel" />
            <p className="text-[14px]">
              
              {car.city_mpg}
              MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <button
            onClick={handleClick}
            type="button"
            className="w-full py-[16px] text-[14px] leading-[17px] font-bold text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full  px-6 text-center inline-flex items-center me-2"
          >
            <div className="relative w-6 h-6 mx-4">
              <Image
                src="/right-arrow.svg"
                fill
                className="object-contain"
                alt="rightarrow"
              />
            </div>
            View More
          </button>
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
