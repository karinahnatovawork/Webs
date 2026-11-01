import type { Metadata } from "next";
import Hero from "./components/Hero";
import Photo from "./components/Photo";
import CtaBand from "./components/CtaBand";

export const metadata: Metadata = {
  title: "La maison",
};

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/cupula.jpg"
        alt="Cúpula iluminada con vidrieras"
        eyebrow="La maison"
        title="La nature comme modèle pour une éthique de vie heureuse et équilibrée."
      />

      {/* Introducción */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-xl space-y-6 text-lg leading-relaxed md:text-xl">
          <p>
            Construite au cœur d&apos;une forêt chênes de la Vallée de la
            Vézère, site inscrit au Patrimoine Mondial de l&apos;UNESCO, la
            maison a été conçue comme un lieu dédié à l&apos;évasion, au repos
            et à la créativité.
          </p>
          <p>
            Observatoire du vivant, les immenses façades vitrées proposent une
            véritable immersion dans la frondaison abondante des grands chênes
            du bois environnant. Elles ouvrent notre imaginaire et offrent un
            tableau naturel en mouvement, évoluant au rythme du temps et des
            saisons.
          </p>
        </div>
      </section>

      {/* Cita editorial */}
      <section className="mx-auto max-w-[1600px] px-5 pb-16 md:px-8 md:pb-24">
        <blockquote className="max-w-4xl font-serif text-2xl font-light leading-snug md:text-4xl">
          « Installés en ligne de crête, les chambres et les espaces de
          partage et de bien-être sont comme suspendus dans le feuillage de la
          chênaie. »
        </blockquote>
      </section>

      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <Photo
          src="/images/mercado.jpg"
          alt="Interior del Mercado Central de Valencia"
          ratio="aspect-[4/3] md:aspect-[16/8]"
          sizes="100vw"
        />
      </div>

      {/* Arquitectura */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-xl space-y-6 text-lg leading-relaxed md:text-xl">
          <p>
            Entre architecture vernaculaire et création contemporaine, la
            maison affirme son appartenance à notre époque, comme une nouvelle
            strate ajoutée à la sédimentation de ce site constitué de bâtisses
            anciennes en pierre et en lauze.
          </p>
          <p>
            Elle réinterprète les formes traditionnelles des constructions
            typiques de Dordogne et réutilise des matériaux déjà présents sur
            le site. La pierre, récupérée sur d&apos;anciennes constructions
            agricoles en ruine, et le bois, issu des forêts environnantes,
            dialoguent et révèlent les lignes verticales et élancées des
            troncs d&apos;arbres.
          </p>
        </div>
      </section>

      {/* Mosaico de fotos */}
      <section className="mx-auto grid max-w-[1600px] gap-4 px-5 pb-24 md:grid-cols-2 md:gap-6 md:px-8 md:pb-32">
        <Photo
          src="/images/lonja.jpg"
          alt="Fachada gótica de la Lonja de la Seda"
          ratio="aspect-[4/3]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <Photo
          src="/images/naranjas.jpg"
          alt="Naranjos en flor"
          ratio="aspect-[4/3]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <Photo
          src="/images/azulejos.jpg"
          alt="Azulejos azules y blancos"
          ratio="aspect-[4/3]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <Photo
          src="/images/ciudad-artes.jpg"
          alt="Ciudad de las Artes y las Ciencias"
          ratio="aspect-[4/3]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </section>

      <CtaBand
        eyebrow="Les chambres"
        title="4 chambres ouvertes sur les paysages préservés d'une forêt vallonnée"
        href="/espacios"
        label="Découvrir les chambres"
        image="/images/plaza-virgen.jpg"
      />
    </>
  );
}
