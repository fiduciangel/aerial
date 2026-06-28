import { useState } from "react";
import { Check, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "../data/site";
import { classes } from "../data/classes";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SilkRibbons } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle(
    "Visit & Contact",
    "Come and say hello — book a class or private session at Levity in Portland's Belmont District, or ask us anything."
  );
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Visit / Contact"
        title={<>Come and <span className="text-gradient italic">say hello</span></>}
        intro={`Pop in for a class, book a private session, or just ask us anything. We're in Portland's ${site.location.neighborhood} and we love a good question.`}
      />

      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-16">
        {/* Info column */}
        <div className="space-y-6">
          <Reveal className="rounded-3xl border border-plum/10 bg-white/60 p-7">
            <h2 className="font-display text-2xl text-ink">Studio details</h2>
            <ul className="mt-5 space-y-4 text-ink-soft">
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum/10 text-plum">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="font-semibold text-ink">{site.location.address}</span>
                  <br />
                  {site.location.postal}
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum/10 text-plum">
                  <Phone size={18} />
                </span>
                <a href={`tel:${site.contact.phone}`} className="hover:text-plum">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum/10 text-plum">
                  <Mail size={18} />
                </span>
                <a href={`mailto:${site.contact.email}`} className="hover:text-plum">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="rounded-3xl border border-plum/10 bg-white/60 p-7">
            <h2 className="flex items-center gap-2 font-display text-2xl text-ink">
              <Clock size={20} className="text-clay" /> Opening hours
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {site.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-plum/8 pb-2.5 text-ink-soft last:border-0"
                >
                  <span>{h.day}</span>
                  <span className="font-semibold text-ink">{h.hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stylised "map" */}
          <Reveal className="relative h-52 overflow-hidden rounded-3xl bg-gradient-to-br from-sage via-plum to-plum-deep shadow-soft">
            <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.2} />
            <div className="bg-grain absolute inset-0 opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <MapPin size={32} className="drop-shadow" />
              <p className="mt-2 font-display text-xl">{site.location.neighborhood}</p>
              <p className="text-sm text-white/80">{site.location.city}, {site.location.region}</p>
            </div>
          </Reveal>
        </div>

        {/* Form column */}
        <Reveal className="rounded-3xl border border-plum/10 bg-white/70 p-7 shadow-soft sm:p-9">
          {sent ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-soft/50 text-plum-deep">
                <Check size={32} />
              </span>
              <h2 className="mt-5 font-display text-3xl text-ink">Message sent!</h2>
              <p className="mt-3 max-w-sm text-ink-soft">
                Thanks for reaching out — we'll be in touch within one business day.
                Get ready to float.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {site.contact.bookingNote}
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" id="name">
                    <input
                      id="name"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="Jamie Rivers"
                    />
                  </Field>
                  <Field label="Email" id="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </Field>
                </div>
                <Field label="I'm interested in" id="interest">
                  <select id="interest" name="interest" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Choose a class or topic…
                    </option>
                    <option value="intro">The $30 Intro Flight offer</option>
                    {classes.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                    <option value="private">Private / group booking</option>
                    <option value="other">Something else</option>
                  </select>
                </Field>
                <Field label="Message" id="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us a little about what you're after…"
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum px-6 py-3.5 font-semibold text-linen transition-all hover:-translate-y-0.5 hover:bg-plum-deep"
                >
                  Send message <Send size={16} />
                </button>
                <p className="text-center text-xs text-ink-soft">
                  Prefer to chat? Call us on{" "}
                  <a href={`tel:${site.contact.phone}`} className="font-semibold text-plum">
                    {site.contact.phone}
                  </a>
                  .
                </p>
              </form>
            </>
          )}
        </Reveal>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-plum/15 bg-linen/50 px-4 py-3 text-ink placeholder:text-ink-soft/80 transition-colors focus:border-plum focus:bg-white focus:outline-none";

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
