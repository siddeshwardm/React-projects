import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import { questions } from "./data/questions";
import Snowfall from 'react-snowfall';

function App() {

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [wrong, setWrong] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (selected) => {
  const correct = questions[currentQuestion].answer;

  if (selected === correct) {
    setScore(score + 1);
  } else {
    setWrong(wrong + 1);
  }

    setAnswers([
      ...answers,
      {
        question: questions[currentQuestion].question,
        selected,
        correct
      }
    ]);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizStarted(false);
        setCurrentQuestion(questions.length);
      }
    }, 1000);
  };

  if (!quizStarted && currentQuestion === 0)
    return <StartScreen startQuiz={startQuiz} />;

  if (currentQuestion >= questions.length)
    return <ResultScreen score={score} wrong={wrong} />;

  return (
    <>
    <Snowfall color="#82C3D9" />
    <QuestionCard
      key={currentQuestion}
      questionData={questions[currentQuestion]}
      handleAnswer={handleAnswer} />
      </>
  );
}

export default App;