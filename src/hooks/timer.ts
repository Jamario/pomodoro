import { useState, useEffect } from "react";

const styles = {
    small: {
        diameter: 280,
        circumference: 880,
        fontSize: '8rem',
    },
    large: {
        diameter: 340,
        circumference: 1030,
        fontSize: '9rem',
    }
};

export function useMediaQuery(query: string) {
    const result = window.matchMedia(query);
    const initialStyles = result.matches ? styles.small : styles.large;
    const [timerStyles, setTimerStyles] = useState(initialStyles);
  
    useEffect(() => {
        const wm = window.matchMedia(query);
        const handleChange = ({matches}: MediaQueryListEvent) => setTimerStyles(matches ? styles.small : styles.large);
        wm.addEventListener("change", handleChange);

        return () => wm.removeEventListener("change", handleChange);
    }, [query]);


    return timerStyles;
  }