import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const heroImages = [
  { src: "/Innenbereichmoschee1.png", alt: "Innenbereich der Moschee" },
  { src: "/Bangladeshbild.png", alt: "Bangladesh Motiv" },
  { src: "/Innenbereichmoschee2.png", alt: "Gebetsraum der Moschee" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <section className="w-full overflow-hidden border-b border-[#D4AF37]/20 bg-emerald-950/5">
        <div className="mx-auto flex max-w-[1500px] flex-col lg:h-[500px] lg:flex-row">
          <div className="relative h-[270px] lg:h-full lg:w-2/3">
            {/* Horizontaler Swipe ist auf dem Handy natürlicher als kleine Slider-Pfeile. */}
            <div className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {heroImages.map((image) => (
                <div key={image.src} className="relative h-full w-full shrink-0 snap-start">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={image.src === "/Innenbereichmoschee1.png"}
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-slate-100 bg-white p-6 shadow-inner sm:p-8 lg:w-1/3 lg:border-l lg:border-t-0 lg:p-12">
            <div>
              <div className="mb-6 flex items-center gap-2 border-b border-[#D4AF37]/20 pb-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Wichtiges Update</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold uppercase leading-none tracking-tight text-emerald-950 md:text-4xl">
                Renovierung <br />
                <span className="text-[#D4AF37]">läuft aktuell</span>
              </h1>
              <p className="text-sm font-medium text-emerald-900/80">Wir gestalten das BIZ Stuttgart neu.</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Helfen Sie uns, unseren Gebetssaal und die Waschräume für die Zukunft zu rüsten. Jeder Beitrag sichert
                den Fortbestand unserer Moschee.
              </p>
            </div>

            <Link
              href="/aktuelles"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-900 px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-emerald-800 active:scale-95"
            >
              Mehr erfahren & Fortschritt sehen
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
        <h2 className="mb-4 text-2xl font-light uppercase tracking-[0.15em] text-[#D4AF37] md:text-3xl font-serif">
          Herzlich willkommen in der <br /> Bangladesh Moschee Al-Sunnah
        </h2>
        <div className="mx-auto mb-8 h-0.5 w-12 bg-[#D4AF37] opacity-30" />
        <div className="space-y-6 text-slate-600">
          <p className="text-lg font-medium text-emerald-950 md:text-xl">
            Ein Ort der Begegnung, des Gebets und der gemeinsamen Besinnung im Herzen von Stuttgart.
          </p>
          <p className="mx-auto max-w-2xl leading-relaxed">
            Wir laden Sie ein, Teil unserer Gemeinschaft zu werden. Ob zum täglichen Gebet, zum Austausch oder zur
            Besinnung - unsere Türen stehen Muslimen aller Nationen offen. Erleben Sie bei uns gelebte Sunnah und ein
            respektvolles Miteinander auf dem Fundament unseres Glaubens.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-4 text-center shadow-sm md:p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-emerald-900">Gebetszeiten</h2>
            <p className="mt-2 text-sm text-slate-500">Aktuelle tägliche Gebetszeiten unserer Gemeinde</p>
          </div>
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
            <iframe
              title="Mawaqit Gebetszeiten Bangladesh Moschee Al-Sunnah Stuttgart"
              src="https://mawaqit.net/de/w/bangladesh-moschee-al-sunnah-stuttgart-70182-germany?showOnly5PrayerTimes=0"
              loading="lazy"
              className="min-h-[480px] w-full md:min-h-[500px]"
            />
          </div>
          <p className="mt-4 text-center text-[10px] italic text-slate-400">
            * Die Zeiten aktualisieren sich automatisch über Mawaqit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white p-6 text-center shadow-sm md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-emerald-900">
              Freitagsgebet (Jumu&apos;ah)
            </h2>
            <p className="mt-2 text-sm text-slate-500">Wir beten in zwei zeitlich versetzten Gemeinschaftsgebeten</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">1. Gebet</span>
              <div className="mt-2 text-4xl font-black text-emerald-900">14:00</div>
              <p className="mt-2 text-[10px] font-bold uppercase text-emerald-700/60">Khutba & Gebet</p>
            </div>
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-orange-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">2. Gebet</span>
              <div className="mt-2 text-4xl font-black text-[#D4AF37]">15:00</div>
              <p className="mt-2 text-[10px] font-bold uppercase text-[#D4AF37]/60">Khutba & Gebet</p>
            </div>
          </div>
          <p className="mt-6 text-center text-[10px] italic text-slate-400">
            * Bitte erscheinen Sie rechtzeitig, um einen Platz zu finden.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center md:pt-20">
        <h2 className="mb-8 text-2xl font-bold uppercase tracking-[0.18em] text-[#D4AF37] md:text-4xl font-serif">
          Unterstützen Sie unseren Verein
        </h2>
        <div className="space-y-8 text-left text-base leading-relaxed text-slate-700 md:text-lg">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-4 border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-950">
              100% Unabhängig & Eigenfinanziert
            </h3>
            <p className="mb-4">
              Das Bangladesh Islamische Zentrum e.V. (BIZ Stuttgart) ist ein gemeinnütziger Verein, der keinerlei
              staatliche Zuschüsse oder externe Fördergelder erhält.
            </p>
            <p>
              Jede Spende fließt direkt in den Erhalt unserer Infrastruktur. Dazu gehören Miete, Strom, Wasser,
              Heizkosten und notwendige Instandsetzungen.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100/70 bg-emerald-50/60 p-6 md:p-8">
            <h3 className="mb-4 border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-900">
              Soziale Verantwortung & Nothilfe
            </h3>
            <p className="mb-4">
              Wir verstehen uns nicht nur als Gebetsstätte, sondern als Teil einer hilfsbereiten Gesellschaft.
            </p>
            <p className="text-emerald-900/80">
              In Zeiten extremer Krisen oder Katastrophen sammeln wir gezielt Mittel oder leiten Teile unserer
              Überschüsse direkt als Nothilfe an bedürftige Menschen weiter.
            </p>
          </div>

          <p className="mx-auto max-w-2xl py-2 text-center text-base italic text-slate-500">
            Transparenz ist uns wichtig: Alle eingehenden Gelder werden ordnungsgemäß verwaltet und kommen dem
            satzungsgemäßen Zweck des Vereins sowie wohltätigen Zielen zugute.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div id="spenden" className="grid scroll-mt-28 gap-6 text-left md:grid-cols-2 md:gap-8">
          <div className="flex flex-col justify-between rounded-2xl border-b-4 border-[#D4AF37] bg-emerald-900 p-6 text-white shadow-xl md:p-8">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#D4AF37]">Spenden-Aufruf</h3>
              <p className="mb-6 text-sm leading-relaxed text-emerald-100/80">
                Helfen Sie uns, unsere Infrastruktur zu modernisieren. Sicher und transparent über GoFundMe.
              </p>
            </div>
            <a
              href="https://gofund.me/0b31931e1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#D4AF37] py-4 text-center text-sm font-black uppercase tracking-widest text-emerald-950 shadow-lg transition-all hover:bg-[#C5A028] active:scale-95"
            >
              Jetzt auf GoFundMe spenden
            </a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg md:p-8">
            <h3 className="mb-3 text-xl font-bold text-emerald-900">Überweisung</h3>
            <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 font-mono text-xs">
              <div>
                <p className="mb-1 text-[10px] uppercase text-slate-400">Empfänger</p>
                <p className="text-sm font-bold text-emerald-900">Bangladesh Islamisches Zentrum e.V.</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase text-slate-400">Bank</p>
                <p className="text-sm font-bold text-emerald-900">BW-Bank</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase text-slate-400">IBAN</p>
                <p className="break-words text-base font-bold text-emerald-900">DE94 6005 0101 0002 5671 18</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase text-slate-400">Verwendungszweck</p>
                <p className="font-bold text-emerald-900">Spende Renovierung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="kontakt" className="scroll-mt-28" />
      <SiteFooter />
    </main>
  );
}
