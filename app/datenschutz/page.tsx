import React from 'react';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVIGATION */}
{/* NAVIGATION */}
<nav className="bg-[#064e3b] text-white p-4 sticky top-0 z-[100] shadow-xl border-b-2 border-[#D4AF37]/30 w-full">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    
    {/* KLICKBARER HOME-BEREICH (LOGO + NAME) */}
    <Link href="/" className="flex items-center gap-4 group cursor-pointer">
      <img 
        src="/moscheelogo2.png" 
        alt="Logo BIZ Stuttgart" 
        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform group-hover:scale-105" 
      />
      <div className="flex flex-col">
        <h1 className="text-lg md:text-xl tracking-tight leading-tight text-[#D4AF37] group-hover:text-[#f2d06b] transition-colors" style={{ fontFamily: 'serif' }}>
          BANGLADESCH <br className="md:hidden" /> ISLAMISCHES ZENTRUM e.V
        </h1>
        <span className="text-[9px] tracking-widest opacity-80 uppercase font-bold text-white group-hover:opacity-100 transition-opacity">
          BIZ Stuttgart • Seit 1999
        </span>
      </div>
    </Link>

    {/* NAVIGATION LINKS */}
    <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/70">
      <Link href="/" className="hover:text-[#D4AF37] transition-colors">Startseite</Link>
      <Link href="/ueber-uns" className="hover:text-[#D4AF37] transition-colors">Über uns</Link>
      <Link href="/aktuelles" className="hover:text-[#D4AF37] transition-colors">Aktuelles</Link>
      <Link href="/#spenden" className="hover:text-[#D4AF37] transition-colors">Spenden</Link>
      {/* HIER GEFIXT: Ein sauberer Next.js Link zur Startseite mit ID */}
      <Link href="/#kontakt" className="hover:text-[#D4AF37] transition-colors">
        Kontakt
      </Link>
    </div>

    <Link 
      href="/#spenden" 
      className="bg-[#D4AF37] hover:bg-[#C5A028] text-emerald-950 px-5 py-2 rounded-full font-black text-xs transition-all shadow-md active:scale-95"
    >
      UNTERSTÜTZEN
    </Link>
  </div>
</nav>

      {/* HEADER BEREICH */}
      <section className="bg-emerald-950 text-white py-16 px-6 text-center">
        <h2 className="text-[#D4AF37] text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4" style={{ fontFamily: 'serif' }}>
          Datenschutzerklärung
        </h2>
        <p className="max-w-2xl mx-auto text-emerald-100/80 text-sm">
          Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.
        </p>
      </section>

      {/* TEXTINHALT */}
      <section className="py-12 px-6 max-w-4xl mx-auto -mt-10">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 space-y-12 text-sm text-slate-700 leading-relaxed">
          
          {/* 1. AUF EINEN BLICK */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-900 border-b border-[#D4AF37]/20 pb-2">1. Datenschutz auf einen Blick</h3>
            <div className="space-y-4">
              <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Allgemeine Hinweise</h4>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              
              <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Datenerfassung auf dieser Website</h4>
              <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br /> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
              <p><strong>Wie erfassen wir Ihre Daten?</strong><br /> Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie per E-Mail an uns senden. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
              <p><strong>Wofür nutzen wir Ihre Daten?</strong><br /> Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br /> Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            </div>
          </div>

          {/* 2. HOSTING */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-900 border-b border-[#D4AF37]/20 pb-2">2. Hosting</h3>
            <p>Wir hosten die Inhalte unserer Website bei dem externen Anbieter Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Besuchern (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist.</p>
          
          </div>

          {/* 3. PFLICHTINFORMATIONEN */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-900 border-b border-[#D4AF37]/20 pb-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Datenschutz</h4>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
            
            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Hinweis zur verantwortlichen Stelle</h4>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="font-bold text-emerald-900">Bangladesch Islamisches Zentrum e.V.</p>
              <p>Pfarrstraße 7</p>
              <p>70182 Stuttgart</p>
              <p>E-Mail:  bangladeshmasjid@gmail.com</p>
            </div>

            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Speicherdauer</h4>
            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Bei einem berechtigten Löschersuchen werden Ihre Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe für die Speicherung vorliegen (z. B. steuerrechtliche Aufbewahrungsfristen).</p>

            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Widerspruchsrecht (Art. 21 DSGVO)</h4>
            <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-emerald-900 font-bold text-emerald-950 text-[10px] md:text-xs uppercase leading-relaxed">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN.
            </div>

            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">SSL- bzw. TLS-Verschlüsselung</h4>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
          </div>

          {/* 4. DATENERFASSUNG */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-900 border-b border-[#D4AF37]/20 pb-2">4. Datenerfassung auf dieser Website</h3>
            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Cookies</h4>
            <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden. Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.</p>
            
            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Server-Log-Dateien</h4>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:</p>
            <ul className="list-disc pl-5 space-y-1 italic text-slate-500">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </div>

          {/* 5. PLUGINS UND TOOLS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-900 border-b border-[#D4AF37]/20 pb-2">5. Plugins, Tools und Externe Dienste</h3>
            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Mawaqit (Gebetszeiten-Widget)</h4>
            <p>Wir binden auf unserer Website ein iFrame des Dienstes Mawaqit (mawaqit.net) ein. Dabei wird Ihre IP-Adresse an Mawaqit übermittelt. Die Nutzung erfolgt im Interesse einer aktuellen Bereitstellung unserer Gebetszeiten (Art. 6 Abs. 1 lit. f DSGVO).</p>
            
            <h4 className="font-bold text-emerald-950 uppercase text-xs tracking-wider">Spenden über GoFundMe</h4>
            <p>Wir verlinken auf unserer Website auf die Plattform GoFundMe. Wenn Sie den Button klicken, verlassen Sie unsere Website. Die Datenverarbeitung auf GoFundMe unterliegt ausschließlich den dortigen Datenschutzbestimmungen.</p>
          </div>

        </div>
      </section>

      {/* ABSTAND ZWISCHEN WEISSEM KASTEN UND FOOTER */}
      <div className="h-16"></div>

     {/* FOOTER */}
     <footer id="footer" className="bg-emerald-950 text-white pt-20 pb-10 px-6 mt-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 border-b border-emerald-800 pb-12">
          <div>
            <h4 className="font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-6">Rechtlicher Träger</h4>
            <div className="text-sm text-emerald-100/60 space-y-2">
              <p className="font-bold text-white text-lg">Bangladesh Islamisches Zentrum e.V.</p>
              <p>Pfarrstraße 7, 70182 Stuttgart</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-6">Digitale Verwaltung</h4>
            <p className="text-sm text-emerald-100/60 font-mono">E-Mail: bangladeshmasjid@gmail.com</p>
          </div>
        </div>

        {/* RECHTLICHE LINKS & COPYRIGHT */}
        <div className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] text-emerald-500 uppercase tracking-[0.4em]">
            &copy; 1999 - 2026 Bangladesh Islamisches Zentrum Stuttgart
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-emerald-100/40">
            <Link href="/datenschutz" className="hover:text-[#D4AF37] transition-colors">
              Datenschutz
            </Link>
            <Link href="/Impressum" className="hover:text-[#D4AF37] transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}