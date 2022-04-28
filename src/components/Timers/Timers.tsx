import LongBreak from "./LongBreak";
import ShortBreak from "./ShortBreak";
import Pomodoro from "./Pomodoro";

import styles from "./Timers.module.css";

type TimersProps = {
    timerType: number;
};

const Timers = ({ timerType }: TimersProps): JSX.Element => {
    const getCorrectTimer = (): React.ReactNode => {
        if (timerType === 1) return <Pomodoro />;
        if (timerType === 2) return <ShortBreak />;
        if (timerType === 3) return <LongBreak />;
        return <div>Failed to find timer type</div>;
    };

    return <div className={styles.container}>{getCorrectTimer()}</div>;
};

export default Timers;
