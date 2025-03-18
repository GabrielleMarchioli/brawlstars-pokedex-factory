
import React from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface RarityFilterProps {
  selectedRarities: string[];
  onSelect: (rarities: string[]) => void;
  rarities: string[];
}

const RarityFilter = ({ selectedRarities, onSelect, rarities }: RarityFilterProps) => {
  const handleToggleRarity = (rarity: string) => {
    if (selectedRarities.includes(rarity)) {
      onSelect(selectedRarities.filter((r) => r !== rarity));
    } else {
      onSelect([...selectedRarities, rarity]);
    }
  };

  const handleSelectAll = () => {
    onSelect(rarities);
  };

  const handleClearAll = () => {
    onSelect([]);
  };

  const getRarityColor = (rarity: string): string => {
    switch (rarity.toLowerCase()) {
      case "common": return "bg-gray-400";
      case "rare": return "bg-green-500";
      case "super rare": return "bg-blue-500";
      case "epic": return "bg-brawl-purple";
      case "mythic": return "bg-brawl-pink";
      case "legendary": return "bg-brawl-orange";
      case "chromatic": return "bg-gradient-to-r from-brawl-purple to-brawl-orange";
      default: return "bg-gray-400";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          Filter by Rarity
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="flex justify-between px-2 py-1.5">
          <button
            onClick={handleSelectAll}
            className="text-xs text-blue-500 hover:underline"
          >
            Select All
          </button>
          <button
            onClick={handleClearAll}
            className="text-xs text-blue-500 hover:underline"
          >
            Clear All
          </button>
        </div>
        {rarities.map((rarity) => (
          <DropdownMenuCheckboxItem
            key={rarity}
            checked={selectedRarities.includes(rarity)}
            onCheckedChange={() => handleToggleRarity(rarity)}
            className="flex items-center gap-2"
          >
            <div className={`w-3 h-3 rounded-full ${getRarityColor(rarity)}`}></div>
            {rarity}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RarityFilter;
