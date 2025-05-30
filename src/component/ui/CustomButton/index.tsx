
import Styles from "./styles.module.css";
import { CSSProperties, ReactNode } from "react";

export interface CustomButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties;
  id?: string;
}
const CustomButton = ({
  children,
  onClick,
  type,
  style,
  disabled = false,
  variant = "primary",
  isLoading,
}: CustomButtonProps) => {
  return (
    <button
      className={`${Styles.button} ${Styles[variant]} ${
        isLoading && Styles.isLoading
      }`}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
