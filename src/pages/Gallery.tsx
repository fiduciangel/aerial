import { gallery } from "../data/gallery";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { AerialPlate } from "../components/art/SilkArt";
import { CTABanner } from "../components/CTABanner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Gallery() {
  useDocumentTitle(
    "Gallery",
    "Moments from the Levity studio floor — light, silk, and the feeling of flight in our converted Belmont warehouse."
  );
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments from the <span className="text-gradient italic">studio floor</span></>}
        intro="A little of the light, the silk, and the feeling. Our space is a converted Belmont warehouse where afternoon sun pours through the skylights."
      />

      <section className="container-page py-12 sm:py-16">
        <div className="grid auto-rows-[16rem] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 4) * 60}
              className={item.wide ? "col-span-2" : ""}
            >
              <AerialPlate
                motif={item.motif}
                hue={item.hue}
                caption={item.caption}
                className="h-full w-full shadow-soft transition-shadow duration-300 hover:shadow-lift"
              />
              <span className="sr-only">{item.alt}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
