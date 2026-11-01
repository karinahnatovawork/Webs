import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  /** Altura: full = pantalla completa, tall = ~75vh */
  size?: "full" | "tall";
  cta?: { href: string; label: string };
};

export default function Hero({
  image,
  alt,
  eyebrow,
  title,
  size = "full",
  cta,
}: HeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-stone-700 ${
        size === "full" ? "h-screen min-h-[560px]" : "h-[75vh] min-h-[480px]"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Filtro oscuro sutil para que el texto resalte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-12 md:px-8 md:pb-16">
        {eyebrow && (
          <p className="mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-2xl font-serif text-3xl font-light leading-[1.15] text-white md:text-5xl">
          {title}
        </h1>
        {cta && (
          <Link
            href={cta.href}
            className="mt-6 inline-block border-b border-white/70 pb-1 font-sans text-[11px] font-light uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
          >
            {cta.label}
          </Link>
        )}
      </div>

      <Link
        href="/espacios#reserver"
        className="absolute right-5 top-20 hidden h-20 w-20 items-center justify-center rounded-full bg-wood font-serif text-sm italic text-cream shadow-lg transition-colors hover:bg-wood-dark md:flex md:right-8"
      >
        Réserver
      </Link>
    </section>
  );
}
