import { useEffect, useState } from "react";
import { clockConstants as cc } from "../helpers/constants";
import { getCurrentTime } from "../services/timeService";
import "../styles/clock.css";

type Position = {
  number: number;
  position: {
    top: string;
    left: string;
  };
};

function Clock() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const clockNumbers = generateClockNumbers();

  function generateClockNumbers(): Position[] {
    const numbers: Position[] = [];
    const centerOffset: number = cc.CENTER_OFFSET;
    const radius: number = cc.RADIUS;

    for (let i = 1; i <= 12; i++) {
      const angle = (i - 3) * cc.DEGREES_PER_HOUR * cc.DEG_TO_RAD;
      const top = centerOffset + radius * Math.sin(angle);
      const left = centerOffset + radius * Math.cos(angle);

      numbers.push({
        number: i,
        position: {
          top: `${top}%`,
          left: `${left}%`,
        },
      });
    }
    return numbers;
  }

  const updateClock = () => {
    const currentTime = getCurrentTime();
    setHours(
      (currentTime.getHours() % 12) * cc.DEGREES_PER_HOUR +
        currentTime.getMinutes() +
        cc.MINUTE_ADJUSTMENT +
        cc.OFFSET_ROTATION
    );
    setMinutes(
      currentTime.getMinutes() * cc.DEGREES_PER_MIN_SEC +
        currentTime.getSeconds() * cc.SECOND_ADJUSTMENT +
        cc.OFFSET_ROTATION
    );
    setSeconds(
      currentTime.getSeconds() * cc.DEGREES_PER_MIN_SEC + cc.OFFSET_ROTATION
    );
  };

  useEffect(() => {
    updateClock();
    setInterval(() => updateClock(), 1000);
  });

  return (
    <>
      <div className="clock">
        {clockNumbers.map((num) => (
          <div
            key={num.number}
            className="number"
            style={{ top: num.position.top, left: num.position.left }}
          >
            {num.number}
          </div>
        ))}
        <div className="center"></div>

        <div
          className="hand hour"
          style={{ transform: `rotate(${hours}deg` }}
        ></div>
        <div
          className="hand minute"
          style={{ transform: `rotate(${minutes}deg` }}
        ></div>
        <div
          className="hand second"
          style={{ transform: `rotate(${seconds}deg` }}
        ></div>
      </div>
    </>
  );
}

export default Clock;
