import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const EMAIL = "Nceci6042@conestogac.on.ca";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzdwrpw";

// ---------- Helpers ----------
const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").toLowerCase());
const trim = (v) => String(v ?? "").trim();

const computeErrors = (form) => {
    const errs = {};
    if (trim(form.name).length < 2) errs.name = "Please enter at least 2 characters.";
    if (!validateEmail(form.email)) errs.email = "Please enter a valid email.";
    if (trim(form.message).length < 10) errs.message = "Please write at least 10 characters.";
    if (form.hp) errs.hp = "Spam detected.";
    return errs;
};

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", hp: "" });
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | loading | done | error | invalid
    const [shake, setShake] = useState(false);

    // refs for focusing first invalid field on submit
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
    }, []);

    // Validate a single field if it has been touched
    const validateField = (name, value) => {
        const snapshot = { ...form, [name]: value };
        const e = computeErrors(snapshot);
        setErrors((prev) => ({ ...prev, [name]: e[name] || "" }));
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (touched[name]) validateField(name, value);
    };

    const onBlur = (e) => {
        const { name } = e.target;
        setTouched((t) => ({ ...t, [name]: true }));
        validateField(name, form[name]);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setStatus({ state: "copied", msg: "Email copied ✓" });
            setTimeout(() => setStatus({ state: "idle", msg: "" }), 1500);
        } catch {
            /* ignore */
        }
    };

    const focusFirstInvalid = (errs) => {
        if (errs.name && nameRef.current) return nameRef.current.focus();
        if (errs.email && emailRef.current) return emailRef.current.focus();
        if (errs.message && messageRef.current) return messageRef.current.focus();
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // mark fields as touched, compute full errors
        const allTouched = { name: true, email: true, message: true, subject: touched.subject, hp: touched.hp };
        setTouched(allTouched);
        const errs = computeErrors(form);
        setErrors(errs);

        // Honeypot: silently succeed (wastes bot cycles, avoids API call)
        if (form.hp) {
            setStatus({ state: "done", msg: "Thanks! I’ll get back to you soon." });
            setForm({ name: "", email: "", subject: "", message: "", hp: "" });
            setTouched({});
            return;
        }

        // Block submission if any errors
        if (Object.keys(errs).some((k) => errs[k])) {
            setStatus({ state: "invalid", msg: "Please fix the highlighted fields." });
            setShake(true);
            focusFirstInvalid(errs);
            setTimeout(() => setShake(false), 450); // small shake animation
            return;
        }

        // Submit
        setStatus({ state: "loading", msg: "" });
        try {
            const fd = new FormData();
            fd.append("name", trim(form.name));
            fd.append("email", trim(form.email));
            fd.append("subject", trim(form.subject));
            fd.append("message", trim(form.message));

            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: fd,
            });

            if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                throw new Error(j?.error || `HTTP ${res.status}`);
            }

            // success: show visual confirmation and clear errors/touched
            setStatus({ state: "done", msg: "Thanks! I’ll get back to you soon." });
            setForm({ name: "", email: "", subject: "", message: "", hp: "" });
            setTouched({});
            setErrors({});
            // revert UI back from "sent" after a moment
            setTimeout(() => setStatus({ state: "idle", msg: "" }), 2500);
        } catch (err) {
            setStatus({ state: "error", msg: "Could not send via form. Try again or email me directly." });
            setShake(true);
            setTimeout(() => setShake(false), 450);
        }
    };

    const hasError = (k) => Boolean(errors[k]);
    const isLoading = status.state === "loading";
    const isSent = status.state === "done";

    return (
        <section className="contact-section" id="contact">
            <div className="contact-inner">
                <h2 className="contact-title" data-aos="fade-up">
                    <span className="grad">Get In Touch</span>
                    <span className="sparkle" aria-hidden="true" />
                </h2>

                <div className="contact-grid">
                    {/* Left: quick info */}
                    <aside className="card contact-card" data-aos="fade-right">
                        <div className="card__inner">
                            <h3 className="contact-subtitle">Let’s build something!</h3>
                            <p className="contact-lead">
                                I’m open to co-ops, internships, freelance, and collabs. The fastest way to reach me is this form or email.
                            </p>

                            <ul className="contact-list" role="list">
                                <li className="contact-item" role="listitem">
                  <span className="icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                                    <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a>
                                    <button className="chip" onClick={copyEmail} type="button">Copy</button>
                                </li>

                                <li className="contact-item" role="listitem">
                  <span className="icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.31 3.51 1 .11-.8.42-1.31.77-1.61-2.67-.3-5.48-1.34-5.48-5.96 0-1.31.47-2.39 1.24-3.24-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.64.25 2.85.13 3.15.77.85 1.23 1.93 1.23 3.24 0 4.63-2.81 5.65-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"/>
                    </svg>
                  </span>
                                    <a className="link" href="https://github.com/Nathancecixx" target="_blank" rel="noreferrer">
                                        github.com/Nathancecixx
                                    </a>
                                </li>

                                <li className="contact-item" role="listitem">
                  <span className="icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M10.5 13.5 13.5 10.5" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M7 17a4.24 4.24 0 0 1 0-6l2-2a4.24 4.24 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M17 7a4.24 4.24 0 0 1 0 6l-2 2a4.24 4.24 0 0 1-6 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </span>
                                    <a className="link" href="https://www.nathanceci.com" target="_blank" rel="noreferrer">
                                        nathanceci.com
                                    </a>
                                </li>
                            </ul>

                            {status.state === "copied" && (
                                <div className="toast" role="status" aria-live="polite">{status.msg}</div>
                            )}
                        </div>
                    </aside>

                    {/* Right: form */}
                    <div className="card form-card" data-aos="fade-left">
                        <div className="card__inner">
                            <form
                                className={`contact-form ${shake ? "shake" : ""}`}
                                onSubmit={onSubmit}
                                noValidate
                                aria-describedby="form-status"
                            >
                                {/* Honeypot (visible to bots, off-screen to users) */}
                                <input
                                    type="text"
                                    name="hp"
                                    autoComplete="off"
                                    tabIndex="-1"
                                    className="hp-field"
                                    value={form.hp}
                                    onChange={onChange}
                                    aria-hidden="true"
                                />

                                <div className="row">
                                    <div className={`field ${hasError("name") ? "has-error" : ""}`}>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            ref={nameRef}
                                            value={form.name}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            placeholder="Satoshi Nakamoto"
                                            autoComplete="name"
                                            aria-invalid={hasError("name")}
                                            aria-describedby={hasError("name") ? "err-name" : undefined}
                                        />
                                        {touched.name && errors.name && <span id="err-name" className="err">{errors.name}</span>}
                                    </div>

                                    <div className={`field ${hasError("email") ? "has-error" : ""}`}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            ref={emailRef}
                                            value={form.email}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            placeholder="you@domain.com"
                                            autoComplete="email"
                                            aria-invalid={hasError("email")}
                                            aria-describedby={hasError("email") ? "err-email" : undefined}
                                        />
                                        {touched.email && errors.email && <span id="err-email" className="err">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="field">
                                    <label htmlFor="subject">Subject (optional)</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={form.subject}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className={`field ${hasError("message") ? "has-error" : ""}`}>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        ref={messageRef}
                                        value={form.message}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        placeholder="Say Hello 🙂"
                                        aria-invalid={hasError("message")}
                                        aria-describedby={hasError("message") ? "err-message" : undefined}
                                    />
                                    {touched.message && errors.message && <span id="err-message" className="err">{errors.message}</span>}
                                </div>

                                <div className="actions">
                                    <button
                                        type="submit"
                                        className={`btn btn--primary ${isLoading ? "is-loading" : ""} ${isSent ? "is-sent" : ""}`}
                                        disabled={isLoading}
                                        aria-busy={isLoading}
                                    >
                    <span className="btn__icon btn__icon--plane" aria-hidden="true">
                      {/* paper plane */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 12L21 3l-5 18-5-7-8-2z" />
                      </svg>
                    </span>
                                        <span className="btn__icon btn__icon--check" aria-hidden="true">
                      {/* check */}
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                                        <span className="btn__label">
                      {isLoading ? "Sending…" : isSent ? "Sent" : "Send Message"}
                    </span>
                                    </button>

                                    <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>Email me instead</a>
                                </div>

                                <p id="form-status" className="status" role="status" aria-live="polite">
                                    {status.state === "invalid" && status.msg}
                                    {status.state === "error" && status.msg}
                                    {status.state === "done" && "Thanks! I’ll get back to you soon."}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                <noscript>
                    <p className="nojs">
                        JavaScript disabled. Please email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                    </p>
                </noscript>
            </div>
        </section>
    );
}
