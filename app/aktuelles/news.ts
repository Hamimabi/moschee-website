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
    slug: "ueberblick-kernsanierung",
    date: "06.07.2026",
    title: "Überblick zur Kernsanierung",
    summary:
      "Für die umfassende Kernsanierung mussten der neue Waschbereich und die neue Küche wieder entfernt werden. Diese Entscheidung ist dem Vorstand und dem Organisationsteam nicht leichtgefallen, dient jedoch dem Ziel, die Moschee langfristig und gründlich von Grund auf zu erneuern.",
    author: "Vorstand",
    images: [
      { src: "/MoscheeInnenBoden.jpeg", alt: "Innenbereich während der Kernsanierung" },
      { src: "/FlurNeu.jpeg", alt: "Aktueller Bereich während der Bauarbeiten" },
      { src: "/wudubereichneu.jpeg", alt: "Waschbereich während der Bauarbeiten" },
    ],
    body: [
      "Für die Kernsanierung ist es notwendig geworden, den neu eingerichteten Waschbereich und die neue Küche wieder zu entfernen. Diese Entscheidung war weder für den Vorstand noch für das Organisationsteam leicht. In sha Allah ist dieser Schritt jedoch im besten Sinne der Gemeinschaft, damit die Moschee einmal vollständig und nachhaltig von Grund auf saniert werden kann.",
      "Ziel der Arbeiten ist es, die Räumlichkeiten langfristig stabiler, leiser, moderner und besser nutzbar zu machen. Dabei werden nicht nur sichtbare Bereiche erneuert, sondern auch wichtige technische und bauliche Grundlagen verbessert.",
    ],
    details: [
      "Holzfaserdämmung und Lärmschutzdämmung für den gesamten Boden, damit die Nachbarn unter uns deutlich weniger Geräusche hören",
      "Mindestens die Hälfte des Dachs wird mit neuen Dachziegeln abgedeckt",
      "Neue, größere Dachfenster wurden gekauft; Kostenpunkt rund 14.000 Euro",
      "Dämmung im Dach",
      "Außendämmung im Obergeschoss",
      "Zwei neue Toiletten mit Duschfunktion",
      "Verlängerung des Waschbereichs auf fünf bis sechs Sitzplätze",
      "Drei bis vier neue Klimaanlagen",
      "Neue Elektrik und Anschluss an die Hauptstromleitung",
      "Neues Soundsystem für das Jumu'ah-Gebet",
      "Neuer Holzboden; die alten quietschenden Holzdielen wurden entfernt",
      "Neue größere Küche mit sehr großer Dunstabzugshaube",
      "Neues Arbeitszimmer für den Imam",
      "Neues Bibliothekszimmer im Dachgeschoss für den Imam",
      "Neu betonierter Hof mit klarer Struktur der privaten und gemeinschaftlichen Bereiche",
      "Fahrradständer",
    ],
  },
  {
    slug: "aktueller-stand-renovierung",
    date: "28.06.2026",
    title: "Aktueller Stand der Renovierung",
    summary:
      "Die Arbeiten werden nach der neuen Planung fortgeführt. Die Moschee bleibt vorübergehend geschlossen; ein genauer Termin für die Wiedereröffnung kann derzeit noch nicht bekannt gegeben werden.",
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
