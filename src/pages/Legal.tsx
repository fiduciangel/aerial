import { legal } from "../data/legal";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const doc = legal[kind];
  useDocumentTitle(doc.title, doc.intro);

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={doc.title}
        intro={`Last updated ${doc.updated}.`}
      />
      <article className="container-page max-w-3xl py-14">
        <p className="border-l-2 border-clay pl-5 text-lg leading-relaxed text-ink-soft">
          {doc.intro}
        </p>
        <div className="mt-10 space-y-8">
          {doc.sections.map((s) => (
            <Reveal key={s.heading}>
              <h2 className="font-display text-2xl text-ink">{s.heading}</h2>
              <div className="mt-3 space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </article>
    </>
  );
}
