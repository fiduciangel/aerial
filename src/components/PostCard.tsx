import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import type { Post } from "../data/posts";
import { getInstructor } from "../data/instructors";
import { formatDate } from "../lib/format";
import { AerialGlyph, SilkRibbons } from "./art/SilkArt";

const motifFor = (id: string): "silk" | "flow" | "cocoon" | "invert" | "split" => {
  if (id.includes("wear")) return "split";
  if (id.includes("decompress") || id.includes("science")) return "cocoon";
  if (id.includes("drop") || id.includes("grip")) return "invert";
  if (id.includes("first")) return "silk";
  return "flow";
};

export function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  const author = getInstructor(post.authorId);
  return (
    <Link
      to={`/journal/${post.id}`}
      className={`group flex overflow-hidden rounded-3xl border border-plum/10 bg-white/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${post.hue} ${
          featured ? "h-52 lg:h-auto lg:w-1/2" : "h-40"
        }`}
      >
        <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.35} />
        <AerialGlyph
          motif={motifFor(post.id)}
          className="absolute inset-0 h-full w-full p-8 transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-plum-deep">
          {featured ? "Featured · " : ""}
          {post.category}
        </span>
      </div>
      <div
        className={`flex flex-1 flex-col p-6 ${
          featured ? "lg:justify-center lg:p-10" : ""
        }`}
      >
        <div className="flex items-center gap-3 text-xs text-ink-soft">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={13} /> {post.readTimeMin} min read
          </span>
        </div>
        <h3
          className={`mt-3 font-display leading-snug text-ink group-hover:text-plum ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p
          className={`mt-2 flex-1 leading-relaxed text-ink-soft ${
            featured ? "text-base lg:flex-none" : "text-sm"
          }`}
        >
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-plum/10 pt-4">
          <span className="text-xs font-medium text-ink-soft">
            {author ? `By ${author.name.split(" ")[0]}` : ""}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-plum group-hover:text-clay">
            {featured && <span className="hidden sm:inline">Read article</span>}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
