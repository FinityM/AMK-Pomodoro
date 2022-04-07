import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { isValidElement, useEffect } from "react";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import { useState} from "react";
import { useRef } from "react";

function Timer() {

  const workColor = "#9FC5FF";
  const breakColor = "#FFC59F";

  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerMode, setTimerMode] = useState("work");


  const pausedRef= useRef(paused);
  const secondsLeftRef= useRef(secondsLeft);
  const timerModeRef = useRef(timerMode);



  function initialiseTime() {
    setSecondsLeft(minutesLeft * 60);
  }

  function tickDown() {
    setSecondsLeft(secondsLeftRef.current - 1);
  }

  useEffect(() => {
    initialiseTime();

    const interval = setInterval(() => {
      if (pausedRef.current) {
        return;
      }
      if (minutesLeft === 0 && secondsLeft === 0) {
        setMinutesLeft(5);
      }
      tickDown();
    }, 1000);

    return ()=> clearInterval(interval);
  });

  const totalTime =  timerMode === 'work' ? 25 * 60 : 5 * 60;
const timerBarMath = (secondsLeft / totalTime) * 100;

const displayMinutes = Math.floor (secondsLeft/60);

let displaySeconds = secondsLeft % 60;
if (displaySeconds < 10) {
  displaySeconds = '0' + displaySeconds;
}

  return (
    <div className="timerContainer">
      <div class="timer">
        <CircularProgressbar
          value={timerBarMath}
          text={displayMinutes +':'+ displaySeconds}
          styles={buildStyles({
            textColor: "#9fC5FF",
            pathColor: workColor,
            tailColor: "rgba(255,255,255,.2)",
          })}
        />
        <div className="timerButtons" style={{ marginTop: "10px" }}>
          {paused ? <StartButton /> : <PauseButton />}
        </div>
      </div>
    </div>
  );
}

export default Timer;
