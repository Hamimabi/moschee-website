import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <section className="bg-emerald-950 px-4 py-16 text-center text-white sm:px-6">
        <h1 className="mb-4 break-words text-2xl font-bold uppercase tracking-tight text-[#D4AF37] sm:text-3xl md:text-5xl font-serif">
          Datenschutzerklärung
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-emerald-100/80">
          Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.
        </p>
      </section>

      <section className="mx-auto -mt-10 max-w-4xl px-3 py-12 sm:px-6">
        {/* Lange deutsche Rechtsbegriffe dürfen auf kleinen Bildschirmen umbrechen. */}
        <div className="space-y-10 rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-xl [overflow-wrap:anywhere] sm:p-6 md:p-12">
          <section className="space-y-4">
            <h2 className="border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-900 sm:text-2xl">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Datenerfassung</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, zum Beispiel per E-Mail. Andere
              Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch technische Systeme
              erfasst.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-900 sm:text-2xl">2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, können auf den Servern des Hosters
              gespeichert werden.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung
              unseres Online-Angebots durch einen professionellen Anbieter.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-900 sm:text-2xl">
              3. Pflichtinformationen
            </h2>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Verantwortliche Stelle</h3>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <p className="font-bold text-emerald-900">Bangladesch Islamisches Zentrum e.V.</p>
              <p>Pfarrstraße 7</p>
              <p>70182 Stuttgart</p>
              <p className="break-words">E-Mail: bangladeshmasjid@gmail.com</p>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-
              bzw. TLS-Verschlüsselung.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-900 sm:text-2xl">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Cookies</h3>
            <p>
              Unsere Internetseiten können technisch notwendige Cookies verwenden. Notwendige Cookies werden auf
              Grundlage berechtigter Interessen gespeichert.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Server-Log-Dateien</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien:</p>
            <ul className="list-disc space-y-1 pl-5 italic text-slate-500">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-[#D4AF37]/20 pb-2 text-xl font-bold text-emerald-900 sm:text-2xl">
              5. Externe Dienste
            </h2>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">Mawaqit</h3>
            <p>
              Wir binden ein iFrame des Dienstes Mawaqit ein. Dabei kann Ihre IP-Adresse an Mawaqit übermittelt werden.
              Die Nutzung erfolgt im Interesse einer aktuellen Bereitstellung unserer Gebetszeiten.
            </p>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">GoFundMe</h3>
            <p>
              Wir verlinken auf die Plattform GoFundMe. Wenn Sie den Button klicken, verlassen Sie unsere Website. Die
              Datenverarbeitung auf GoFundMe unterliegt den dortigen Datenschutzbestimmungen.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
