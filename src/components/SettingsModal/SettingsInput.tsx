import React from "react";
import styles from "./SettingsModal.module.css";

type SettingsInputProps = {
    label: string;
    name: string;
    value: number | string;
    handleChange: (name: string, value: number) => void;
};

const SettingsInput = ({ label, name, handleChange, value }: SettingsInputProps): JSX.Element => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        handleChange(name, +value);
    };

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={name}>
                {label}
                <input
                    className={styles.input}
                    value={value}
                    id={name}
                    name={name}
                    type="number"
                    onChange={onChange}
                    step={1}
                    min={0}
                    max={99}
                />
            </label>
        </div>
    );
};

export default SettingsInput;
