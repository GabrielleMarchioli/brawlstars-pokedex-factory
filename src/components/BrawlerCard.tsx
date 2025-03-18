
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Zap, Star } from "lucide-react";

interface BrawlerCardProps {
  id: number;
  name: string;
  image: string;
  rarity: string;
  power?: number;
  health?: number;
  attack?: number;
  isCompact?: boolean;
}

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
      return "bg-gray-400";
  }
};

const BrawlerCard = ({
  id,
  name,
  image,
  rarity,
  power = 0,
  health = 0,
  attack = 0,
  isCompact = false,
}: BrawlerCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const rarityColorClass = getRarityColor(rarity);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  if (isCompact) {
    return (
      <Link
        to={`/brawlers/${id}`}
        className="block w-full card-glass rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
      >
        <div className="aspect-square relative overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          )}
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-sm text-gray-500">Image not available</span>
            </div>
          )}
          <div
            className={`absolute top-3 right-3 ${rarityColorClass} text-white text-xs px-2 py-1 rounded-full`}
          >
            {rarity}
          </div>
        </div>
        <div className="p-3 text-center">
          <h3 className="font-medium text-lg truncate">{name}</h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/brawlers/${id}`}
      className="block w-full card-glass rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
    >
      <div className="aspect-square relative overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          </div>
        )}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
        <div
          className={`absolute top-4 right-4 ${rarityColorClass} text-white text-xs px-2 py-1 rounded-full`}
        >
          {rarity}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-xl mb-3">{name}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            <span className="text-brawl-text-secondary mr-2">Power:</span>
            <span className="font-medium">{power}/11</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-brawl-text-secondary mr-2">Health:</span>
            <div className="w-full max-w-[100px] stats-bar">
              <div
                className="stats-bar-fill bg-red-500"
                style={{ width: `${(health / 10000) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center text-sm">
            <Zap className="w-4 h-4 mr-2 text-amber-500" />
            <span className="text-brawl-text-secondary mr-2">Attack:</span>
            <div className="w-full max-w-[100px] stats-bar">
              <div
                className="stats-bar-fill bg-amber-500"
                style={{ width: `${(attack / 3000) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrawlerCard;
