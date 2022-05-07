import React from "react";
import styles from "./SettingsModal.module.css";

type SettingsInputProps = {
    label: string;
    name: string;
    handleChange: (name: string, value: number) => void;
};

const SettingsInput = ({ label, name, handleChange }: SettingsInputProps): JSX.Element => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        handleChange(name, +value);
    };

    return (
        <div>
            <label htmlFor={name}>
                {label}
                <input
                    className={styles.input}
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
