import { useEffect, useState } from "react";

function Timer({ nextQuestion }) {

  const [time, setTime] = useState(60);

  useEffect(() => {

    if (time === 0) {
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [nextQuestion, time]);

  return <h3>Time Left: {time}s</h3>;
}

export default Timer;