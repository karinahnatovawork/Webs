import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  /** Proporción Tailwind, p. ej. "aspect-[3/2]" */
  ratio?: string;
  sizes?: string;
  className?: string;
  caption?: string;
};

/**
 * Imagen con fondo neutro mientras carga (o si aún no has colocado el archivo
 * en /public/images).
 */
export default function Photo({
  src,
  alt,
  ratio = "aspect-[3/2]",
  sizes = "(min-width: 1024px) 1100px, 100vw",
  className = "",
  caption,
}: PhotoProps) {
  return (
    <figure className={className}>
      <div className={`relative w-full overflow-hidden bg-linen ${ratio}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-ink/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
