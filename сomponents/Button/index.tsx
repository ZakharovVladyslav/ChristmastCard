import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type ButtonSize = "default" | "small";
type ButtonType = "default" | "constructive" | "destructive";

interface ButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    size?: ButtonSize;
    type?: ButtonType;
}

export default function Button({
    children,
    onClick,
    size = "default",
    type = "default",
}: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(styles.button, {
                [styles.small]: size === "small",
                [styles.constructive]: type === "constructive",
                [styles.destructive]: type === "destructive",
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
