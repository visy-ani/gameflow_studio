import { JSX } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    title: string;
    id?: string;
    rightIcon?: JSX.Element;
    leftIcon?: JSX.Element;
    containerClass?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
      <button id={id} className={`${styles.button} ${containerClass || ""}`.trim()}>
        {leftIcon}

        <span className={styles.buttonText}>
            <div>{title}</div>
        </span>
        {rightIcon}
      </button>
    );
  };
  
  export default Button;
  