import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import RenovationProgress from "../components/RenovationProgress";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { newsItems } from "./news";

export default function Aktuelles() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <PageHero
        eyebrow="Aktuelles"
        title="Renovierungsplan und Wiedereröffnung"
        description={
          <>
            Die wichtigsten Informationen zur aktuellen Schließung, zur geplanten Wiedereröffnung und zu neuen Meldungen
            aus der Gemeinde. Die Moschee bleibt <strong>vorübergehend geschlossen</strong>; ein genauer Termin für die
            Wiedereröffnung kann derzeit noch nicht bekannt gegeben werden.
          </>
        }
      />

      <section className="mx-auto -mt-8 max-w-5xl px-6 pb-8">
        <RenovationProgress />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B8942E]">Neuigkeiten</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-emerald-950">Aktuelle Meldungen</h2>
        </div>

        <div className="divide-y divide-slate-200">
          {newsItems.map((item) => (
            <article key={item.slug} className="grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
              <Link href={`/aktuelles/${item.slug}`} className="relative block h-44 overflow-hidden bg-slate-200">
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 260px, 100vw"
                  className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </Link>

              <div>
                <Link
                  href={`/aktuelles/${item.slug}`}
                  className="text-2xl font-bold tracking-tight text-emerald-950 transition-colors hover:text-[#B8942E]"
                >
                  {item.title}
                </Link>
                <p className="mt-3 inline-block bg-[#F2E96B] px-2 py-1 text-sm font-medium text-emerald-950">
                  {item.date}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
