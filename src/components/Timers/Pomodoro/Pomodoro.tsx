import { useState } from "react";

import Timer from "../Timer";
import { TimerState } from "../types";
import styles from "./Pomodoro.module.css";

const Pomodoro = (): JSX.Element => {
    const countdownStartTime = 60; //temporarily
    const [timerState, setTimerState] = useState(TimerState.Stopped);

    /**
     * the timer has multiple states; paused, running, finished
     * finished ~> restart
     * running ~> pause
     * paused ~> start
     */
    const changeTimerState = (newTimerState: TimerState) => {
        setTimerState(newTimerState);
    };

    return (
        <div className={styles.container}>
            <Timer
                countdownStartTime={countdownStartTime}
                timerState={timerState}
                changeTimerState={changeTimerState}
            />
        </div>
    );
};

export default Pomodoro;
