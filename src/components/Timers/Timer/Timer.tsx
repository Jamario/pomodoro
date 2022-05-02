import { useState, useEffect } from "react";

import { displayTime, getMinutesAndSeconds } from "../../../utils/timeUtils";
import { getStateButtonText } from "./Timer.utils";
import { TimerState } from "../types";

import styles from "./Timer.module.css";

type TimerProps = {
    countdownStartTime: number;
    timerState: TimerState;
    changeTimerState: (newTimerState: TimerState) => void;
};

const entireStrokeLength = 1030;

const Timer = ({ countdownStartTime, timerState, changeTimerState }: TimerProps): JSX.Element => {
    const [countdownSegment, setCountdownSegment] = useState(0);
    const [currentTime, setCurrentTime] = useState(countdownStartTime);
    const [intervalID, setIntervalID] = useState<number | undefined>(undefined);

    useEffect(() => {
        const segment = entireStrokeLength / countdownStartTime;
        setCountdownSegment(segment);
    }, [countdownStartTime]);

    useEffect(() => {
        if (intervalID && currentTime <= 0) {
            clearInterval(intervalID);
            changeTimerState(TimerState.Finished);
        }
    }, [currentTime, intervalID, changeTimerState]);

    // cleanup window interval when the timer goes out of focus. Stops memory leaks
    useEffect(() => {
        return () => {
            clearInterval(intervalID);
        };
    }, [intervalID]);

    const startNewTimer = () => {
        let intervalReference: number;

        intervalReference = window.setInterval(() => {
            setCurrentTime((currentTime) => (currentTime > 0 ? currentTime - 1 : currentTime));
            console.log("timer ticks");
        }, 1000);

        setIntervalID(intervalReference);
    };

    const restartTimer = () => {
        //redundant safety check
        if (timerState === TimerState.Finished) {
            setIntervalID(undefined);
            setCurrentTime(countdownStartTime);
        }
    };

    const resumeTimer = () => {
        if (timerState === TimerState.Paused) {
            startNewTimer();
        }
    };

    const pauseTimer = () => {
        if (intervalID && timerState === TimerState.Running) {
            window.clearInterval(intervalID);
            setIntervalID(undefined);
            changeTimerState(TimerState.Paused);
        }
    };

    const strokeDashOffsetValue = entireStrokeLength - countdownSegment * currentTime;
    console.log("stroke dash offset value", strokeDashOffsetValue);

    const { minutes, seconds } = getMinutesAndSeconds(currentTime);
    const timeString = displayTime(minutes, seconds);

    // behavior would change based on the current state of the timer
    const handleClick = () => {
        switch (timerState) {
            case TimerState.Running:
                pauseTimer();
                changeTimerState(TimerState.Paused);
                break;
            case TimerState.Finished:
                restartTimer();
                changeTimerState(TimerState.Stopped);
                break;
            case TimerState.Paused:
                resumeTimer();
                changeTimerState(TimerState.Running);
                break;
            case TimerState.Stopped:
            default:
                startNewTimer();
                changeTimerState(TimerState.Running);
                break;
        }
    };

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
                        <button className={styles.stateButton} onClick={handleClick}>
                            {getStateButtonText(timerState)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
