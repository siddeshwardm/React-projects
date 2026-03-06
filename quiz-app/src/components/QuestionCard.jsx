import { useState } from "react";

function QuestionCard({ questionData, handleAnswer }) {

  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
    handleAnswer(option);
  };

  return (
    <div className="card">

      <h2>{questionData.question}</h2>

      {questionData.options.map((option, index) => {

        let className = "";

        if (selected) {
          if (option === questionData.answer) className = "correct";
          else if (option === selected) className = "wrong";
        }

        return (
          <button
            key={index}
            className={["option-btn", className].filter(Boolean).join(" ")}
            onClick={() => handleClick(option)}
            disabled={selected !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionCard;