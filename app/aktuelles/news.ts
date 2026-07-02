export type NewsImage = {
  src: string;
  alt: string;
};

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  author: string;
  images: NewsImage[];
  body: string[];
  details?: string[];
};

// Neue Artikel kannst du hier oben einfügen. Der erste Artikel erscheint auf /aktuelles ganz oben.
export const newsItems: NewsItem[] = [
  {
    slug: "aktueller-stand-renovierung",
    date: "28.06.2026",
    title: "Aktueller Stand der Renovierung",
    summary:
      "Die Arbeiten werden nach der neuen Planung fortgeführt. Die Moschee bleibt bis einschließlich 04.07.2026 geschlossen; die voraussichtliche Wiedereröffnung ist ab dem 05.07.2026 geplant.",
    author: "Vorstand",
    images: [
      { src: "/MoscheeAußenNeu2.jpeg", alt: "Aktuelle Außenansicht der Moschee" },
      { src: "/MoscheeInnenBoden.jpeg", alt: "Aktueller Innenbereich mit Bodenarbeiten" },
      { src: "/FlurNeu.jpeg", alt: "Aktueller Flurbereich der Moschee" },
      { src: "/wudubereichneu.jpeg", alt: "Aktueller Waschbereich der Moschee" },
      { src: "/Toiletteneu2.jpeg", alt: "Aktueller Sanitärbereich der Moschee" },
      { src: "/KuecheNeu2.jpeg", alt: "Aktueller Küchenbereich der Moschee" },
    ],
    body: [
      "Die Renovierung der Moschee wird nach der erweiterten Planung fortgesetzt. Durch den geschlossenen Bauvertrag können zusätzliche Arbeiten umgesetzt werden, die über den ursprünglichen Umfang hinausgehen.",
      "Aktuell liegt der Fokus auf den Arbeiten im Innenbereich, der technischen Infrastruktur, dem Waschbereich und weiteren Maßnahmen am Gebäude. Weitere Informationen werden nach den nächsten Bauabschnitten ergänzt.",
    ],
    details: [
      "Klimaanlage installieren",
      "Holzboden im Innenbereich austauschen",
      "Bodendämmung anbringen",
      "Elektrik erneuern",
      "Waschbereich abschließen",
      "Dachstuhl ausbessern",
      "Alte Ziegel entfernen",
      "Neue Ziegel in Anthrazit anbringen",
      "Außendämmung im OG anbringen",
      "Hof verdichten und neu betonieren",
      "Geländer streichen und weitere Arbeiten abschließen",
    ],
  },
  {
    slug: "vision-gebetsraum",
    date: "06.06.2026",
    title: "Vision für den neuen Gebetsraum",
    summary:
      "Ein erster Ausblick auf den geplanten Gebetsraum: hell, sauber und modern mit blauem Teppich, ruhiger Musterung und minimalistischer LED-Deckenbeleuchtung.",
    author: "Vorstand",
    images: [
      { src: "/Innenbereichmoschee2.png", alt: "Bisheriger Innenbereich der Moschee" },
      { src: "/moscheeinnenneu.jpg", alt: "Visualisierung des geplanten Gebetsraums" },
    ],
    body: [
      "Der neue Gebetsraum soll bewusst ruhig und hell gestaltet werden. Geplant ist ein cleanes, überwiegend weißes Gesamtbild, das den Raum freundlicher, offener und zeitloser wirken lässt.",
      "Der Teppich soll in Blau gehalten werden, ähnlich wie in der Visualisierung, jedoch mit einem eigenen Muster. Ergänzt wird das Konzept durch eine moderne, minimalistische LED-Deckenbeleuchtung.",
      "Die Bilder zeigen einen Vorher-Nachher-Vergleich: den bisherigen Innenbereich und eine Visualisierung der angestrebten Richtung. Die tatsächliche Umsetzung kann in Details, Material und Muster abweichen.",
      "Rechtlicher Hinweis: Das Nachher-Bild ist eine KI-generierte Visualisierung zur Veranschaulichung. Es bildet die spätere Realität nicht 1:1 ab; die tatsächliche bauliche Umsetzung kann in Gestaltung, Farben, Materialien und Details abweichen.",
    ],
  },
];

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
