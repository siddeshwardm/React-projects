import { useState } from "react";
import flashcards from "./data/flashcards";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";
import Navigation from "./components/Navigation";
import "./App.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setIndex(prev => {
      if (prev < flashcards.length - 1) {
        setFlipped(false);
        return prev + 1;
      }
      return prev;
    });
  };

  const prevCard = () => {
    setIndex(prev => {
      if (prev > 0) {
        setFlipped(false);
        return prev - 1;
      }
      return prev;
    });
  };

  const toggleFlip = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div className="app">
      <h1>JavaScript Flashcards</h1>

      <ProgressBar
        current={index + 1}
        total={flashcards.length}
      />

      <Flashcard card={flashcards[index]} flipped={flipped} />

      <div className="controls-row">
        <button className="show-answer-btn" onClick={toggleFlip}>
          {flipped ? "Hide Answer" : "Show Answer"}
        </button>
        <Navigation prev={prevCard} next={nextCard} />
      </div>
    </div>
  );
}