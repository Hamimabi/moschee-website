import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <PageHero eyebrow="Rechtliches" title="Impressum" description="Gesetzliche Pflichtangaben nach § 5 TMG." />

      <section className="mx-auto -mt-10 max-w-4xl px-6 py-12">
        <div className="space-y-10 rounded-lg border border-slate-100 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm md:p-12">
          <div>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-950">Angaben gemäß § 5 TMG</h2>
            <p className="mb-1 text-lg font-bold text-emerald-900">Bangladesch Islamisches Zentrum e.V.</p>
            <p>Pfarrstraße 7</p>
            <p>70182 Stuttgart</p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-950">Vertreten durch</h2>
            <p>Den Vorstand</p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-950">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:bangladeshmasjid@gmail.com"
                className="break-words text-emerald-700 transition-colors hover:text-[#D4AF37]"
              >
                bangladeshmasjid@gmail.com
              </a>
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-950">Registereintrag</h2>
            <p>Eintragung im Vereinsregister.</p>
            <p>Registergericht: Amtsgericht Stuttgart</p>
            <p>
              Registernummer:{" "}
              <span className="rounded bg-orange-100 px-2 py-1 font-mono text-xs text-orange-800">6377</span>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
