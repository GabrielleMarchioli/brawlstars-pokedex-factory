
import { useState, useEffect } from "react";
import BrawlerCard from "./BrawlerCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Brawler } from "../utils/brawlersData";

interface FeaturedBrawlersProps {
  brawlers: Brawler[];
}

const FeaturedBrawlers = ({ brawlers }: FeaturedBrawlersProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const element = document.getElementById("featured-brawlers");
      
      if (element) {
        const elementPosition = element.offsetTop;
        
        if (scrollPosition > elementPosition + 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const featuredBrawlers = brawlers.slice(0, 4);
  
  return (
    <section 
      id="featured-brawlers" 
      className="py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-brawl-blue text-sm font-medium mb-3">
              Featured Brawlers
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              Meet the Stars
            </h2>
          </div>
          
          <Link 
            to="/brawlers" 
            className="flex items-center text-brawl-purple hover:opacity-90 transition-colors group"
          >
            <span className="mr-1">View All</span>
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredBrawlers.map((brawler, index) => (
            <div 
              key={brawler.id} 
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <BrawlerCard
                id={brawler.id}
                name={brawler.name}
                image={brawler.image}
                rarity={brawler.rarity}
                power={brawler.power}
                health={brawler.health}
                attack={brawler.attack}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrawlers;
