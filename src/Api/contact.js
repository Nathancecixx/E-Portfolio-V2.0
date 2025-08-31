// Contact.jsx
import React, { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

    async function onSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        // Honeypot: if bot fills this, silently succeed
        if (data.get("hp")) {
            setStatus({ sending: false, ok: true, msg: "Thanks! (hp)" });
            form.reset();
            return;
        }

        setStatus({ sending: true, ok: null, msg: "" });

        try {
            const res = await fetch("https://formspree.io/f/myzdwrpw", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
            });

            if (res.ok) {
                setStatus({ sending: false, ok: true, msg: "Message sent. I’ll get back to you soon!" });
                form.reset();
            } else {
                const j = await res.json().catch(() => ({}));
                setStatus({ sending: false, ok: false, msg: j?.error || "Something went wrong." });
            }
        } catch (err) {
            setStatus({ sending: false, ok: false, msg: String(err) });
        }
    }

    return (
        <section className="contact-section">
            <form onSubmit={onSubmit}>
                <div className="visually-hidden">
                    <label>Leave this empty</label>
                    <input name="hp" tabIndex={-1} autoComplete="off" />
                </div>

                <label>
                    Name*
                    <input name="name" type="text" minLength={2} required />
                </label>

                <label>
                    Email*
                    <input name="email" type="email" required />
                </label>

                <label>
                    Subject
                    <input name="subject" type="text" />
                </label>

                <label>
                    Message*
                    <textarea name="message" minLength={10} required rows={6} />
                </label>

                <button type="submit" disabled={status.sending}>
                    {status.sending ? "Sending…" : "Send"}
                </button>

                {status.ok === true && <p className="success">{status.msg}</p>}
                {status.ok === false && <p className="error">{status.msg}</p>}
            </form>
        </section>
    );
}
