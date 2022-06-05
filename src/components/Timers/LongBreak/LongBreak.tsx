import { useState } from "react";
import { useApp } from "../../../contexts/appContext";

import Timer from "../Timer";
import { TimerState } from "../types";

import { convertMinutesToSeconds } from "../../../utils/timeUtils";
import styles from "./LongBreak.module.css";

const LongBreak = (): JSX.Element => {
    const [timerState, setTimerState] = useState(TimerState.Stopped);

    const changeTimerState = (newTimerState: TimerState) => {
        setTimerState(newTimerState);
    };

    const {
        settings: { longbreak },
    } = useApp();
    const countdownStartTime = convertMinutesToSeconds(longbreak);

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
