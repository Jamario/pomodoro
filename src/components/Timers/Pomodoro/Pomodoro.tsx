import { useState, useEffect } from "react";

import Timer from "../Timer";
import styles from "./Pomodoro.module.css";

const Pomodoro = (): JSX.Element => {
    const countdownStartTime = 60; //temporarily
    const [currentTime, setCurrentTime] = useState(countdownStartTime);
    const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

    useEffect(() => {
        console.log("useEffect");

        let intervalReference: NodeJS.Timer;

        intervalReference = setInterval(() => {
            setCurrentTime((currentTime) => (currentTime > 1 ? currentTime - 1 : currentTime));
        }, 1000);

        setIntervalID(intervalReference);
        return () => {
            console.log("clear interval id");
            clearInterval(intervalReference);
        };
    }, []);

    useEffect(() => {
        if (intervalID !== null && currentTime <= 1) {
            console.log("clear interval");
            clearInterval(intervalID);
        }
    }, [currentTime, intervalID]);

    console.log("current time", currentTime);
    return (
        <div className={styles.container}>
            <Timer currentTime={currentTime} countdownStartTime={countdownStartTime} />
        </div>
    );
};

export default Pomodoro;
