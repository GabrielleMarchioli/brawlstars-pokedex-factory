
import React from "react";
import SearchBar from "./SearchBar";
import RarityFilter from "./RarityFilter";

interface FilterControlsProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedRarities: string[];
  setSelectedRarities: (rarities: string[]) => void;
  rarities: string[];
}

const FilterControls = ({
  searchTerm,
  setSearchTerm,
  selectedRarities,
  setSelectedRarities,
  rarities,
}: FilterControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search brawlers..."
        />
      </div>
      <div>
        <RarityFilter
          selectedRarities={selectedRarities}
          onSelect={setSelectedRarities}
          rarities={rarities}
        />
      </div>
    </div>
  );
};

export default FilterControls;
