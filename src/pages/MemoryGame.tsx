
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brawlers from "../utils/brawlersData";
import { Clock, RotateCcw, ArrowLeft } from "lucide-react";

type MemoryCard = {
  id: number;
  brawlerId: number;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const MemoryGame = () => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  
  const totalPairs = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 10;
  
  useEffect(() => {
    initializeGame();
  }, [difficulty]);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (gameStarted && !gameCompleted) {
      interval = window.setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameStarted, gameCompleted]);
  
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setGameCompleted(true);
    }
  }, [matchedPairs, totalPairs]);
  
  useEffect(() => {
    if (flippedCards.length === 2) {
      const firstCard = cards.find((card) => card.id === flippedCards[0]);
      const secondCard = cards.find((card) => card.id === flippedCards[1]);
      
      if (firstCard && secondCard && firstCard.brawlerId === secondCard.brawlerId) {
        // Match found
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true }
              : card
          )
        );
        
        setMatchedPairs((prevPairs) => prevPairs + 1);
        setFlippedCards([]);
      } else {
        // No match, flip cards back after delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              flippedCards.includes(card.id) ? { ...card, isFlipped: false } : card
            )
          );
          
          setFlippedCards([]);
        }, 1000);
      }
      
      setMoves((prevMoves) => prevMoves + 1);
    }
  }, [flippedCards, cards]);
  
  const initializeGame = () => {
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameStarted(false);
    setGameCompleted(false);
    setTimer(0);
    
    // Select random brawlers for the memory game
    const shuffledBrawlers = [...brawlers].sort(() => 0.5 - Math.random());
    const selectedBrawlers = shuffledBrawlers.slice(0, totalPairs);
    
    // Create pairs of cards
    const cardPairs = selectedBrawlers.flatMap((brawler) => [
      {
        id: brawler.id * 2 - 1,
        brawlerId: brawler.id,
        name: brawler.name,
        image: brawler.image,
        isFlipped: false,
        isMatched: false,
      },
      {
        id: brawler.id * 2,
        brawlerId: brawler.id,
        name: brawler.name,
        image: brawler.image,
        isFlipped: false,
        isMatched: false,
      },
    ]);
    
    // Shuffle the cards
    const shuffledCards = cardPairs.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  };
  
  const handleCardClick = (id: number) => {
    // Start game on first click
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    // Ignore click if game is completed or card is already flipped/matched or we already have 2 flipped cards
    const card = cards.find((c) => c.id === id);
    if (
      gameCompleted ||
      !card ||
      card.isFlipped ||
      card.isMatched ||
      flippedCards.length >= 2
    ) {
      return;
    }
    
    // Flip the card
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );
    
    // Add to flipped cards
    setFlippedCards((prevFlipped) => [...prevFlipped, id]);
  };
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  
  const renderDifficultyButton = (level: "easy" | "medium" | "hard", label: string) => (
    <button
      onClick={() => setDifficulty(level)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        difficulty === level
          ? "bg-brawl-purple text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Link to="/minigames" className="flex items-center text-brawl-text-secondary hover:text-brawl-text transition-colors group">
            <ArrowLeft size={20} className="mr-1 transition-transform group-hover:-translate-x-1" />
            <span>Back to Minigames</span>
          </Link>
          
          <button
            onClick={initializeGame}
            className="flex items-center gap-1 text-brawl-purple hover:opacity-90 transition-colors"
          >
            <RotateCcw size={18} />
            <span>Restart</span>
          </button>
        </div>
        
        <div className="text-center mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Memory Game</h1>
          <p className="text-brawl-text-secondary max-w-xl mx-auto mb-6">
            Match pairs of Brawl Stars characters to win. Flip cards by clicking on them.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {renderDifficultyButton("easy", "Easy (6 pairs)")}
            {renderDifficultyButton("medium", "Medium (8 pairs)")}
            {renderDifficultyButton("hard", "Hard (10 pairs)")}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-brawl-purple" />
              <span>Time: {formatTime(timer)}</span>
            </div>
            <div>Moves: {moves}</div>
            <div>
              Pairs: {matchedPairs}/{totalPairs}
            </div>
          </div>
        </div>
        
        {gameCompleted ? (
          <div className="card-glass rounded-xl p-8 text-center animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg mb-6">
              You've completed the game in {formatTime(timer)} with {moves} moves!
            </p>
            <button
              onClick={initializeGame}
              className="btn-primary mx-auto"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div 
            className={`grid gap-4 mb-8 animate-fade-in ${
              difficulty === "easy"
                ? "grid-cols-3 md:grid-cols-4"
                : difficulty === "medium"
                ? "grid-cols-4 md:grid-cols-4"
                : "grid-cols-4 md:grid-cols-5"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`aspect-square memory-card ${
                  card.isFlipped || card.isMatched ? "flipped" : ""
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="memory-card-inner">
                  <div className="memory-card-back">
                    <div className="w-12 h-12 text-white flex items-center justify-center text-xl font-bold">
                      ?
                    </div>
                  </div>
                  <div className="memory-card-front p-2">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
