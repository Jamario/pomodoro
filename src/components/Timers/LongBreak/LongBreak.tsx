import { useState } from "react";

import Timer from "../Timer";
import { TimerState } from "../types";
import styles from "./LongBreak.module.css";

const LongBreak = (): JSX.Element => {
    const countdownStartTime = 60; //temporarily
    const [timerState, setTimerState] = useState(TimerState.Stopped);

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

export default LongBreak;
