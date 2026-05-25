import React from 'react';
import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVIGATION - EXAKT WIE AUF DER DATENSCHUTZ SEITE */}
      <nav className="bg-[#064e3b] text-white p-4 sticky top-0 z-[100] shadow-xl border-b-2 border-[#D4AF37]/30 w-full">
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
          Impressum
        </h2>
        <p className="max-w-2xl mx-auto text-emerald-100/80 text-sm">
          Gesetzliche Pflichtangaben nach § 5 TMG
        </p>
      </section>

      {/* TEXTINHALT */}
      <section className="py-12 px-6 max-w-4xl mx-auto -mt-10">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 space-y-12 text-sm text-slate-700 leading-relaxed">
          
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-emerald-950 uppercase text-xs tracking-wider mb-3">Angaben gemäß § 5 TMG</h3>
              <p className="font-bold text-lg text-emerald-900 mb-1">Bangladesch Islamisches Zentrum e.V.</p>
              <p>Pfarrstraße 7</p>
              <p>70182 Stuttgart</p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="font-bold text-emerald-950 uppercase text-xs tracking-wider mb-3">Vertreten durch</h3>
              <p>Den Vorstand</p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="font-bold text-emerald-950 uppercase text-xs tracking-wider mb-3">Kontakt</h3>
              <p>E-Mail: <a href="mailto bangladeshmasjid@gmail.com" className="text-emerald-700 hover:text-[#D4AF37] transition-colors"> bangladeshmasjid@gmail.com</a></p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="font-bold text-emerald-950 uppercase text-xs tracking-wider mb-3">Registereintrag</h3>
              <p>Eintragung im Vereinsregister.</p>
              <p>Registergericht: Amtsgericht Stuttgart</p>
              <p>Registernummer: <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-mono text-xs">6377</span></p>
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