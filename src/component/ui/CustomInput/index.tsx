
import Styles from "./styles.module.css";
export interface InputProps {
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  errorDisabled?: boolean;
  checked?: boolean;
  inputMode?:
    | "search"
    | "email"
    | "tel"
    | "text"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
}

const CustomInput = (props: InputProps) => {
  return (
    <div className={Styles.inputWrapper}>
      <input
        className={`${Styles.input} ${props.errorMessage && Styles.error}`}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        checked={props.checked}
      />

      {!props.errorDisabled && (
        <div
          className={`${Styles.errorMessage} ${
            props.errorMessage ? Styles.errorMessageVisible : ""
          }`}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
