import styles from "./Button.module.css";
import { useApp } from "../../contexts/appContext";

type AppProps = {
    children: React.ReactNode;
    handleClick: () => void;
    isActive: boolean;
};

const Button = ({ children, handleClick, isActive }: AppProps): JSX.Element => {
    const { getCurrentGlobalStyle } = useApp();

    const { color } = getCurrentGlobalStyle();

    const activeButtonStyle = {
        backgroundColor: color,
        color: "#161932",
        opacity: 1,
    };

    return (
        <button className={`${styles.button}`} style={isActive ? activeButtonStyle : {}} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
