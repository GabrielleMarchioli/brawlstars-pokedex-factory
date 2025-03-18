
import { useState, useEffect } from "react";
import BrawlerCard from "../components/BrawlerCard";
import brawlers from "../utils/brawlersData";
import { Search, Filter } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

const Brawlers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredBrawlers, setFilteredBrawlers] = useState(brawlers);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = brawlers.filter((brawler) => {
      const matchesSearch = brawler.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRarity =
        selectedRarity === "All" ||
        brawler.rarity.toLowerCase() === selectedRarity.toLowerCase();
      return matchesSearch && matchesRarity;
    });

    setFilteredBrawlers(filtered);
  }, [searchTerm, selectedRarity]);

  const rarities = ["All", "Common", "Rare", "Super Rare", "Epic", "Mythic", "Legendary", "Chromatic"];

  const getRarityColor = (rarity: string): string => {
    switch (rarity.toLowerCase()) {
      case "common":
        return "bg-gray-400";
      case "rare":
        return "bg-green-500";
      case "super rare":
        return "bg-blue-500";
      case "epic":
        return "bg-brawl-purple";
      case "mythic":
        return "bg-brawl-pink";
      case "legendary":
        return "bg-brawl-orange";
      case "chromatic":
        return "bg-gradient-to-r from-brawl-purple to-brawl-orange";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Brawlers</h1>
          <p className="text-brawl-text-secondary max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore all the brawlers in the Brawl Stars universe. Click on a brawler to see detailed information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search brawlers..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:border-brawl-purple focus:ring-0 focus:outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {rarities.map((rarity) => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedRarity === rarity
                    ? `text-white ${rarity === "All" ? "bg-gray-800" : getRarityColor(rarity)}`
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {rarity}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner size={50} />
          </div>
        ) : filteredBrawlers.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium mb-2">No brawlers found</h3>
            <p className="text-brawl-text-secondary">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredBrawlers.map((brawler, index) => (
              <div
                key={brawler.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <BrawlerCard
                  id={brawler.id}
                  name={brawler.name}
                  image={brawler.image}
                  rarity={brawler.rarity}
                  isCompact={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Brawlers;
