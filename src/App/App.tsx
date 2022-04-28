import { useState } from "react";
import OptionsBar from "../components/OptionsBar";

import styles from "./App.module.css";
import logo from "../images/logo.svg";

const App = (): JSX.Element => {
    const [timerType, setTimerType] = useState(1);

    const changeTimerType = (timerType: number) => {
        setTimerType(timerType);
    };

    return (
        <div className={styles.container}>
            <img src={logo} alt="Application logo." />
            <OptionsBar timerType={timerType} changeTimerType={changeTimerType} />
        </div>
    );
};

export default App;
