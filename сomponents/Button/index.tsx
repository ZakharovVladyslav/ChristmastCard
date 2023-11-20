import { MouseEvent, MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type ButtonSize = "default" | "small";
type ButtonType = "default" | "constructive" | "destructive";

interface ButtonProps {
    children: React.ReactNode;
    onClick: VoidFunction;
    size?: ButtonSize;
    type?: ButtonType;
}

export default function Button({
    children,
    onClick,
    size = "default",
    type = "default",
}: ButtonProps): JSX.Element {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (onClick)
            onClick()
    }

    return (
        <button
            className={cn(styles.button, {
                [styles.small]: size === "small",
                [styles.constructive]: type === "constructive",
                [styles.destructive]: type === "destructive",
            })}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
