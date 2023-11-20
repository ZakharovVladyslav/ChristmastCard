"use client";

import styles from "./page.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { MouseEvent } from "react";
import Button from "@/сomponents/Button";
import Input from "@/сomponents/Fields/Input";
import Textarea from "@/сomponents/Fields/Textarea";
import validateEmail from "@/utils/validators/email_validator";
import { validateText } from "@/utils/validators";
import Snowfall from "react-snowfall";

export default function Home() {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");
    const [messageBase64, setMessageBase64] = useState<string>("");
    const [messageError, setMessageError] = useState<string | null>(null);
    const [href, setHref] = useState<string>("");

    useEffect(() => {
        const messageBase64 = Buffer.from(message).toString("base64");

        setHref(
            `mailto:${email}?subject="Marry christmas!"&body=https://christmast-card.vercel.app//card?message=${messageBase64}`
        );
    }, [message]);

    // const sendEmail = async (event: MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();

    //     const emailValidated = validateEmailOnSubmit();
    //     const textValidated = validateTextOnSubmit();

    //     if (emailValidated && textValidated) {
    //         fetch("/api/email", {
    //             method: "POST",
    //             body: JSON.stringify({ email, message }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         setEmail("");
    //         setMessage("");
    //     }
    // };

    const validateEmailOnSubmit = (): boolean => {
        const emailValidation: Validate = validateEmail({ email });

        setEmailError(emailValidation.errorMsg);

        return emailValidation.isValidated;
    };

    const validateTextOnSubmit = (): boolean => {
        const textValidation: Validate = validateText({
            text: message,
            maxLength: 150,
        });

        setMessageError(textValidation.errorMsg);

        return textValidation.isValidated;
    };

    return (
        <main className={styles.main}>
            <Snowfall
                snowflakeCount={100}
            />

            <h1 className={styles.title}>
                Christmas congratulations
                <span>Send to your friends!</span>
            </h1>

            <form className={styles.form}>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                    }
                    placeholder="Enter an email"
                    label="Email"
                    error={emailError}
                />

                <Textarea
                    value={message}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(event.target.value)
                    }
                    placholder="Enter a message"
                    label="Message"
                    error={messageError}
                    maxLength={150}
                />

                {/* <Button onClick={sendEmail}>Send</Button> */}

                <a className={styles.link} href={href}>
                    Send
                </a>
            </form>
        </main>
    );
}
