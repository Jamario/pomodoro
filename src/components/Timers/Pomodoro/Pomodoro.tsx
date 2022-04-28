import Timer from "../Timer";
import styles from "./Pomodoro.module.css";

const Pomodoro = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Timer />
        </div>
    );
};

export default Pomodoro;
