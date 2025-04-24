import type { Metadata } from "next";
import { POPPINS_FONT } from "@/utils/fonts";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Strony internetowe | Kasia Jankowska",
  description:
    "Stworzę dla ciebie stronę internetową, która poprawi twoją widoczność w sieci.",
  robots: "index",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicons.ico",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "https://kasia-jankowska-web.pl/img/portfolio-og-image.png",
        width: 1200,
        height: 630,
        alt: "Strony internetowe | Kasia Jankowska",
      },
    ],
    type: "website",
    locale: "pl_PL",
    title: "Strony internetowe | Kasia Jankowska",
    description:
      "Stworzę dla ciebie stronę internetową, która poprawi twoją widoczność w sieci.",
    url: "https://kasia-jankowska-web.pl",
    siteName: "kasia-jankowska-web.pl",
  },
  twitter: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${POPPINS_FONT.variable}  antialiased`}>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
