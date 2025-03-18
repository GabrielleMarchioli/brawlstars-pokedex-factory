
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import brawlers from "../utils/brawlersData";
import { Heart, Zap, Star, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import StatsBar from "../components/StatsBar";
import LoadingSpinner from "../components/LoadingSpinner";

const BrawlerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const brawlerId = parseInt(id || "0");
  const brawler = brawlers.find((b) => b.id === brawlerId);
  
  const prevBrawlerId = brawlerId > 1 ? brawlerId - 1 : brawlers.length;
  const nextBrawlerId = brawlerId < brawlers.length ? brawlerId + 1 : 1;
  
  // Simulate loading
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setImageLoaded(false);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
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
  
  if (!brawler) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Brawler Not Found</h2>
          <p className="mb-6 text-brawl-text-secondary">The brawler you're looking for does not exist.</p>
          <Link to="/brawlers" className="btn-primary">
            Browse All Brawlers
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner size={50} />
          </div>
        ) : (
          <>
            <div className="flex items-center mb-8 animate-fade-in">
              <Link to="/brawlers" className="flex items-center text-brawl-text-secondary hover:text-brawl-text transition-colors group">
                <ArrowLeft size={20} className="mr-1 transition-transform group-hover:-translate-x-1" />
                <span>Back to Brawlers</span>
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/5 animate-fade-in">
                <div className="relative aspect-square rounded-2xl overflow-hidden card-glass mb-4">
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                      <LoadingSpinner />
                    </div>
                  )}
                  <img
                    src={brawler.image}
                    alt={brawler.name}
                    className={`w-full h-full object-contain p-4 transition-opacity duration-500 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                
                <div className="flex justify-between">
                  <Link
                    to={`/brawlers/${prevBrawlerId}`}
                    className="flex items-center p-2 text-brawl-text-secondary hover:text-brawl-text transition-colors group"
                  >
                    <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    <span>Previous</span>
                  </Link>
                  
                  <Link
                    to={`/brawlers/${nextBrawlerId}`}
                    className="flex items-center p-2 text-brawl-text-secondary hover:text-brawl-text transition-colors group"
                  >
                    <span>Next</span>
                    <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="w-full md:w-3/5">
                <div className="flex flex-wrap items-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className={`${getRarityColor(brawler.rarity)} text-white text-sm px-3 py-1 rounded-full`}>
                    {brawler.rarity}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  {brawler.name}
                </h1>
                
                <p className="text-brawl-text-secondary mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  {brawler.description}
                </p>
                
                <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <h2 className="text-2xl font-bold mb-4">Stats</h2>
                  
                  <StatsBar
                    label="Power Level"
                    value={brawler.power}
                    maxValue={11}
                    color="#FFD700"
                    icon={<Star className="w-4 h-4 text-yellow-500" />}
                    delay={100}
                  />
                  
                  <StatsBar
                    label="Health"
                    value={brawler.health}
                    maxValue={10000}
                    color="#EF4444"
                    icon={<Heart className="w-4 h-4 text-red-500" />}
                    delay={300}
                  />
                  
                  <StatsBar
                    label="Attack"
                    value={brawler.attack}
                    maxValue={3000}
                    color="#F59E0B"
                    icon={<Zap className="w-4 h-4 text-amber-500" />}
                    delay={500}
                  />
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <h2 className="text-2xl font-bold mb-4">Super Ability</h2>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-2">{brawler.super}</h3>
                    <p className="text-brawl-text-secondary">{brawler.superDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BrawlerDetail;
