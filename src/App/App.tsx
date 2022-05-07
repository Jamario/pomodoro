import { useState } from "react";
import OptionsBar from "../components/OptionsBar";
import Timers from "../components/Timers";
import SettingsModal from "../components/SettingsModal";

import styles from "./App.module.css";
import logo from "../images/logo.svg";
import settingsIcon from "../images/icon-settings.svg";

const App = (): JSX.Element => {
    const [timerType, setTimerType] = useState(1);

    const changeTimerType = (timerType: number) => {
        setTimerType(timerType);
    };

    return (
        <div className={styles.container}>
            <img src={logo} alt="Application logo." />
            <OptionsBar timerType={timerType} changeTimerType={changeTimerType} />
            <Timers timerType={timerType} />
            <button className={styles.settingsBtn}>
                <img src={settingsIcon} alt="Settings icon." />
            </button>
            <SettingsModal />
        </div>
    );
};

export default App;
