import { useState } from "react";
import { Check, Send } from "lucide-react";
import { copy } from "../data/site";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <section className="container-page py-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-plum via-plum-deep to-ink px-6 py-14 text-center sm:px-12">
        <div className="bg-grain absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-xl">
          <span className="eyebrow is-centered text-clay-soft">Stay in the loop</span>
          <h2 className="mt-4 font-display text-3xl text-linen sm:text-4xl">
            {copy.newsletter.title}
          </h2>
          <p className="mt-4 text-linen/75">{copy.newsletter.body}</p>

          {done ? (
            <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full bg-linen/15 px-6 py-3 text-linen">
              <Check size={20} className="text-sage-soft" />
              You're on the list — welcome to the float.
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-linen/20 bg-linen/10 px-5 py-3 text-linen placeholder:text-linen/50 focus:border-clay focus:bg-linen/15 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-clay px-6 py-3 font-semibold text-white transition-all hover:bg-clay-deep hover:-translate-y-0.5"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
