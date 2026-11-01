import type { Metadata } from "next";
import Hero from "../components/Hero";
import PlaceList from "../components/PlaceList";
import CtaBand from "../components/CtaBand";
import {
  ACTIVITIES,
  EVENTS,
  PLACES_SITES,
  PLACES_VILLAGES,
} from "../lib/content";

export const metadata: Metadata = {
  title: "La découverte",
};

export default function AlrededoresPage() {
  return (
    <>
      <Hero
        image="/images/lonja.jpg"
        alt="Fachada gótica de la Lonja de la Seda con naranjos"
        eyebrow="La découverte"
        title="Nichée au cœur de la Vallée de la Vézère, vallée de la préhistoire et des châteaux classée au Patrimoine mondial de l'UNESCO."
      />

      <div className="mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-32">
        <p className="text-lg leading-relaxed md:text-xl">
          Sans usage excessif de votre voiture, vous pourrez découvrir des
          villages et des lieux d&apos;exception, écouter des concerts ou
          assister à des représentations théâtrales de grande qualité,
          découvrir les sentiers sinueux de notre région ou encore vous
          laisser porter par le doux courant de nos rivières.
        </p>

        <div className="mt-12 divide-y divide-ink/15 [&>section:first-child]:pt-0">
          <div>
            <PlaceList title="Les lieux" items={PLACES_VILLAGES} />
            <ul className="-mt-4 space-y-1.5 pb-12 text-lg leading-snug md:text-[19px]">
              {PLACES_SITES.map((item) => (
                <li key={item.name}>
                  {item.name}
                  <em className="text-ink/70"> ({item.distance})</em>
                </li>
              ))}
            </ul>
          </div>
          <PlaceList title="Les activités" items={ACTIVITIES} />
          <PlaceList title="Les évènements" items={EVENTS} />

          <section className="py-12 md:py-16">
            <h2 className="font-serif text-3xl font-light md:text-4xl">
              La gastronomie
            </h2>
            <p className="mt-8 text-lg leading-relaxed md:text-[19px]">
              De nombreuses adresses à proximité que nous vous conseillerons
              avec plaisir.
            </p>
          </section>
        </div>
      </div>

      <CtaBand
        eyebrow="La maison"
        title="La nature comme modèle pour une éthique de vie heureuse et équilibrée."
        href="/"
        label="Découvrir la maison"
        image="/images/plaza-virgen.jpg"
      />
    </>
  );
}
