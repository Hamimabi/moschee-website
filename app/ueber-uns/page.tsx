import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const transitLines = ["U2", "U4", "U9", "U14", "Bus 43"];

export default function UeberUns() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <PageHero
        eyebrow="Über uns"
        title="Bangladesh Islamisches Zentrum Stuttgart"
        description="Ein Ort des Gebets, der Gemeinschaft und der Begegnung im Herzen von Stuttgart."
      />

      <section className="mx-auto -mt-10 max-w-5xl px-6 py-12">
        <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-6">
              <h2 className="border-b-2 border-[#D4AF37]/20 pb-2 text-2xl font-bold uppercase tracking-tight text-emerald-900">
                Unsere Identität
              </h2>
              <p className="leading-relaxed text-slate-600">
                Das Bangladesh Islamische Zentrum e.V. ist seit 1999 eine feste Institution in Stuttgart. Trotz unseres
                Namens sind wir eine hochgradig multikulturelle Gemeinschaft.
              </p>
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-900">
                  Sprache & Verständlichkeit
                </h3>
                <p className="text-sm text-slate-700">
                  Um sicherzustellen, dass jeder die Botschaft versteht, finden unsere Freitagspredigten vollständig auf
                  Deutsch statt. Wir heißen Geschwister jeder Herkunft herzlich willkommen.
                </p>
              </div>
              <p className="leading-relaxed text-slate-600">
                Besonders stolz sind wir auf unsere Gastfreundschaft im Ramadan: Es gibt an jedem Ramadan kostenfreies
                Iftar, was durch die Spenden der Umma finanziert wird.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="border-b-2 border-[#D4AF37]/20 pb-2 text-2xl font-bold uppercase tracking-tight text-emerald-900">
                Flexibilität für Gläubige
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Wir wissen, dass viele Geschwister hart arbeiten. Deshalb bieten wir als eine der wenigen Moscheen in
                Stuttgart zwei Freitagsgebete an:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                  <span className="block text-[10px] font-bold uppercase text-slate-400">1. Jumu&apos;ah</span>
                  <span className="text-2xl font-black text-emerald-900">14:00</span>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                  <span className="block text-[10px] font-bold uppercase text-slate-400">2. Jumu&apos;ah</span>
                  <span className="text-2xl font-black text-[#D4AF37]">15:00</span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-900">Perfekte Anbindung</h3>
                <p className="mb-3 text-xs text-slate-500">Direkt erreichbar via Rathaus oder Charlottenplatz:</p>
                <div className="flex flex-wrap gap-2">
                  {transitLines.map((line) => (
                    <span
                      key={line}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold text-emerald-800 shadow-sm"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 rounded-lg border-2 border-[#D4AF37]/30 bg-orange-50 p-6 md:mt-16 md:p-8">
            {/* Der Hinweis bleibt sichtbar, aber ohne absolute Überlagerung auf kleinen Bildschirmen. */}
            <div className="mb-4 inline-flex rounded-full bg-[#D4AF37] px-4 py-1 text-[10px] font-black uppercase text-emerald-950 shadow-md">
              Wichtiger Wegweiser für neue Besucher
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <p className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-emerald-900 shadow-sm">
                Ort
              </p>
              <p className="font-medium leading-relaxed text-emerald-950">
                Lassen Sie sich bei Ihrem ersten Besuch nicht verunsichern! Der offizielle Zugang zur Moschee führt
                direkt durch den Eingang der <strong className="text-emerald-800">„Bernstein - Die Spielbar“</strong>.
                Gehen Sie einfach hinein - im hinteren Bereich gelangen Sie direkt in den Innenhof und über die Treppe
                zur Moschee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
