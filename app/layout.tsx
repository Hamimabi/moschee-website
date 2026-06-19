import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bangladesh Islamisches Zentrum Stuttgart",
  description: "Offizielle Webseite des Bangladesh Islamischen Zentrums in Stuttgart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      {/* Systemfonts verhindern Build-Abbrüche, wenn Google Fonts nicht erreichbar sind. */}
      <body>{children}</body>
    </html>
  );
}
