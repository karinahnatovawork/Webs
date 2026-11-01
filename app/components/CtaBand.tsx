import Image from "next/image";
import Link from "next/link";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  href: string;
  label: string;
  image?: string;
};

export default function CtaBand({
  eyebrow,
  title,
  href,
  label,
  image,
}: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-sand">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-black/40" />
        </>
      )}
      <div className="mx-auto max-w-[1600px] px-5 py-24 text-white md:px-8 md:py-36">
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-white/80">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-3xl font-light leading-tight md:text-4xl">
          {title}
        </h2>
        <Link
          href={href}
          className="mt-6 inline-block font-serif text-lg italic transition-opacity hover:opacity-70"
        >
          {label} →
        </Link>
      </div>
    </section>
  );
}
