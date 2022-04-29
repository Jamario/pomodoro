import styles from "./Timer.module.css";

const Timer = (): JSX.Element => {
    return (
        <div>
            <div className={styles.outerRing}>
                <div className={styles.innerRing}>
                    <div className={styles.timeface}>
                        <div className={styles.svgContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50%" cy="50%" r="48%" className={styles.progressBar} />
                            </svg>
                        </div>
                        <p className={styles.time}>00:00</p>
                        <p className={styles.pause}>PAUSE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
