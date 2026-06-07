import React from 'react';
import Link from 'next/link';

export default function Aktuelles() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVIGATION */}
      <nav className="bg-[#064e3b] text-white p-4 sticky top-0 z-[100] shadow-xl border-b-2 border-[#D4AF37]/30 w-full pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
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
          Aktuelles & Renovierung
        </h2>
        <p className="max-w-2xl mx-auto text-emerald-100/80 text-lg">
          
        </p>
      </section>

      {/* INFO-TEXT ZUR RENOVIERUNG & FLYER */}
      <section className="py-12 px-6 max-w-5xl mx-auto -mt-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          <div className="bg-white p-4 rounded-[30px] shadow-xl border border-slate-200">
            <img 
              src="/Renovierungflyer2.jpg" 
              alt="Renovierung Flyer" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-900 uppercase tracking-tight">
              Schritt für Schritt ins neue Zuhause
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Alhamdulillah, die Arbeiten an unserer Moschee haben begonnen. Unser Ziel ist es, unsere Moschee in ein modernen und einladenden Ort  zu verwandeln - einen Ort in der unsere Gemeinschaft zusammenkommt und ihren Glauben praktiziert. In den kommnenden Monaten werden wir hier regelmäßig Updates veröffentlichen.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#D4AF37] p-5 rounded-r-2xl shadow-sm text-sm text-slate-700">
              <strong className="text-emerald-950 block mb-2">⚠️ Wichtiger Hinweis zur Umsetzung</strong>
              Alle Fortschritte hängen maßgeblich von den eingehenden Spenden ab. Da unsere Helfer diese Aufgabe ehrenamtlich neben Beruf und Studium übernehmen, bitten wir um Geduld, falls bestimmte Bauphasen etwas mehr Zeit in Anspruch nehmen. Baraka Allahu Feekum für eure stetige Unterstützung!
            </div>
          </div>

        </div>
      </section>

      {/* 1. SWIPE-GALERIE: AKTUELLE FORTSCHRITTE */}
      <section className="py-10 pl-6 lg:pl-0 max-w-5xl mx-auto overflow-hidden">
        <div className="flex items-center gap-4 mb-6 pr-6 lg:pr-0">
          <h3 className="text-2xl font-bold text-emerald-900 uppercase tracking-tight">Aktuelle Fortschritte</h3>
          <div className="h-[2px] bg-[#D4AF37]/30 flex-grow"></div>
        </div>
        
        {/* SWIPE CONTAINER */}
        <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          
          {/* Bild 1 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[400px]">
            <img src="/Kücheneu.jpg" alt="Neue Küche" className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-md border border-slate-200" />
            <p className="mt-3 text-sm font-bold text-slate-700 px-2">Die neue Küche ist eingebaut</p>
          </div>
          {/* Bild 2 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[400px]">
            <img src="/wudubereichneu.jpg" alt="Neueer Wudu-Bereich" className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-md border border-slate-200" />
            <p className="mt-3 text-sm font-bold text-slate-700 px-2">Der Wudu-Bereich wurde renoviert</p>
          </div>

          {/* Bild 3 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[400px]">
            <img src="/eingangneu.jpg" alt="Neuer Flur" className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-md border border-slate-200" />
            <p className="mt-3 text-sm font-bold text-slate-700 px-2"> Der neue Boden wurde gelegt</p>
          </div>


          

        </div>
      </section>

      {/* 2. SWIPE-GALERIE: VISION / KI BILDER */}
      <section className="py-10 pl-6 lg:pl-0 max-w-5xl mx-auto overflow-hidden mb-10">
        <div className="flex items-center gap-4 mb-2 pr-6 lg:pr-0">
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Unsere Vision (Grob Geplant)</h3>
          <div className="h-[2px] bg-slate-300 flex-grow"></div>
        </div>
        
        {/* RECHTLICHER HINWEIS KI */}
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-6 pr-6 lg:pr-0">
          Rechtlicher Hinweis: Die folgenden Bilder sind KI-generierte Visualisierungen zur Veranschaulichung. Die tatsächliche bauliche Umsetzung kann in Material und Design abweichen.
        </p>
        
        {/* SWIPE CONTAINER */}
        <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          
          {/* KI Bild 1 (Minimalistisch, greige/Holz) */}
<div className="snap-center shrink-0 w-[85vw] md:w-[400px]">
  <div className="w-full h-[250px] md:h-[300px] bg-emerald-50 rounded-3xl shadow-md border border-emerald-100 relative overflow-hidden">
    
    {/* HIER WAR VORHER DER KOMMENTAR DRUM – JETZT IST ER WEG: */}
    <img 
      src="/moscheeinnenneu.jpg" 
      alt="Geplanter Gebetsraum" 
      className="w-full h-full object-cover" 
    />

  </div>
  <p className="mt-3 text-sm font-bold text-slate-700 px-2">Geplanter Gebetsraum</p>
</div>

         

          

        </div>
      </section>

      {/* FOOTER MIT LINKS */}
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
            <p className="text-sm text-emerald-100/60 font-mono">E-Mail:bangladeshmasjid@gmail.com</p>
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
            <Link href="/impressum" className="hover:text-[#D4AF37] transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}