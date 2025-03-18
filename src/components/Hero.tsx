import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import boImage from "../img/elprimo.png"; // Importação da imagem

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.classList.add("animate-fade-in");
    }
    if (subtitle) {
      subtitle.style.animationDelay = "0.2s";
      subtitle.classList.add("animate-fade-in");
    }
    if (cta) {
      cta.style.animationDelay = "0.4s";
      cta.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute right-1/3 bottom-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-brawl-purple/10 text-brawl-purple text-sm font-medium mb-6">
            The Ultimate Brawl Stars Encyclopedia
          </div>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Discover the world of <span className="text-brawl-purple">Brawl Stars</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-brawl-text-secondary mb-8 max-w-lg mx-auto md:mx-0"
          >
            Explore all brawlers, their stats, and abilities. Test your knowledge with fun minigames and become a Brawl Stars master.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/brawlers" className="btn-primary">
              Explore Brawlers
            </Link>
            <Link to="/minigames" className="btn-secondary">
              Play Minigames
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <img 
            src={boImage} // Imagem estática importada, sem animações
            alt="Brawl Stars Hero" 
            className="w-full max-w-md object-contain z-10"
          />
          
          <div className="absolute bottom-0 w-full max-w-md h-20 bg-gradient-to-t from-white/40 to-transparent z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;