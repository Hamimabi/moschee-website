import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { getNewsItem, newsItems } from "../news";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getNewsItem(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SiteHeader />

      <PageHero eyebrow="Aktuelles" title={article.title} description={article.summary} />

      <article className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/aktuelles" className="text-sm font-bold text-emerald-800 transition-colors hover:text-[#B8942E]">
          Zurück zu Aktuelles
        </Link>

        <div className="mt-8 border-y border-slate-200 py-4 text-sm text-slate-500">
          <p>{article.date}</p>
          <p className="mt-1">Verfasst vom {article.author}</p>
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {article.details && (
          <div className="mt-8 border-l-2 border-[#D4AF37] pl-5">
            <h2 className="text-lg font-bold text-emerald-950">Wichtige Punkte</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {article.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {article.images.map((image, index) => (
            <div key={image.src} className="relative h-64 overflow-hidden bg-slate-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              {article.slug === "vision-gebetsraum" && (
                <span className="absolute left-3 top-3 bg-emerald-950/85 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  {index === 0 ? "Vorher" : "Nachher"}
                </span>
              )}
            </div>
          ))}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
