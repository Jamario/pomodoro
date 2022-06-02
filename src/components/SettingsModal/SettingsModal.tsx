import React, { useState } from "react";
import styles from "./SettingsModal.module.css";
import closeIconImage from "../../images/icon-close.svg";
import SettingsInput from "./SettingsInput";

import { useApp, AppStateType, globalStyles } from "../../contexts/appContext";

type SettingsModalProps = {
    show: boolean;
    closeModal: () => void;
};
interface FormValueTypes {
    short: number;
    long: number;
    pomodoro: number;
    font: number;
    color: number;
}

const SettingsModal = ({ show, closeModal }: SettingsModalProps): JSX.Element => {
    const { settings, updateSettings } = useApp();
    const { pomodoro, shortbreak, longbreak, mainColor, font } = settings;

    const [formValues, setFormValues] = useState<FormValueTypes>({
        pomodoro,
        short: shortbreak,
        long: longbreak,
        color: mainColor,
        font,
    });

    const { fonts, colors } = globalStyles;

    const handleInputChange = (name: string, value: number) => {
        const newFormValues = { ...formValues, [name]: value };
        setFormValues(newFormValues);
    };

    const handleCloseButtonClick = () => closeModal();

    const handleListButtonClick = (type: string, index: number) => () => {
        console.log("button clicked", type, index);
        if (type === "font") {
            setFormValues({ ...formValues, font: index });
        } else if (type === "color") {
            setFormValues({ ...formValues, color: index });
        }
    };

    const handleSubmitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const newSettings: AppStateType = {
            font: formValues.font,
            pomodoro: formValues.pomodoro,
            shortbreak: formValues.short,
            longbreak: formValues.long,
            mainColor: formValues.color,
        };

        updateSettings(newSettings);
        closeModal();
    };

    const currentFontStyle = {
        fontFamily: fonts[formValues.font],
    };

    const currentSubmitButtonStyle = {
        backgroundColor: colors[formValues.color],
    };

    return (
        <div className={`${styles.container} ${show ? styles.show : styles.hide}`} style={currentFontStyle}>
            <div className={styles.settings}>
                <div className={`${styles.row} ${styles.modalHeader}`}>
                    <h1>Settings</h1>
                    <button onClick={handleCloseButtonClick}>
                        <img src={closeIconImage} alt="close button" />
                    </button>
                </div>
                <div className={styles.timeSection}>
                    <h2>Time (MINUTES)</h2>
                    <div className={`${styles.row}`}>
                        <form onSubmit={handleSubmitForm}>
                            <div className={`${styles.row}`}>
                                <SettingsInput
                                    label="pomodoro"
                                    name="pomodoro"
                                    handleChange={handleInputChange}
                                    value={formValues.pomodoro}
                                />
                                <SettingsInput
                                    label="short break"
                                    name="short"
                                    handleChange={handleInputChange}
                                    value={formValues.short}
                                />
                                <SettingsInput
                                    label="long break"
                                    name="long"
                                    handleChange={handleInputChange}
                                    value={formValues.long}
                                />
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} style={currentSubmitButtonStyle}>
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.fontSection}>
                    <h2>Font</h2>
                    <ul>
                        <li>
                            <button
                                title="Kumbh Sans"
                                style={{ fontFamily: fonts[0] }}
                                className={formValues.font === 0 ? styles.activeFontButton : ""}
                                onClick={handleListButtonClick("font", 0)}
                            >
                                <span>Aa</span>
                            </button>
                        </li>
                        <li>
                            <button
                                title="Roboto Slab"
                                style={{ fontFamily: fonts[1] }}
                                className={formValues.font === 1 ? styles.activeFontButton : ""}
                                onClick={handleListButtonClick("font", 1)}
                            >
                                <span>Aa</span>
                            </button>
                        </li>
                        <li>
                            <button
                                title="Space Mono"
                                style={{ fontFamily: fonts[2] }}
                                className={formValues.font === 2 ? styles.activeFontButton : ""}
                                onClick={handleListButtonClick("font", 2)}
                            >
                                <span>Aa</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.colorSection}>
                    <h2>Color</h2>
                    <ul>
                        <li>
                            <button
                                title={colors[0]}
                                style={{ backgroundColor: colors[0] }}
                                className={formValues.color === 0 ? styles.activeColorButton : ""}
                                onClick={handleListButtonClick("color", 0)}
                            ></button>
                        </li>
                        <li>
                            <button
                                title={colors[1]}
                                style={{ backgroundColor: colors[1] }}
                                className={formValues.color === 1 ? styles.activeColorButton : ""}
                                onClick={handleListButtonClick("color", 1)}
                            ></button>
                        </li>
                        <li>
                            <button
                                title={colors[2]}
                                style={{ backgroundColor: colors[2] }}
                                className={formValues.color === 2 ? styles.activeColorButton : ""}
                                onClick={handleListButtonClick("color", 2)}
                            ></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
