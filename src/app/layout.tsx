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
        url: "https://relaxbad.pl/img/og-img.png",
        width: 400,
        height: 225,
        alt: "Large image for Relaxbad",
      },
    ],
    type: "website",
    locale: "pl_PL",
    title: "Strony internetowe | Kasia Jankowska",
    description: "Strona wizytówka dla twojej firmy",
    url: "https://k-jankowska-web.pl",
    siteName: "k-jankowska-web.pl",
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
