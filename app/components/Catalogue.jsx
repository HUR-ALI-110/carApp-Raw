import React from "react";
import SearchBar from "./SearchBar";
import CustomFilter from "./CustomFilter";
import { fuels, yearsOfProduction } from "@/constant";

const Catalogue = () => {
  return (
    <div className="home__filters">
      <SearchBar />
      <div className="home__filter-container">
        <CustomFilter title="fuel" options={fuels} />
        <CustomFilter title="year" options={yearsOfProduction} />
      </div>
    </div>
  );
};

export default Catalogue;
