import { useState } from "react";
import { useApp } from "../../../contexts/appContext";

import Timer from "../Timer";
import { TimerState } from "../types";

import { convertMinutesToSeconds } from "../../../utils/timeUtils";
import styles from "./ShortBreak.module.css";

const ShortBreak = (): JSX.Element => {
    const [timerState, setTimerState] = useState(TimerState.Stopped);

    const {
        settings: { shortbreak },
    } = useApp();
    const countdownStartTime = convertMinutesToSeconds(shortbreak);

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

export default ShortBreak;
