function ResultScreen({ score , wrong}) {
  return (
    <div className="card">

      <h1>Quiz Finished</h1>
      <h2>Total Correct: {score}</h2>
      <h2>Total Wrong: {wrong}</h2>
    <h2 className="score">Your Score: <span>{score}</span></h2>

      

    </div>
  );
}

export default ResultScreen;