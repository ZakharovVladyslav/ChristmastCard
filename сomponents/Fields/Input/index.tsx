import { ChangeEventHandler, useEffect } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";
import { ErrorIcon } from "@/сomponents/Icons";

type InputType = "text" | "email";

interface InputProps {
    name: string;
    value: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label?: string;
    type: InputType;
    error?: string | null;
    maxLength?: number;
}

export default function Input({
    name,
    value,
    placeholder,
    onChange,
    label,
    error,
    maxLength,
}: InputProps): JSX.Element {
    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                </label>
            )}

            <input
                className={cn(styles.input, {
                    [styles.invalid]: error,
                })}
                name={name}
                value={value}
                placeholder={placeholder ?? ""}
                onChange={onChange}
                maxLength={maxLength}
            />

            {error && (
                <div className={styles.error}>
                    <ErrorIcon /> {error}
                </div>
            )}
        </div>
    );
}
