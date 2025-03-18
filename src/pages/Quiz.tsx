
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import brawlers from "../utils/brawlersData";
import { toast } from "sonner";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  image?: string;
}

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedOption: string | null;
  answered: boolean;
  completed: boolean;
  showResults: boolean;
  questions: Question[];
  userAnswers: (string | null)[];
}

const Quiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedOption: null,
    answered: false,
    completed: false,
    showResults: false,
    questions: [],
    userAnswers: [],
  });
  
  useEffect(() => {
    // Initialize quiz with questions
    const questions = generateQuestions();
    setState((prev) => ({
      ...prev,
      questions,
      userAnswers: Array(questions.length).fill(null),
    }));
  }, []);
  
  const generateQuestions = (): Question[] => {
    const shuffledBrawlers = [...brawlers].sort(() => 0.5 - Math.random());
    
    const questions: Question[] = [
      // Brawler name questions
      {
        id: 1,
        text: "Which brawler is shown in the image?",
        options: shuffleArray([
          shuffledBrawlers[0].name,
          shuffledBrawlers[1].name,
          shuffledBrawlers[2].name,
          shuffledBrawlers[3].name,
        ]),
        correctAnswer: shuffledBrawlers[0].name,
        image: shuffledBrawlers[0].image,
      },
      
      // Super ability questions
      {
        id: 2,
        text: `What is the super ability of ${shuffledBrawlers[4].name}?`,
        options: shuffleArray([
          shuffledBrawlers[4].super,
          shuffledBrawlers[5].super,
          shuffledBrawlers[6].super,
          shuffledBrawlers[7].super,
        ]),
        correctAnswer: shuffledBrawlers[4].super,
        image: shuffledBrawlers[4].image,
      },
      
      // Health ranking question
      {
        id: 3,
        text: "Which of these brawlers has the highest health?",
        options: [
          shuffledBrawlers[8].name,
          shuffledBrawlers[9].name,
          shuffledBrawlers[10].name,
          shuffledBrawlers[11].name,
        ],
        correctAnswer: [shuffledBrawlers[8], shuffledBrawlers[9], shuffledBrawlers[10], shuffledBrawlers[11]]
          .sort((a, b) => b.health - a.health)[0].name,
      },
      
      // Attack ranking question
      {
        id: 4,
        text: "Which of these brawlers has the highest attack damage?",
        options: [
          shuffledBrawlers[0].name,
          shuffledBrawlers[1].name,
          shuffledBrawlers[2].name,
          shuffledBrawlers[3].name,
        ],
        correctAnswer: [shuffledBrawlers[0], shuffledBrawlers[1], shuffledBrawlers[2], shuffledBrawlers[3]]
          .sort((a, b) => b.attack - a.attack)[0].name,
      },
      
      // Rarity question
      {
        id: 5,
        text: "Which rarity is the brawler shown in the image?",
        options: shuffleArray([
          "Common",
          "Rare",
          "Epic",
          "Legendary",
        ]),
        correctAnswer: shuffledBrawlers[5].rarity,
        image: shuffledBrawlers[5].image,
      },
      
      // Super description question
      {
        id: 6,
        text: `Which super ability is described as: "${shuffledBrawlers[6].superDescription}"`,
        options: shuffleArray([
          shuffledBrawlers[6].super,
          shuffledBrawlers[7].super,
          shuffledBrawlers[8].super,
          shuffledBrawlers[9].super,
        ]),
        correctAnswer: shuffledBrawlers[6].super,
      },
      
      // Brawler description question
      {
        id: 7,
        text: `Which brawler is described as: "${shuffledBrawlers[10].description}"`,
        options: shuffleArray([
          shuffledBrawlers[10].name,
          shuffledBrawlers[0].name,
          shuffledBrawlers[1].name,
          shuffledBrawlers[2].name,
        ]),
        correctAnswer: shuffledBrawlers[10].name,
      },
      
      // Power level question
      {
        id: 8,
        text: "What is the maximum power level a brawler can reach?",
        options: shuffleArray([
          "9",
          "10",
          "11",
          "12",
        ]),
        correctAnswer: "11",
      },
      
      // Rarity ranking question
      {
        id: 9,
        text: "Which of these rarities is the highest in Brawl Stars?",
        options: shuffleArray([
          "Epic",
          "Mythic",
          "Legendary",
          "Chromatic",
        ]),
        correctAnswer: "Legendary",
      },
      
      // Brawler recognition question
      {
        id: 10,
        text: "Which of these brawlers uses a shotgun as their main attack?",
        options: shuffleArray([
          "Shelly",
          "Colt",
          "Brock",
          "Piper",
        ]),
        correctAnswer: "Shelly",
      },
    ];
    
    // Shuffle and return 10 questions
    return shuffleArray(questions).slice(0, 10);
  };
  
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  
  const handleOptionSelect = (option: string) => {
    if (state.answered) return;
    
    setState((prev) => ({
      ...prev,
      selectedOption: option,
    }));
  };
  
  const handleSubmitAnswer = () => {
    if (!state.selectedOption) {
      toast.error("Please select an answer");
      return;
    }
    
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = state.selectedOption === currentQuestion.correctAnswer;
    
    // Update user answers
    const updatedUserAnswers = [...state.userAnswers];
    updatedUserAnswers[state.currentQuestionIndex] = state.selectedOption;
    
    setState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answered: true,
      userAnswers: updatedUserAnswers,
    }));
    
    // Show toast notification
    if (isCorrect) {
      toast.success("Correct answer!");
    } else {
      toast.error(`Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`);
    }
    
    // Move to next question after delay
    setTimeout(() => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        setState((prev) => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          selectedOption: null,
          answered: false,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          completed: true,
          showResults: true,
        }));
      }
    }, 1500);
  };
  
  const restartQuiz = () => {
    const questions = generateQuestions();
    setState({
      currentQuestionIndex: 0,
      score: 0,
      selectedOption: null,
      answered: false,
      completed: false,
      showResults: false,
      questions,
      userAnswers: Array(questions.length).fill(null),
    });
  };
  
  if (state.questions.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-4 border-t-brawl-purple border-gray-200 rounded-full animate-spin"></div>
          <p>Loading quiz questions...</p>
        </div>
      </div>
    );
  }
  
  const currentQuestion = state.questions[state.currentQuestionIndex];
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Link to="/minigames" className="flex items-center text-brawl-text-secondary hover:text-brawl-text transition-colors group">
            <ArrowLeft size={20} className="mr-1 transition-transform group-hover:-translate-x-1" />
            <span>Back to Minigames</span>
          </Link>
          
          {!state.showResults && (
            <div className="text-brawl-text-secondary">
              Question {state.currentQuestionIndex + 1}/{state.questions.length}
            </div>
          )}
        </div>
        
        {state.showResults ? (
          <div className="card-glass rounded-xl p-8 animate-scale-in">
            <h2 className="text-3xl font-bold mb-6 text-center">Quiz Results</h2>
            
            <div className="text-center mb-8">
              <div className="text-5xl font-bold mb-2">{state.score}/{state.questions.length}</div>
              <p className="text-brawl-text-secondary">
                {state.score === state.questions.length
                  ? "Perfect score! You're a Brawl Stars master!"
                  : state.score >= state.questions.length * 0.7
                  ? "Great job! You know your Brawl Stars well!"
                  : state.score >= state.questions.length * 0.5
                  ? "Good effort! Keep practicing to improve your score."
                  : "Keep learning about Brawl Stars to improve your score!"}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Question Summary</h3>
              <div className="space-y-4">
                {state.questions.map((question, index) => (
                  <div 
                    key={question.id} 
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/50"
                  >
                    {state.userAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium mb-1">{question.text}</p>
                      <p className="text-sm text-brawl-text-secondary">
                        Your answer: {state.userAnswers[index] || "Not answered"}
                      </p>
                      {state.userAnswers[index] !== question.correctAnswer && (
                        <p className="text-sm text-green-600 font-medium">
                          Correct answer: {question.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <button onClick={restartQuiz} className="btn-primary">
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="card-glass rounded-xl overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{currentQuestion.text}</h2>
                
                <div className="w-full bg-brawl-purple/10 rounded-full h-2 mb-6">
                  <div
                    className="bg-brawl-purple h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${((state.currentQuestionIndex + 1) / state.questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              
              {currentQuestion.image && (
                <div className="flex justify-center p-4 bg-white">
                  <img
                    src={currentQuestion.image}
                    alt="Question"
                    className="h-64 object-contain"
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    state.selectedOption === option
                      ? "bg-brawl-purple text-white"
                      : "bg-white hover:bg-gray-50"
                  } ${
                    state.answered &&
                    option === currentQuestion.correctAnswer
                      ? "bg-green-500 text-white"
                      : state.answered &&
                        option === state.selectedOption &&
                        option !== currentQuestion.correctAnswer
                      ? "bg-red-500 text-white"
                      : ""
                  }`}
                  disabled={state.answered}
                >
                  <div className="flex items-center">
                    <span className="mr-3 w-6 h-6 rounded-full bg-gray-100 text-brawl-text flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleSubmitAnswer}
                disabled={!state.selectedOption || state.answered}
                className={`btn-primary w-full sm:w-auto ${
                  !state.selectedOption || state.answered
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {state.answered ? "Processing..." : "Submit Answer"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
