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
import Image from "next/image";

export default function Home() {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");
    const [messageBase64, setMessageBase64] = useState<string>("");
    const [messageError, setMessageError] = useState<string | null>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    useEffect(() => {
        setMessageBase64(Buffer.from(message).toString("base64"));
    }, [message]);

    useEffect(() => {
        const snowflake = document.createElement("img");
        snowflake.src = "/snowflake.svg";

        setImages([snowflake]);
    }, []);

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
                wind={[0, 0]}
                images={images}
                rotationSpeed={[0.5, 0.5]}
                radius={[1, 20]}
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

                <a
                    className={styles.link}
                    href={`mailto:${email}?subject=Marry%20Christmas!&body=http://christmast-card.vercel.app/card/${messageBase64}`}
                >
                    Send
                </a>
            </form>
        </main>
    );
}
