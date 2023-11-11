import { ChangeEvent } from "react";
import styles from "./textarea.module.scss";
import { ErrorIcon } from "@/сomponents/Icons";
import cn from "classnames";

interface TextareaProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placholder?: string;
    label?: string;
    error?: string | null;
    maxLength?: number;
}

export default function Textarea({
    value,
    onChange,
    placholder,
    label,
    error,
    maxLength,
}: TextareaProps): JSX.Element {
    return (
        <div className={styles.textareaWrapper}>
            {label && <label className={styles.label}>{label}</label>}

            <textarea
                className={cn(styles.textarea, {
                    [styles.invalid]: error,
                })}
                value={value}
                onChange={onChange}
                placeholder={placholder ?? ""}
                maxLength={maxLength}
            ></textarea>

            {error && (
                <div className={styles.error}>
                    <ErrorIcon /> {error}
                </div>
            )}
        </div>
    );
}
