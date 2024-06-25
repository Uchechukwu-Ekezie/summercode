import React, { useState, useEffect } from 'react';
import "./CountDown.css";

function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 10,
    minutes: 24,
    seconds: 32,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          clearInterval(countdownInterval);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex justify-center gap-5 text-center ">
      <div className="flex items-center">
        <span className="font-mono text-xl">
          {timeLeft.days}
        </span>
        <span>days</span>
      </div>
      <div className="flex items-center">
        <span className="font-mono text-xl">
          {timeLeft.hours}
        </span>
        <span>hours</span>
      </div>
      <div className="flex items-center">
        <span className="font-mono text-xl">
          {timeLeft.minutes}
        </span>
        <span>min</span>
      </div>
      <div className="flex items-center">
        <span className="font-mono text-xl">
          {timeLeft.seconds}
        </span>
        <span>sec</span>
      </div>
    </div>
  );
}

export default CountDown;
