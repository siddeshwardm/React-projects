function StartScreen({ startQuiz }) {
  return (
    <div className="card">
      <h1>Quiz App</h1>
      <p>This quiz will test your web development knowledge.</p>
      <button className="primary-btn" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartScreen;