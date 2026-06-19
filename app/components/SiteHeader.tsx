"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Spenden", href: "/#spenden" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-[#D4AF37]/30 bg-[#064e3b] pt-[env(safe-area-inset-top)] text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/moscheelogo2.png"
            alt="Logo BIZ Stuttgart"
            width={64}
            height={64}
            priority
            className="h-12 w-12 shrink-0 object-contain transition-transform group-hover:scale-105 md:h-16 md:w-16"
          />
          <div className="min-w-0">
            <p className="text-base leading-tight tracking-tight text-[#D4AF37] transition-colors group-hover:text-[#f2d06b] md:text-xl font-serif">
              BANGLADESCH <br className="sm:hidden" /> ISLAMISCHES ZENTRUM e.V
            </p>
            <p className="truncate text-[9px] font-bold uppercase tracking-widest text-white/80">
              BIZ Stuttgart - Seit 1999
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-white/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[#D4AF37]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#spenden"
            className="rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-black text-emerald-950 shadow-md transition-all hover:bg-[#C5A028] active:scale-95 md:px-5"
            onClick={() => setIsOpen(false)}
          >
            UNTERSTÜTZEN
          </Link>
          {/* Handy-Menü: drei Punkte öffnen die Navigation platzsparend auf kleinen Bildschirmen. */}
          <button
            type="button"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
          >
            <span className="flex items-center gap-1" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-emerald-950/95 px-4 py-3 shadow-xl lg:hidden">
          {/* Große Trefferflächen machen das Menü auf dem Handy leichter bedienbar. */}
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-white/85 transition-colors hover:bg-white/10 hover:text-[#D4AF37]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
