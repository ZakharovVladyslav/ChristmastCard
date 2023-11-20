"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import { useSearchParams } from "next/navigation";
import Button from "@/сomponents/Button";
import LinkedButton from "@/сomponents/LinkedButton";
import { useState } from "react";
import Snowfall from "react-snowfall";

export default function CardPage() {
    const params = useSearchParams();
    const messageBase64 = params.get("message") ?? "";
    const message = new Buffer(messageBase64, "base64").toString("utf-8");

    const [didUserLikedCard, setDidUserLikedCard] = useState<boolean>(false);

    return (
        <main className={styles.main}>
            <Snowfall
                snowflakeCount={100}
            />

            <div className={styles.globeImageWrapper}>
                <Image
                    className={styles.card}
                    src={"/globe.svg"}
                    alt="Christmas Card Image"
                    fill
                    objectFit="contain"
                />
            </div>

            <div className={styles.line}></div>

            <div className={styles.bowImageWrapper}>
                <Image
                    className={styles.bow}
                    src={"/bow.svg"}
                    alt="Bow vector"
                    fill
                />
            </div>

            <div className={styles.table}>
                <div className={styles.content}>
                    <p className={styles.message}>{message}</p>

                    {didUserLikedCard ? (
                        <div className={styles.cardButtonsSection}>
                            <h3 className={styles.cardRateTitle}>
                                You can send a card to your friend
                            </h3>

                            <div className={styles.cardRateButtons}>
                                <Button
                                    size="small"
                                    type="destructive"
                                    onClick={() => setDidUserLikedCard(false)}
                                >
                                    Back
                                </Button>
                                <LinkedButton
                                    size="small"
                                    type="constructive"
                                    href="/"
                                >
                                    Send
                                </LinkedButton>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.cardButtonsSection}>
                            <h3 className={styles.cardRateTitle}>
                                Did you like the card?
                            </h3>

                            <div className={styles.cardRateButtons}>
                                <Button
                                    size="small"
                                    type="destructive"
                                    onClick={() => {}}
                                >
                                    No
                                </Button>
                                <Button
                                    size="small"
                                    type="constructive"
                                    onClick={() => setDidUserLikedCard(true)}
                                >
                                    Yes
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
