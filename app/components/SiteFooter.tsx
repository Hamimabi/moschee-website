import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="footer" className="bg-emerald-950 px-6 pb-10 pt-16 text-white md:pt-20">
      <div className="mx-auto grid max-w-5xl gap-10 border-b border-emerald-800 pb-12 md:grid-cols-2">
        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Rechtlicher Träger</h4>
          <div className="space-y-2 text-sm text-emerald-100/65">
            <p className="text-lg font-bold text-white">Bangladesh Islamisches Zentrum e.V.</p>
            <p>Pfarrstraße 7, 70182 Stuttgart</p>
          </div>
        </div>
        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Digitale Verwaltung</h4>
          <a
            href="mailto:bangladeshmasjid@gmail.com"
            className="break-words font-mono text-sm text-emerald-100/65 transition-colors hover:text-[#D4AF37]"
          >
            bangladeshmasjid@gmail.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <p className="max-w-full break-words text-[9px] uppercase leading-relaxed tracking-[0.14em] text-emerald-500 sm:tracking-[0.28em]">
          &copy; 1999 - 2026 Bangladesh Islamisches Zentrum Stuttgart
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-emerald-100/50 sm:gap-8">
          <Link href="/datenschutz" className="transition-colors hover:text-[#D4AF37]">
            Datenschutz
          </Link>
          <Link href="/impressum" className="transition-colors hover:text-[#D4AF37]">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
