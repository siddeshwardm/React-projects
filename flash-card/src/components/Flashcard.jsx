export default function Flashcard({ card, flipped }) {
  return (
    <div className="flashcard-wrapper">

      <div className="flashcard-container">
        <div className={`flashcard ${flipped ? "flipped" : ""}`}>

          <div className="card-front">
            {card.question}
          </div>

          <div className="card-back">
            {card.answer}
          </div>

        </div>
      </div>
    </div>
  );
}