import React, { useState } from "react";
import styles from "./SettingsModal.module.css";
import closeIconImage from "../../images/icon-close.svg";
import SettingsInput from "./SettingsInput";

interface FormValueTypes {
    [index: string]: number;
}

const SettingsModal = (): JSX.Element => {
    const [formValues, setFormValues] = useState<FormValueTypes>();

    const handleInputChange = (name: string, value: number) => {
        const newFormValues = { ...formValues, [name]: value };
        setFormValues(newFormValues);
    };

    const handleCloseButtonClick = () => console.log("Closed button was clicked");

    const handleSubmitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("form values", formValues);
    };

    console.log("form values", formValues);
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <div className={`${styles.row} ${styles.modalHeader}`}>
                    <h1>Settings</h1>
                    <button onClick={handleCloseButtonClick}>
                        <img src={closeIconImage} alt="close button" />
                    </button>
                </div>
                <div>
                    <h2>Time ( MINUTES )</h2>
                    <div className={`${styles.row}`}>
                        <form onSubmit={handleSubmitForm}>
                            <div className={`${styles.row}`}>
                                <SettingsInput label="pomodoro" name="pomodoro" handleChange={handleInputChange} />
                                <SettingsInput label="short break" name="short" handleChange={handleInputChange} />
                                <SettingsInput label="long break" name="long" handleChange={handleInputChange} />
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}>Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
