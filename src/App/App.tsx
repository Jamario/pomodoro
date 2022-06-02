import { useState } from "react";
import OptionsBar from "../components/OptionsBar";
import Timers from "../components/Timers";
import SettingsModal from "../components/SettingsModal";

import styles from "./App.module.css";
import logo from "../images/logo.svg";
import settingsIcon from "../images/icon-settings.svg";

import { useApp } from "../contexts/appContext";

const App = (): JSX.Element => {
    const [timerType, setTimerType] = useState(1);
    const [showSettingsModal, setShowSettingsModal] = useState(true);
    const { getCurrentGlobalStyle } = useApp();
    const { font: appFont } = getCurrentGlobalStyle();

    const changeTimerType = (timerType: number) => {
        setTimerType(timerType);
    };

    const fontStyle = {
        fontFamily: appFont,
    };

    return (
        <div className={styles.container} style={fontStyle}>
            <img src={logo} alt="Application logo." />
            <OptionsBar timerType={timerType} changeTimerType={changeTimerType} />
            <Timers timerType={timerType} />
            <button className={styles.settingsBtn} onClick={() => setShowSettingsModal(true)}>
                <img src={settingsIcon} alt="Settings icon." />
            </button>
            <SettingsModal show={showSettingsModal} closeModal={() => setShowSettingsModal(false)} />
        </div>
    );
};

export default App;
