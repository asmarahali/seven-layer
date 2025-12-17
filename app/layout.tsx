import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seven7layers.com"),
  title: "شركة الطبقات السبعة",
  description:
    "شركة الطبقات السبعة بالرياض: متخصصون في المقاولات، التشطيب، الترميم والديكورات. تركيب واجهات GRC، رخام، قرميد، تصميم هندسي وتأثيث المنازل",
  keywords: [
    "واجهات GRC",
    "تركيب واجهات حجر",
    "تركيب واجهات رخام",
    "تصميم واجهات",
    "تشطيب داخلي",
    "تشطيب فلل",
    "ترميم مباني قديمة",
    "تصميم هندسي",
    "تأثيث منازل",
    "بناء فلل",
    "بناء مستودعات",
    "تركيب قرميد",
    "حجر ترافنتينو",
    "اسمنت بورد",
    "جبس بورد",
    "ديكورات داخلية",
    "مظلات",
    "اعمال كهرباء",
    "تركيب رخام",
    "ترميم وصيانة جميع المباني",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      ar: "/",
    },
  },
  openGraph: {
    title: "شركة الطبقات السبعة",
    description:
      "شركة الطبقات السبعة بالرياض: متخصصون في المقاولات، التشطيب، الترميم والديكورات. تركيب واجهات GRC، رخام، قرميد، تصميم هندسي وتأثيث المنازل",
    url: "https://www.seven7layers.com/",
    siteName: "شركة الطبقات السبعة",
    locale: "ar_SA",
    alternateLocale: "ar",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "شركة الطبقات السبعة",
  url: "https://www.seven7layers.com",
  telephone: "+966536581079",
  description:
    "شركة الطبقات السبعة بالرياض: متخصصون في المقاولات، التشطيب، الترميم والديكورات.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "الرياض",
    addressCountry: "SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Explicit hreflang and canonical to help search engines prefer Arabic */}
        <link rel="canonical" href="https://www.seven7layers.com/" />
        <link
          rel="alternate"
          href="https://www.seven7layers.com/"
          hrefLang="ar"
        />
        <link
          rel="alternate"
          href="https://www.seven7layers.com/"
          hrefLang="ar-SA"
        />
        <link
          rel="alternate"
          href="https://www.seven7layers.com/"
          hrefLang="x-default"
        />
        {/* JSON-LD Organization (Arabic) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
