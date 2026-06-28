import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { getPost, posts } from "../data/posts";
import { getInstructor } from "../data/instructors";
import { formatDate } from "../lib/format";
import { Reveal } from "../components/Reveal";
import { PostCard } from "../components/PostCard";
import { InstructorPortrait } from "../components/InstructorCard";
import { AerialGlyph, SilkRibbons } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import NotFound from "./NotFound";

const motifFor = (id: string): "silk" | "flow" | "cocoon" | "invert" | "split" => {
  if (id.includes("wear")) return "split";
  if (id.includes("decompress") || id.includes("science")) return "cocoon";
  if (id.includes("drop") || id.includes("grip")) return "invert";
  if (id.includes("first")) return "silk";
  return "flow";
};

export default function JournalPost() {
  const { id } = useParams();
  const post = id ? getPost(id) : undefined;

  useDocumentTitle(post ? post.title : "Article not found", post?.excerpt);

  if (!post) return <NotFound />;

  const author = getInstructor(post.authorId);
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <header className={`relative overflow-hidden bg-gradient-to-br ${post.hue} pt-32 pb-16 sm:pt-36`}>
        <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.28} />
        <div className="bg-grain absolute inset-0 opacity-30" />
        {/* Left-weighted scrim keeps text readable over any post hue. */}
        <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/85 via-plum-deep/45 to-transparent" />
        <AerialGlyph
          motif={motifFor(post.id)}
          className="absolute -right-8 top-8 hidden h-80 w-80 opacity-45 md:block"
        />
        <div className="container-page relative max-w-3xl">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-sm font-medium text-linen/85 transition-colors hover:text-linen"
          >
            <ArrowLeft size={16} /> All articles
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-plum-deep">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-linen sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-linen/85">
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {post.readTimeMin} min read
            </span>
          </div>
        </div>
      </header>

      <article className="container-page max-w-3xl py-14">
        <p className="border-l-2 border-clay pl-5 font-display text-2xl leading-relaxed text-ink">
          {post.excerpt}
        </p>

        <div className="mt-10 space-y-8">
          {post.body.map((section, i) => (
            <Reveal key={i}>
              {section.heading && (
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  {section.heading}
                </h2>
              )}
              <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-plum/8 px-3 py-1 text-xs font-medium text-plum"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Author */}
        {author && (
          <div className="mt-12 flex items-center gap-5 rounded-3xl border border-plum/10 bg-white/60 p-6">
            <InstructorPortrait
              instructor={author}
              className="h-20 w-20 shrink-0 rounded-2xl"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-clay-deep">
                Written by
              </p>
              <Link
                to="/instructors"
                className="font-display text-xl text-ink hover:text-plum"
              >
                {author.name}
              </Link>
              <p className="text-sm text-ink-soft">{author.role}</p>
            </div>
          </div>
        )}
      </article>

      {/* Related */}
      <section className="bg-cream/60 py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl text-ink">More from the journal</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.id}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
