import React, { useState } from "react";

export const globalStyles = {
    fonts: ["KumbhSans, sans-serif", "RobotoSlab, serif", "SpaceMono, monospace"],
    colors: ["#F87070", "#70F3F8", "#D881F8"],
};

//time is stored in minutes
const initialState = {
    font: 0,
    mainColor: 0,
    pomodoro: 25,
    shortbreak: 5,
    longbreak: 15,
};

export type AppStateType = typeof initialState;

type ContextType = {
    settings: AppStateType;
    updateSettings: (updatedSettings: AppStateType) => void;
    getCurrentGlobalStyle: () => { color: string; font: string };
};

export const AppContext = React.createContext<ContextType | null>(null);

export function useApp() {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("Failure with app context");
    }
    return context;
}

type ProviderProps = {
    children: React.ReactNode;
};

export function AppProvider({ children }: ProviderProps) {
    const [settings, setSettings] = useState(initialState);
    const updateSettings = (updatedSettings: AppStateType) => setSettings({ ...settings, ...updatedSettings });
    const getCurrentGlobalStyle = () => {
        const { font, mainColor } = settings;
        const colorStyle = globalStyles.colors[mainColor];
        const fontStyle = globalStyles.fonts[font];

        return { color: colorStyle, font: fontStyle };
    };

    return (
        <AppContext.Provider value={{ settings, updateSettings, getCurrentGlobalStyle }}>
            {children}
        </AppContext.Provider>
    );
}
