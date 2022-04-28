import styles from "./Button.module.css";

type AppProps = {
    children: React.ReactNode;
    handleClick: () => void;
    className?: string;
};

const Button = ({ children, handleClick, className = "" }: AppProps): JSX.Element => {
    return (
        <button className={`${styles.button} ${className}`} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
