import Link from "next/link";
import { ReactNode } from "react";
import styles from "./LinkedButton.module.scss";
import cn from "classnames";

type LinkedButtonSize = "default" | "small";
type LinkedButtonType = "default" | "constructive" | "destructive";

interface LinkedButtonProps {
    href: string;
    children: ReactNode;
    size?: LinkedButtonSize;
    type?: LinkedButtonType;
}

export default function LinkedButton({
    href,
    children,
    size = "default",
    type = "default",
}: LinkedButtonProps): JSX.Element {
    return (
        <Link
            href={href}
            className={cn(styles.linkedButton, {
                [styles.small]: size === "small",
                [styles.constructive]: type === "constructive",
                [styles.destructive]: type === "destructive",
            })}
        >
            {children}
        </Link>
    );
}
