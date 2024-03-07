"use client";
import { fuels, yearsOfProduction } from "@/constant";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const CustomFilter = ({ title,options }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(title, e.value.toLowerCase());

    const newpathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newpathName,{scroll: false});
  };

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => {setSelected(e);handleUpdateParams(e)}}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span> {selected.title} </span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="chevron"
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((e) => (
                <Listbox.Option
                  key={e.title}
                  value={e}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {" "}
                      {e.title}{" "}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
