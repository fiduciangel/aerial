import { posts } from "../data/posts";
import { PageHeader } from "../components/PageHeader";
import { PostCard } from "../components/PostCard";
import { Reveal } from "../components/Reveal";
import { Newsletter } from "../components/Newsletter";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Journal() {
  useDocumentTitle(
    "Journal",
    "Notes from the silks — beginner guides, the science of aerial yoga, and gentle encouragement for wherever you are in your practice."
  );
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="The journal"
        title={<>Notes from the <span className="text-gradient italic">silks</span></>}
        intro="Guides for beginners, the science of why this feels so good, and gentle encouragement for wherever you are in your practice."
      />

      <section className="container-page py-12 sm:py-16">
        {/* Featured */}
        <Reveal className="mb-12">
          <PostCard post={featured} />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Reveal key={p.id}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
