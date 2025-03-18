
import { useState, useEffect, useRef } from "react";
import BrawlerCard from "./BrawlerCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Brawler } from "../utils/brawlersData";

interface FeaturedBrawlersProps {
  brawlers: Brawler[];
}

const FeaturedBrawlers = ({ brawlers }: FeaturedBrawlersProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const featuredBrawlers = brawlers.slice(0, 4);
  
  return (
    <section 
      ref={sectionRef}
      id="featured-brawlers" 
      className="py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
          <div>
            <div className={`inline-block px-3 py-1 rounded-full bg-blue-100 text-brawl-blue text-sm font-medium mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Featured Brawlers
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              Meet the Stars
            </h2>
          </div>
          
          <Link 
            to="/brawlers" 
            className={`flex items-center text-brawl-purple hover:opacity-90 transition-all duration-700 group ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
