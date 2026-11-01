import type { Metadata } from "next";
import Hero from "../components/Hero";
import Photo from "../components/Photo";
import RoomCarousel from "../components/RoomCarousel";
import CtaBand from "../components/CtaBand";
import { ROOMS, SITE } from "../lib/content";

export const metadata: Metadata = {
  title: "Les chambres",
};

export default function EspaciosPage() {
  return (
    <>
      <Hero
        image="/images/Ciudad-artes-exterior.jpg"
        alt="Ciudad de las Artes y las Ciencias reflejada en el agua"
        eyebrow="Les chambres"
        title="4 chambres ouvertes sur les paysages préservés d'une forêt vallonnée"
      />

      {/* Introducción + fotos */}
      <section className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 py-20 md:grid-cols-[1fr_1fr] md:gap-20 md:px-8 md:py-32">
        <div className="space-y-5 text-lg leading-relaxed md:text-xl">
          <p>
            Situées en rez-de-jardin, lumineuses, accueillantes et en harmonie
            avec la nature, les chambres proposent une atmosphère sobre et
            délicate par le choix des matières. Elles sont pensées pour ne rien
            perdre de cet environnement exceptionnel et de cette lumière si
            particulière.
          </p>
          <p>
            Les petits déjeuners sont élaborés à partir de produits locaux et
            biologiques.
          </p>
        </div>
        <Photo
          src="/images/esqueleto.jpg"
          alt="Detalle de la cúpula"
          ratio="aspect-[3/4]"
          sizes="(min-width: 768px) 40vw, 100vw"
          caption="Fig. 2 — Écorces de chênes"
        />
      </section>

      {/* Habitaciones */}
      <div id="reserver" className="scroll-mt-20">
        <section className="mx-auto max-w-[1600px] px-5 pb-16 md:px-8 md:pb-20">
          <RoomCarousel />
        </section>
        {ROOMS.map((room) => (
          <section
            key={room.slug}
            className="mx-auto max-w-[1600px] px-5 pb-24 md:px-8 md:pb-32"
          >
            <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
              <div>
                <span
                  aria-hidden
                  className="mb-6 block h-12 w-12 bg-linen"
                />
                <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl">
                  {room.title[0]}
                  <br />
                  {room.title[1]}
                </h2>
                <a
                  href={`mailto:${SITE.email}?subject=Réservation – ${room.title.join(" ")}`}
                  className="mt-8 inline-block bg-wood px-6 py-3 font-sans text-[11px] font-light uppercase tracking-[0.18em] text-cream transition-colors hover:bg-wood-dark"
                >
                  Réserver cette chambre
                </a>
              </div>

              <ul className="grid gap-x-10 font-sans text-[12px] font-light sm:grid-cols-2">
                {room.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-ink/25 py-2 text-ink/85"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Les Grands Chênes */}
      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-8 md:pb-32">
        <div className="bg-linen/60 px-6 py-16 text-center md:py-24">
          <p className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-ink/60">
            {SITE.tagline}
          </p>
          <h2 className="mt-5 font-sans text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Les Grands Chênes
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed md:text-xl">
            Un espace bien-être, un jardin et des espaces de partage pensés
            pour le repos, la lecture et la contemplation.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-block bg-wood px-6 py-3 font-sans text-[11px] font-light uppercase tracking-[0.18em] text-cream transition-colors hover:bg-wood-dark"
          >
            Nous contacter
          </a>
        </div>
      </section>

      <CtaBand
        eyebrow="La découverte"
        title="Une vallée de villages, de grottes et de châteaux à explorer"
        href="/alrededores"
        label="Découvrir les alentours"
        image="/images/lonja.jpg"
      />
    </>
  );
}
