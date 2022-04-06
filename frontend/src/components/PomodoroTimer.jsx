import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { isValidElement, useEffect } from "react";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import { useState } from "react";

function Timer() {
  const workColor = "#9FC5FF";
  const breakColor = "#FFC59F";

  const[minutesLeft, setMinutesLeft] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [paused, setPaused] = useState(true);
  const [timerMode, setTimerMode] = useState("work");


  function tickDown(){

    setSecondsLeft(secondsLeft - 1);
  }
  function initialiseTime(){
    setSecondsLeft(minutesLeft*60);
  }
  function modeSwitcher()
  {
      const newMode = timerMode === "work" ? "break" : "work";
        setTimerMode(newMode);
        secondsLeft === 0 ? initialiseTime() : setSecondsLeft(secondsLeft);
  }

  useEffect(() => {
      initialiseTime();

      setInterval   (() => {
          if(paused){
              return;
          }
          if (secondsLeft === 0) {
              return modeSwitcher();
          }
            tickDown();
        }
    

        
  




  return (
    <div className="timerContainer">
      <div class="timer">
        <CircularProgressbar
          value={100}
          text={`${minutesLeft}:${secondsLeft}`}
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
