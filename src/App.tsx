
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Brawlers from "./pages/Brawlers";
import BrawlerDetail from "./pages/BrawlerDetail";
import Minigames from "./pages/Minigames";
import MemoryGame from "./pages/MemoryGame";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Apply a class to the body element for global styles
  useEffect(() => {
    document.body.classList.add("antialiased");
    
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" closeButton />
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/brawlers" element={<Brawlers />} />
              <Route path="/brawlers/:id" element={<BrawlerDetail />} />
              <Route path="/minigames" element={<Minigames />} />
              <Route path="/memory-game" element={<MemoryGame />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
