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
            <Button handleClick={handleButtonClick(1)} isActive={timerType === 1}>
                pomodoro
            </Button>
            <Button handleClick={handleButtonClick(2)} isActive={timerType === 2}>
                short break
            </Button>
            <Button handleClick={handleButtonClick(3)} isActive={timerType === 3}>
                long break
            </Button>
        </div>
    );
};

export default OptionsBar;
