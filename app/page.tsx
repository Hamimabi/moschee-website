import Image from "next/image";
import Link from "next/link";
import AutoImageSlideshow from "./components/AutoImageSlideshow";
import RenovationProgress from "./components/RenovationProgress";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

// Bilder für die Startseiten-Diashow. Hier kannst du später neue Dateien aus /public eintragen.
const heroImages = [
  { src: "/FlurNeu.jpeg", alt: "Aktueller Eingangsbereich der Moschee" },
  { src: "/wudubereichneu.jpeg", alt: "Aktueller Waschbereich der Moschee" },
  { src: "/Toiletteneu2.jpeg", alt: "Sanitärbereich der Moschee" },
];

const facilityHighlights = [
  { icon: "/waschraumicon-transparent.png", title: "Gebetswaschung", text: "Gebetswaschung möglich" },
  { icon: "/iftaricon-transparent.png", title: "Iftar", text: "Iftar im Ramadan enthalten" },
  { icon: "/salat-al-eid-icon-transparent.png", title: "Salat al Eid", text: "Gemeinsames Eid-Gebet" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <section className="relative min-h-[360px] overflow-hidden bg-emerald-950 md:min-h-[470px] lg:min-h-[540px]">
        <Image
          src="/moscheeaußen2.jpeg"
          alt="Außenansicht der Moschee"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/25 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-5xl items-center justify-center px-6 py-16 text-center md:min-h-[470px] lg:min-h-[540px]">
          <div className="hero-title-reveal max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
              Herzlich willkommen
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#D4AF37] md:text-6xl lg:text-7xl">
              Bangladesh Moschee Al-Sunnah
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 text-center md:py-12">
        <p className="text-lg font-medium text-emerald-950 md:text-xl">
          Ein Ort der Begegnung, des Gebets und der gemeinsamen Besinnung im Herzen von Stuttgart.
        </p>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
          Unsere Türen stehen Muslimen aller Nationen offen. Wir laden Sie ein, Teil unserer Gemeinschaft zu werden.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative h-[220px] lg:h-full">
            <AutoImageSlideshow images={heroImages} priorityImage="/FlurNeu.jpeg" />
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2 border-b border-[#D4AF37]/20 pb-4">
              <span className="h-2 w-8 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Wichtiges Update</span>
            </div>

            <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight text-emerald-950 md:text-3xl">
              Renovierung <span className="text-[#D4AF37]">läuft aktuell</span>
            </h2>
            <p className="mt-3 text-sm font-medium text-emerald-900/80">Wir gestalten das BIZ Stuttgart neu.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Ein Bauvertrag wurde geschlossen, sodass wir die Renovierung umfangreicher fortsetzen können als
              ursprünglich geplant. Die Moschee bleibt bis einschließlich <strong>04.07.2026</strong> geschlossen; die
              voraussichtliche Wiedereröffnung ist ab dem <strong>05.07.2026</strong> geplant.
            </p>

            <div className="mt-6">
              <RenovationProgress compact />
            </div>

            <Link
              href="/aktuelles"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-900 px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-emerald-800 sm:w-auto"
            >
              Mehr erfahren & Fortschritt sehen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="overflow-hidden rounded-lg border border-[#D4AF37]/20 bg-white p-4 text-center shadow-sm md:p-6">
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
            Die Zeiten aktualisieren sich automatisch über Mawaqit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="overflow-hidden rounded-lg border border-[#D4AF37]/20 bg-white p-6 text-center shadow-sm md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-emerald-900">
              Freitagsgebet (Jumu&apos;ah)
            </h2>
            <p className="mt-2 text-sm text-slate-500">Wir beten in zwei zeitlich versetzten Gemeinschaftsgebeten</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">1. Gebet</span>
              <div className="mt-2 text-4xl font-black text-emerald-900">14:00</div>
              <p className="mt-2 text-[10px] font-bold uppercase text-emerald-700/60">Khutba & Gebet</p>
            </div>
            <div className="rounded-lg border border-[#D4AF37]/20 bg-orange-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">2. Gebet</span>
              <div className="mt-2 text-4xl font-black text-[#D4AF37]">15:00</div>
              <p className="mt-2 text-[10px] font-bold uppercase text-[#D4AF37]/60">Khutba & Gebet</p>
            </div>
          </div>
          <p className="mt-6 text-center text-[10px] italic text-slate-400">
            Bitte erscheinen Sie rechtzeitig, um einen Platz zu finden.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center md:pt-20">
        <h2 className="mb-8 text-2xl font-bold uppercase tracking-[0.18em] text-[#D4AF37] md:text-4xl font-serif">
          Unterstützen Sie unseren Verein
        </h2>
        <div className="space-y-8 text-left text-base leading-relaxed text-slate-700 md:text-lg">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
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

          <div className="rounded-lg border border-emerald-100/70 bg-emerald-50/60 p-6 md:p-8">
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
          <div className="flex flex-col justify-between rounded-lg border-b-4 border-[#D4AF37] bg-emerald-900 p-6 text-white shadow-sm md:p-8">
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
              className="rounded-lg bg-[#D4AF37] py-4 text-center text-sm font-black uppercase tracking-widest text-emerald-950 transition-colors hover:bg-[#C5A028]"
            >
              Jetzt auf GoFundMe spenden
            </a>
          </div>

          <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-3 text-xl font-bold text-emerald-900">Überweisung</h3>
            <div className="space-y-4 rounded-lg border border-slate-100 bg-slate-50 p-5 font-mono text-xs">
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

      <section
        className="relative mt-10 min-h-[420px] overflow-hidden bg-emerald-950 bg-cover bg-fixed bg-center px-6 py-16 text-white md:min-h-[520px] md:py-20"
        style={{ backgroundImage: "url('/Innenbereichmoschee2.png')" }}
      >
        <div className="absolute inset-0 bg-emerald-950/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/45 via-emerald-950/20 to-emerald-950/70" />

        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-5xl items-center md:min-h-[360px]">
          <div className="grid w-full gap-8 text-center md:grid-cols-3">
            {facilityHighlights.map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <Image src={item.icon} alt="" width={76} height={76} className="h-20 w-20 object-contain" />
                <h3 className="mt-5 text-lg font-bold text-[#D4AF37]">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-emerald-50/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="kontakt" className="scroll-mt-28" />
      <SiteFooter />
    </main>
  );
}
