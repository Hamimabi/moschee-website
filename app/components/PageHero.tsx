import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-emerald-900/10 bg-emerald-950 px-6 py-14 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl break-words font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-emerald-50/80 md:text-base">{description}</p>
        )}
      </div>
    </section>
  );
}
