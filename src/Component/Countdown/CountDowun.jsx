import React, { useState, useEffect } from 'react';
import "./CountDown.css";

function CountDown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-07-29T00:00:00'); // Set the target date and time
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex justify-center gap-5 text-center">
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
