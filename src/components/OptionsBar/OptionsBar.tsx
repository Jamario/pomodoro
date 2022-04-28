import Button from "./Button";
import styles from "./OptionsBar.module.css";

type AppProps = {
    timerType: number; //change this to be options from 1, 2, 3
    changeTimerType: (timerType: number) => void;
};

const OptionsBar = ({ timerType, changeTimerType }: AppProps): JSX.Element => {
    const handleButtonClick = (type: number) => () => changeTimerType(type);

    return (
        <div className={styles.container}>
            <Button handleClick={handleButtonClick(1)} className={timerType === 1 ? styles.buttonActive : ""}>
                pomodoro
            </Button>
            <Button handleClick={handleButtonClick(2)} className={timerType === 2 ? styles.buttonActive : ""}>
                short break
            </Button>
            <Button handleClick={handleButtonClick(3)} className={timerType === 3 ? styles.buttonActive : ""}>
                long break
            </Button>
        </div>
    );
};

export default OptionsBar;
