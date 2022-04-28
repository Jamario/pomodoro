import styles from "./Timer.module.css";

const Timer = (): JSX.Element => {
    return (
        <div>
            <div className={styles.outerRing}>
                <div className={styles.innerRing}>00:00</div>
            </div>
        </div>
    );
};

export default Timer;
