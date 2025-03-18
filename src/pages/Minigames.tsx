
import { Link } from "react-router-dom";
import { Brain, Image, ChevronRight } from "lucide-react";

const Minigames = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Minigames</h1>
          <p className="text-brawl-text-secondary max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Test your Brawl Stars knowledge and have fun with these interactive minigames.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <MinigameCard 
            title="Brawl Stars Quiz"
            description="Test your knowledge about Brawl Stars characters, abilities, and game mechanics."
            icon={<Brain size={24} className="text-brawl-purple" />}
            iconBg="bg-purple-100"
            link="/quiz"
            delay={0.2}
          />
          
          <MinigameCard 
            title="Memory Game"
            description="Match pairs of Brawl Stars characters in this fun memory challenge."
            icon={<Image size={24} className="text-brawl-blue" />}
            iconBg="bg-blue-100"
            link="/memory-game"
            delay={0.3}
          />
        </div>
      </div>
    </div>
  );
};

interface MinigameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  link: string;
  delay?: number;
}

const MinigameCard = ({ title, description, icon, iconBg, link, delay = 0 }: MinigameCardProps) => {
  return (
    <div 
      className="card-glass rounded-xl overflow-hidden transition-all hover:translate-y-[-5px] animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconBg}`}>
          {icon}
        </div>
        
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-brawl-text-secondary mb-6">{description}</p>
        
        <Link 
          to={link} 
          className="btn-primary flex items-center justify-center gap-2 w-full"
        >
          <span>Play Now</span>
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Minigames;
