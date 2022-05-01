import { useState, useEffect } from "react";

import { displayTime, getMinutesAndSeconds } from "../../../utils/timeUtils";

import styles from "./Timer.module.css";

type TimerProps = {
    currentTime: number;
    countdownStartTime: number;
};

const entireStrokeLength = 1030;

const Timer = ({ currentTime, countdownStartTime }: TimerProps): JSX.Element => {
    const [countdownSegment, setCountdownSegment] = useState(0);

    useEffect(() => {
        const segment = entireStrokeLength / countdownStartTime;
        setCountdownSegment(segment);
    }, [countdownStartTime]);

    const strokeDashOffsetValue = entireStrokeLength - countdownSegment * currentTime;
    console.log("stroke dash offset value", strokeDashOffsetValue);

    const { minutes, seconds } = getMinutesAndSeconds(currentTime);
    const timeString = displayTime(minutes, seconds);

    return (
        <div>
            <div className={styles.outerRing}>
                <div className={styles.innerRing}>
                    <div className={styles.timeface}>
                        <div className={styles.svgContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="48%"
                                    className={styles.progressBar}
                                    strokeDasharray={entireStrokeLength}
                                    strokeDashoffset={strokeDashOffsetValue}
                                />
                            </svg>
                        </div>
                        <p className={styles.time}>{timeString}</p>
                        <p className={styles.pause}>PAUSE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
