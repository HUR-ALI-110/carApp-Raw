import Image from "next/image";
import React from "react";

const SearchButton = ({ otherClass }) => {
  return (
    <button className={`-ml-3 z-10 ${otherClass}`} type="submit">
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
