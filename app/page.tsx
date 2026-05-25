import React from 'react';

import Link from 'next/link'; // <--- Das hier muss rein!

export default function Home() {
  
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
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
      <a href="#kontakt" className="hover:text-[#D4AF37] transition-colors cursor-pointer">Kontakt</a>
    
    </div>

    <a 
      href="#spenden" 
      className="bg-[#D4AF37] hover:bg-[#C5A028] text-emerald-950 px-5 py-2 rounded-full font-black text-xs transition-all shadow-md active:scale-95"
    >
      UNTERSTÜTZEN
    </a>
  </div>
</nav>
      {/* DYNAMISCHER HERO-BEREICH: SLIDER & NEWS-SPLIT */}
<section className="w-full bg-emerald-950/5 border-b-2 border-[#D4AF37]/20 relative overflow-hidden">
  <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-stretch min-h-[400px] lg:h-[500px]">
    
    {/* LINKER TEIL: AUTOMATISCHE BILDER-SLIDER (Wischbar) */}
    <div className="lg:w-2/3 h-[250px] lg:h-full relative group">
      <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide" id="hero-slider">
        {/* Bild 1: Innenbereich */}
        <div className="flex-none w-full h-full snap-start relative">
          <img src="/Innenbereichmoschee1.png" alt="Innenbereich 1" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full"></span>
        </div>
        
        {/* Bild 2: Bangladesh */}
        <div className="flex-none w-full h-full snap-start relative">
          <img src="/Bangladeshbild.png" alt="Bangladesh" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full"></span>
        </div>
        
        {/* Bild 3: Mihrab/Minbar */}
        <div className="flex-none w-full h-full snap-start relative">
          <img src="/Innenbereichmoschee2.png" alt="Innenbereich 2" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full"></span>
        </div>
      </div>

      {/* Slider Controls (Punkte unten) */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        <span className="h-2 w-2 rounded-full bg-white opacity-90 border border-emerald-900 shadow-lg"></span>
        <span className="h-2 w-2 rounded-full bg-white opacity-40 border border-emerald-900 shadow-lg hover:opacity-100 transition-opacity"></span>
        <span className="h-2 w-2 rounded-full bg-white opacity-40 border border-emerald-900 shadow-lg hover:opacity-100 transition-opacity"></span>
      </div>
    </div>

    {/* RECHTER TEIL: RENOVIERUNGS-NEWS (Statisch / Pinboard) */}
    <div className="lg:w-1/3 bg-white p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 relative shadow-inner">
      
      {/* "Live" Indikator */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#D4AF37]/20 pb-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Wichtiges Update
        </span>
      </div>

      <div className="space-y-4 text-left">
        <h3 className="text-3xl font-bold text-emerald-950 uppercase tracking-tight leading-none mb-1">
          Renovierung <br /> <span className="text-[#D4AF37]">Läuft Aktuell</span>
        </h3>
        <p className="text-sm font-medium text-emerald-900/80">Wir gestalten das BIZ Stuttgart neu.</p>
        
        <p className="text-sm text-slate-600 leading-relaxed pt-2">
          Helfen Sie uns, unseren Gebetssaal und die Waschräume für die Zukunft zu rüsten. Jeder Beitrag sichert den Fortbestand unserer Moschee.
        </p>
      </div>

      <div className="pt-10">
  <Link 
    href="/aktuelles" 
    className="group relative inline-flex items-center gap-3 bg-emerald-900 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-emerald-800 shadow-xl active:scale-95 w-full text-center"
  >
    <span className="w-full">Mehr erfahren & Fortschritt sehen</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-4 w-4 transition-transform group-hover:translate-x-1" 
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </Link>
</div>

      {/* Dezentes Wasserzeichen */}
      <div className="absolute bottom-4 right-4 text-slate-50 font-black text-6xl select-none pointer-events-none uppercase">
        
      </div>
    </div>

  </div>
</section>
      

      {/* TEXTBEREICH */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-[#D4AF37] text-2xl md:text-3xl font-light tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'serif' }}>
          Herzlich willkommen in der <br /> Bangladesh Moschee Al-Sunnah
        </h3>
        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto opacity-30 mb-8"></div>
        <div className="space-y-6 text-slate-600">
          <p className="text-emerald-950 text-lg md:text-xl font-medium">
            Ein Ort der Begegnung, des Gebets und der gemeinsamen Besinnung im Herzen von Stuttgart.
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Wir laden Sie ein, Teil unserer Gemeinschaft zu werden. Ob zum täglichen Gebet, 
            zum Austausch oder zur Besinnung – unsere Türen stehen Muslimen aller Nationen offen. 
            Erleben Sie bei uns gelebte Sunnah und ein respektvolles Miteinander auf dem Fundament unseres Glaubens.
          </p>
        </div>
      </section>
      {/* MAWAQIT GEBETSZEITEN WIDGET */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <div className="bg-white border-2 border-[#D4AF37]/20 rounded-3xl p-6 shadow-sm overflow-hidden text-center">
          <div className="text-center mb-6">
            <h2 className="text-emerald-900 text-2xl font-bold uppercase tracking-widest">Gebetszeiten</h2>
            <p className="text-slate-500 text-sm mt-2">Aktuelle tägliche Gebetszeiten unserer Gemeinde</p>
          </div>

          {/* Iframe Container mit fester, sauberer Höhe für das Widget */}
          <div className="w-full overflow-hidden rounded-2xl border border-slate-100 min-h-[450px] bg-slate-50 relative flex justify-center items-center">
            <iframe 
              src="//mawaqit.net/de/w/bangladesh-moschee-al-sunnah-stuttgart-70182-germany?showOnly5PrayerTimes=0" 
              frameBorder="0" 
              scrolling="no" 
              className="w-full min-h-[480px] md:min-h-[500px]"
            ></iframe>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-4 italic">* Die Zeiten aktualisieren sich automatisch über Mawaqit.</p>
        </div>
      </section>

      {/* JUMU'AH ZEITEN */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <div className="bg-white border-2 border-[#D4AF37]/20 rounded-3xl p-8 shadow-sm overflow-hidden relative text-center">
          <div className="text-center mb-8">
            <h2 className="text-emerald-900 text-2xl font-bold uppercase tracking-widest">Freitagsgebet (Jumu'ah)</h2>
            <p className="text-slate-500 text-sm mt-2">Wir beten in zwei zeitlich versetzten Gemeinschaftsgebeten</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
              <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest">1. Gebet</span>
              <div className="text-4xl font-black text-emerald-900 mt-2">14:00</div>
              <p className="text-[10px] text-emerald-700/60 uppercase mt-2 font-bold">Khutba & Gebet</p>
            </div>

            <div className="bg-orange-50 border border-[#D4AF37]/20 p-6 rounded-2xl">
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">2. Gebet</span>
              <div className="text-4xl font-black text-[#D4AF37] mt-2">15:00</div>
              <p className="text-[10px] text-[#D4AF37]/60 uppercase mt-2 font-bold">Khutba & Gebet</p>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-6 italic">* Bitte erscheinen Sie rechtzeitig, um einen Platz zu finden.</p>
        </div>
      </section>

      {/* AUSFÜHRLICHER SPENDEN-TEXTBEREICH - OHNE RELIGIÖSE VERSE */}
<section className="pt-20 pb-10 px-6 max-w-4xl mx-auto text-center">
  <h2 className="text-[#D4AF37] text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] mb-8" style={{ fontFamily: 'serif' }}>
    Unterstützen Sie unseren Verein
  </h2>
  
  <div className="space-y-10 text-slate-700 leading-relaxed text-lg">
    
    {/* BOX 1: FINANZIERUNG */}
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-left">
      <h4 className="font-bold text-emerald-950 mb-4 text-xl border-b border-[#D4AF37]/20 pb-2">
        100% Unabhängig & Eigenfinanziert
      </h4>
      <p className="mb-4">
        Das Bangladesh Islamische Zentrum e.V. (BIZ Stuttgart) ist ein gemeinnütziger Verein, 
        der keinerlei staatliche Zuschüsse oder externe Fördergelder erhält. Unsere Existenz im 
        Herzen von Stuttgart wird ausschließlich durch die monatlichen Beiträge unserer Mitglieder 
        und die großzügigen Spenden unserer Besucher gesichert.
      </p>
      <p>
        Jede Spende fließt direkt in den Erhalt unserer Infrastruktur. Dazu gehören die monatliche 
        Miete unserer Räumlichkeiten, Strom-, Wasser- und Heizkosten sowie notwendige Instandsetzungen, 
        um einen würdigen und sicheren Ort für unsere Gemeinschaft zu bieten.
      </p>
    </div>

    {/* BOX 2: SOZIALE VERANTWORTUNG */}
    <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100/50 text-left">
      <h4 className="font-bold text-emerald-900 mb-4 text-xl border-b border-[#D4AF37]/20 pb-2">
        Soziale Verantwortung & Nothilfe
      </h4>
      <p className="mb-4">
        Wir verstehen uns nicht nur als Gebetsstätte, sondern als Teil einer hilfsbereiten Gesellschaft. 
        Deshalb ist es uns wichtig, über unsere eigenen Grenzen hinaus zu wirken. 
      </p>
      <p className="text-emerald-900/80">
        In Zeiten extremer Krisen oder Katastrophen sammeln wir gezielt Mittel oder leiten 
        Teile unserer Überschüsse direkt als Nothilfe an bedürftige Menschen weiter. 
        So stellen wir sicher, dass Ihre Unterstützung nicht nur Steine und Wände erhält, 
        sondern auch dort hilft, wo Menschen in existenzieller Not sind.
      </p>
    </div>

    {/* SCHLUSSSATZ */}
    <div className="max-w-2xl mx-auto italic text-slate-500 text-base py-4">
      <p>
        Transparenz ist uns wichtig: Alle eingehenden Gelder werden ordnungsgemäß verwaltet 
        und kommen ausschließlich dem satzungsgemäßen Zweck des Vereins sowie wohltätigen 
        Zielen zugute.
      </p>
    </div>
    
    <div className="w-20 h-1 bg-[#D4AF37] mx-auto opacity-40"></div>
  </div>
</section>


      {/* SPENDEN-MODULE */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div id="spenden" className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between border-b-4 border-[#D4AF37]">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#D4AF37]">Spenden-Aufruf</h3>
              <p className="text-emerald-100/80 text-sm mb-6 leading-relaxed">
                Helfen Sie uns, unsere Infrastruktur zu modernisieren. Sicher und transparent über GoFundMe.
              </p>
            </div>
            <a 
              href="https://gofund.me/0b31931e1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#C5A028] text-emerald-950 text-center font-black py-4 rounded-xl transition-all uppercase tracking-widest text-sm shadow-lg active:scale-95"
            > 
              Jetzt auf GoFundMe spenden
            </a>
          </div>

          {/* Banküberweisung Box - Daten vom Flyer übernommen */}
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
      <h3 className="text-xl font-bold mb-3 text-emerald-900">Überweisung</h3>
      <div className="space-y-4 font-mono text-xs bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div>
          <p className="text-[10px] text-slate-400 uppercase mb-1">Empfänger</p>
          <p className="font-bold text-emerald-900 text-sm">Bangladesh Islamisches Zentrum e.V.</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase mb-1">Bank</p>
          <p className="font-bold text-emerald-900 text-sm">BW-Bank</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase mb-1">IBAN</p>
          <p className="font-bold text-base tracking-tighter text-emerald-900">
          DE94 6005 0101 0002 5671 18
          </p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase mb-1">Verwendungszweck</p>
          <p className="font-bold text-emerald-900">Spende Renovierung</p>
        </div>
      </div>
    </div>
        </div>
      </section>

      {/* Unsichtbarer Zielpunkt für den Kontakt-Link in der Navigation */}
      <div id="kontakt" className="scroll-mt-24" />
      

      {/* FOOTER */}
<footer id="footer" className="bg-emerald-950 text-white pt-20 pb-10 px-6">
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