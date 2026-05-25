import React from 'react';
import Link from 'next/link';

export default function UeberUns() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVIGATION (Gefixed für Verlinkung zur Startseite) */}
<nav className="bg-[#064e3b] text-white p-4 sticky top-0 z-50 shadow-xl border-b-2 border-[#D4AF37]/30">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    
    {/* KLICKBARER HOME-BEREICH */}
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

    {/* NAVIGATION LINKS - Jetzt mit Pfaden zur Startseite */}
    <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/70">
      <Link href="/" className="hover:text-[#D4AF37] transition-colors">Startseite</Link>
      <Link href="/ueber-uns" className="hover:text-[#D4AF37] transition-colors">Über uns</Link>
      <Link href="/aktuelles" className="hover:text-[#D4AF37] transition-colors">Aktuelles</Link>
       <Link href="/#spenden" className="hover:text-[#D4AF37] transition-colors">Spenden</Link>
      <Link href="/#kontakt" className="hover:text-[#D4AF37] transition-colors">Kontakt</Link>
      
      

    </div>

    {/* DER UNTERSTÜTZEN BUTTON */}
    <Link 
      href="/#spenden" 
      className="bg-[#D4AF37] hover:bg-[#C5A028] text-emerald-950 px-5 py-2 rounded-full font-black text-xs transition-all shadow-md active:scale-95"
    >
      UNTERSTÜTZEN
    </Link>
  </div>
</nav>

      {/* HEADER BEREICH */}
      <section className="bg-emerald-950 text-white py-20 px-6 text-center">
        <h2 className="text-[#D4AF37] text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4" style={{ fontFamily: 'serif' }}>
          Über uns
        </h2>
        <p className="max-w-2xl mx-auto text-emerald-100/80 text-lg">
          
        </p>
      </section>

      {/* DER ZENTRALE INFO-BLOCK */}
      <section className="py-12 px-6 max-w-5xl mx-auto -mt-10">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Linke Seite: Wer wir sind */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-900 uppercase tracking-tight border-b-2 border-[#D4AF37]/20 pb-2"> Unsere Identität</h3>
              <p className="text-slate-600 leading-relaxed">
                Das Bangladesh Islamische Zentrum e.V. ist seit 1999 eine feste Institution in Stuttgart. Trotz unseres Namens sind wir eine hochgradig multikulturelle Gemeinschaft. 
              </p>
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                <h4 className="text-emerald-900 font-bold text-sm mb-2 uppercase tracking-wide">Sprache & Verständlichkeit</h4>
                <p className="text-sm text-slate-700">
                  Um sicherzustellen, dass jeder die Botschaft versteht, finden unsere Freitagspredigten (Khutbas) vollständig auf Deutsch statt. Wir heißen Geschwister jeder Herkunft herzlich willkommen.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Besonders stolz sind wir auf unsere Gastfreundschaft im Ramadan: Es gibt an jedem Ramadan kostenfreies Iftar, was durch die Spenden der Umma finanziert wird.
              </p>
            </div>

            {/* Rechte Seite: Juma & Erreichbarkeit */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-900 uppercase tracking-tight border-b-2 border-[#D4AF37]/20 pb-2">Flexibilität für Gläubige</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Wir wissen, dass viele Geschwister hart arbeiten. Deshalb bieten wir als eine der wenigen Moscheen in Stuttgart zwei Freitagsgebete an:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-200">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">1. Jumu'ah</span>
                  <span className="text-2xl font-black text-emerald-900">14:00</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-200">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">2. Jumu'ah</span>
                  <span className="text-2xl font-black text-[#D4AF37]">15:00</span>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-emerald-900 font-bold text-sm mb-2 uppercase tracking-wide">Perfekte Anbindung</h4>
                <p className="text-xs text-slate-500 mb-3">Direkt erreichbar via Rathaus oder Charlottenplatz:</p>
                <div className="flex flex-wrap gap-2">
                  {['U2', 'U4', 'U9', 'U14', 'Bus 43'].map((line) => (
                    <span key={line} className="bg-white border border-slate-200 px-3 py-1 rounded-md text-[10px] font-bold text-emerald-800 shadow-sm">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* WEGBESCHREIBUNG (DER BAR-HINWEIS) */}
          <div className="mt-16 bg-orange-50 border-2 border-[#D4AF37]/30 p-8 rounded-[40px] relative">
            <div className="absolute -top-4 left-10 bg-[#D4AF37] text-emerald-950 px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-md">
              Wichtiger Wegweiser für neue Besucher
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-4xl">📍</div>
              <p className="text-emerald-950 font-medium leading-relaxed">
                Lassen Sie sich bei Ihrem ersten Besuch nicht verunsichern! Der offizielle Zugang zur Moschee führt direkt durch den Eingang der 
                <strong className="text-emerald-800 text-lg ml-1">„Bernstein - Die Spielbar“</strong>. 
                Gehen Sie einfach mutig hinein – im hinteren Bereich gelangen Sie direkt in den Innenhof, gehen Sie einmal die Treppen hoch und gelangen somit in die Moschee. Viele kehren aus Verwirrung um, doch Sie sind dort genau richtig!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-white/40 py-12 text-center text-[10px] uppercase tracking-[0.4em]">
        &copy; 1999 - 2026 Bangladesh Islamisches Zentrum Stuttgart
      </footer>
    </main>
  );
}