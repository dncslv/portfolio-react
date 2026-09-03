import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { PROFILE } from "../data.js";

const SOCIALS = [
  { icon: FaEnvelope, label: "Email", value: null, href: null, key: "email" },
  { icon: FaPhone, label: "Phone", value: null, href: null, key: "phone" },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/danica-rose-salve", key: "linkedin" },
  { icon: FaGithub, label: "GitHub", value: "github.com/dncslv", key: "github" },
  { icon: FaFacebook, label: "Facebook", value: "facebook.com/danica.rosesalve10", key: "facebook" },
  { icon: FaInstagram, label: "Instagram", value: "@danica_salve", key: "instagram" },
];

function resolveHref(key) {
  switch (key) {
    case "email":
      return `mailto:${PROFILE.email}`;
    case "phone":
      return `tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`;
    case "linkedin":
      return PROFILE.socials.linkedin;
    case "github":
      return PROFILE.socials.github;
    case "facebook":
      return PROFILE.socials.facebook;
    case "instagram":
      return PROFILE.socials.instagram;
    default:
      return "#";
  }
}

function resolveValue(key) {
  if (key === "email") return PROFILE.email;
  if (key === "phone") return PROFILE.phone;
  return SOCIALS.find((s) => s.key === key)?.value;
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const formReady = Boolean(PROFILE.formEndpoint);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formReady) return;

    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(PROFILE.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface-soft border-t border-border">
      <div className="section-container py-20 grid md:grid-cols-2 gap-14">
        <div>
          <p className="eyebrow mb-3">06 · Contact</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            Let's work together
          </h2>
          <p className="mt-4 text-ink-900/60 max-w-sm">
            Send a message and it'll land straight in my inbox — or reach me
            directly below.
          </p>

          <ul className="mt-8 space-y-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.key}>
                  <a
                    href={resolveHref(s.key)}
                    target={s.key === "email" || s.key === "phone" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-ink-900/70 hover:text-accent transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    {resolveValue(s.key)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-border rounded-2xl shadow-card p-8 flex flex-col gap-5"
        >
          <label className="flex flex-col gap-1.5 text-sm text-ink-900/70">
            Name
            <input
              type="text"
              name="name"
              required
              className="rounded-md border border-border bg-surface-soft px-4 py-2.5 text-ink-900 focus:outline-none focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-ink-900/70">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-md border border-border bg-surface-soft px-4 py-2.5 text-ink-900 focus:outline-none focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-ink-900/70">
            Message
            <textarea
              name="message"
              rows={5}
              required
              className="rounded-md border border-border bg-surface-soft px-4 py-2.5 text-ink-900 focus:outline-none focus:border-accent resize-y"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending" || !formReady}
            className="rounded-md bg-accent text-white font-semibold py-3 hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 font-medium">
              Thanks! Your message was sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 font-medium">
              Something went wrong sending your message. Please try again or
              email me directly at {PROFILE.email}.
            </p>
          )}
          {!formReady && (
            <p className="text-xs text-ink-900/35">
              Form isn't connected yet — add your Formspree endpoint to{" "}
              <code>PROFILE.formEndpoint</code> in <code>src/data.js</code>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
