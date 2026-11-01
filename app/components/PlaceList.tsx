import type { Place } from "../lib/content";

type PlaceListProps = {
  title: string;
  items: Place[];
};

/** Bloque editorial: título serif + lista con distancia / nota en cursiva. */
export default function PlaceList({ title, items }: PlaceListProps) {
  return (
    <section className="py-12 md:py-16">
      <h2 className="font-serif text-3xl font-light md:text-4xl">{title}</h2>
      <ul className="mt-8 space-y-1.5 text-lg leading-snug md:text-[19px]">
        {items.map((item) => (
          <li key={item.name}>
            {item.name}
            {(item.distance || item.note) && (
              <em className="text-ink/70">
                {" "}
                ({[item.note, item.distance].filter(Boolean).join(", ")})
              </em>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
