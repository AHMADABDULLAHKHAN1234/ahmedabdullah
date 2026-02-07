"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to submit");

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>

            <div className={styles.group}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="How can we work together?"></textarea>
            </div>

            <button type="submit" disabled={status === "submitting" || status === "success"} className={styles.button}>
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            </button>

            {status === "error" && <p className={styles.error}>Something went wrong. Please try again.</p>}
        </form>
    );
}
