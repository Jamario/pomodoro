import { useState } from "react";
import { useApp } from "../../../contexts/appContext";

import Timer from "../Timer";
import { TimerState } from "../types";

import { convertMinutesToSeconds } from "../../../utils/timeUtils";
import styles from "./Pomodoro.module.css";

const Pomodoro = (): JSX.Element => {
    const [timerState, setTimerState] = useState(TimerState.Stopped);

    const {
        settings: { pomodoro },
    } = useApp();
    const countdownStartTime = convertMinutesToSeconds(pomodoro);
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
