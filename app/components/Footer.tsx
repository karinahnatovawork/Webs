import Link from "next/link";
import { NAV_LINKS, SITE } from "../lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-cream/60">
          {SITE.tagline}
        </p>
        <h2 className="mt-5 font-sans text-3xl font-light uppercase leading-tight tracking-[0.12em] md:text-4xl">
          Les Grands
          <br />
          Chênes
        </h2>

        <address className="mt-8 font-sans text-[10px] font-light uppercase not-italic leading-relaxed tracking-[0.14em] text-cream/70">
          {SITE.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 block normal-case tracking-wider hover:text-cream"
          >
            {SITE.email}
          </a>
          <a
            href={`tel:${SITE.phoneHref}`}
            className="block tracking-wider hover:text-cream"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block hover:text-cream"
          >
            Instagram
          </a>
        </address>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 pb-8 font-sans text-[10px] font-light uppercase tracking-[0.16em] text-cream/55 md:flex-row md:px-8">
        <p>
          © {SITE.houseName} {SITE.year}
        </p>
        <ul className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-cream">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="hidden md:block">Identité · Photos · Site</p>
      </div>
    </footer>
  );
}
