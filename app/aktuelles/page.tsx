import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const progressImages = [
  { src: "/kuecheneu.jpg", alt: "Neue Küche", caption: "Die neue Küche ist eingebaut" },
  { src: "/wudubereichneu.jpg", alt: "Neuer Wudu-Bereich", caption: "Der Wudu-Bereich wurde renoviert" },
  { src: "/Toiletteneu2.jpeg", alt: "Neue Toilette", caption: "Die Toiletten wurden erneuert" },
  { src: "/eingangneu.jpg", alt: "Neuer Flur", caption: "Der neue Boden wurde gelegt" },
];

export default function Aktuelles() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <section className="bg-emerald-950 px-6 py-16 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#D4AF37] md:text-5xl font-serif">
          Aktuelles & Renovierung
        </h1>
      </section>

      <section className="mx-auto -mt-8 max-w-5xl px-6 py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
            <Image
              src="/Moscheeflyer3.jpeg"
              alt="Aktueller Moschee Flyer"
              width={900}
              height={1200}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-emerald-900">
              Schritt für Schritt ins neue Zuhause
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Alhamdulillah, die Arbeiten an unserer Moschee haben begonnen. Unser Ziel ist es, unsere Moschee in einen
              modernen und einladenden Ort zu verwandeln - einen Ort, an dem unsere Gemeinschaft zusammenkommt und ihren
              Glauben praktiziert. In den kommenden Monaten veröffentlichen wir hier regelmäßig Updates.
            </p>
            <div className="rounded-r-2xl border-l-4 border-[#D4AF37] bg-orange-50 p-5 text-sm text-slate-700 shadow-sm">
              <strong className="mb-2 block text-emerald-950">Wichtiger Hinweis zur Umsetzung</strong>
              Alle Fortschritte hängen maßgeblich von den eingehenden Spenden ab. Da unsere Helfer diese Aufgabe
              ehrenamtlich neben Beruf und Studium übernehmen, bitten wir um Geduld, falls bestimmte Bauphasen etwas
              mehr Zeit in Anspruch nehmen.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl overflow-hidden py-10 pl-6 lg:pl-0">
        <div className="mb-6 flex items-center gap-4 pr-6 lg:pr-0">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-emerald-900">Aktuelle Fortschritte</h2>
          <div className="h-px flex-grow bg-[#D4AF37]/30" />
        </div>

        {/* Mobile Swipe-Galerie: Karten bleiben breit genug zum Anschauen und rutschen horizontal. */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {progressImages.map((image) => (
            <article key={image.src} className="w-[85vw] shrink-0 snap-center md:w-[400px]">
              <div className="relative h-[250px] overflow-hidden rounded-2xl border border-slate-200 shadow-md md:h-[300px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 400px, 85vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 px-2 text-sm font-bold text-slate-700">{image.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-10 max-w-5xl overflow-hidden py-10 pl-6 lg:pl-0">
        <div className="mb-2 flex items-center gap-4 pr-6 lg:pr-0">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-800">Unsere Vision</h2>
          <div className="h-px flex-grow bg-slate-300" />
        </div>
        <p className="mb-6 pr-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 lg:pr-0">
          Rechtlicher Hinweis: Die folgenden Bilder sind KI-generierte Visualisierungen zur Veranschaulichung. Die
          tatsächliche bauliche Umsetzung kann in Material und Design abweichen.
        </p>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <article className="w-[85vw] shrink-0 snap-center md:w-[400px]">
            <div className="relative h-[250px] overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 shadow-md md:h-[300px]">
              <Image
                src="/moscheeinnenneu.jpg"
                alt="Geplanter Gebetsraum"
                fill
                sizes="(min-width: 768px) 400px, 85vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 px-2 text-sm font-bold text-slate-700">Geplanter Gebetsraum</p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
