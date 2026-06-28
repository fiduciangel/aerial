import { LinkButton } from "../components/Button";
import { AerialGlyph } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <div className="relative h-48 w-48">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush via-mauve to-plum opacity-80" />
        <AerialGlyph motif="invert" className="absolute inset-0 h-full w-full p-8" />
      </div>
      <p className="eyebrow is-centered mt-10">Error 404</p>
      <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
        This page floated away.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you're looking for has drifted off into the silks. Let's get you
        back to solid ground.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton to="/" variant="primary" size="lg">
          Back home
        </LinkButton>
        <LinkButton to="/classes" variant="ghost" size="lg">
          Browse classes
        </LinkButton>
      </div>
    </section>
  );
}
