
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import FeaturedBrawlers from "../components/FeaturedBrawlers";
import brawlers from "../utils/brawlersData";
import { Link } from "react-router-dom";
import { ScanLine, Brain, Gamepad } from "lucide-react";

 
const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <Hero />
      
      <FeaturedBrawlers brawlers={brawlers} />
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-brawl-pink text-sm font-medium mb-3">
              Features
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Everything You Need
            </h2>
            <p className="text-brawl-text-secondary max-w-xl mx-auto mt-4">
              Explore all the features our Brawl Stars encyclopedia has to offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`bg-white rounded-xl p-6 shadow-card border border-gray-100 transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-brawl-text-secondary mb-4">{feature.description}</p>
                <Link 
                  to={feature.link} 
                  className="text-brawl-purple font-medium hover:opacity-90 transition-colors"
                >
                  Explore {feature.title} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become a Brawl Stars Master?
          </h2>
          <p className="text-lg text-brawl-text-secondary mb-8 max-w-2xl mx-auto">
            Explore all brawlers, test your knowledge with our fun minigames, and become the ultimate Brawl Stars expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/brawlers" className="btn-primary">
              Explore All Brawlers
            </Link>
            <Link to="/minigames" className="btn-secondary">
              Play Minigames
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Brawler Database",
    description: "Comprehensive information about all brawlers, including their stats, attacks, and special abilities.",
    icon: <ScanLine size={24} className="text-blue-500" />,
    iconBg: "bg-blue-50",
    link: "/brawlers"
  },
  {
    title: "Quiz Game",
    description: "Test your Brawl Stars knowledge with our interactive quiz featuring questions about brawlers and game mechanics.",
    icon: <Brain size={24} className="text-purple-500" />,
    iconBg: "bg-purple-50",
    link: "/minigames"
  },
  {
    title: "Memory Game",
    description: "Challenge your memory with our Brawl Stars themed memory card game featuring your favorite brawlers.",
    icon: <Gamepad size={24} className="text-pink-500" />,
    iconBg: "bg-pink-50",
    link: "/minigames"
  }
];

export default Index;
