import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tokobuahbarokah.web.id"),
  title: "Toko Buah Barokah — Buah Segar Pilihan di Purwasari",
  description:
    "Toko Buah Barokah menyediakan aneka buah segar lokal berkualitas dengan harga terjangkau. Melayani parcel buah, grosir, dan eceran di Purwasari dan sekitarnya.",
  keywords: [
    "toko buah",
    "buah segar",
    "buah lokal",
    "Purwasari",
    "Karangsari",
    "parcel buah",
    "buah murah",
  ],
  authors: [{ name: "Toko Buah Barokah" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.tokobuahbarokah.web.id",
    title: "Toko Buah Barokah — Buah Segar Pilihan di Purwasari",
    description: "Toko Buah Barokah: Pusat buah segar lokal dan parcel buah berkualitas di Purwasari.",
    siteName: "Toko Buah Barokah",
    images: [
      {
        url: "/branding/square_BG.webp",
        width: 1200,
        height: 630,
        alt: "Logo Toko Buah Barokah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Buah Barokah — Buah Segar Pilihan di Purwasari",
    description: "Toko Buah Barokah: Pusat buah segar lokal dan parcel buah berkualitas di Purwasari.",
    images: ["/branding/square_BG.webp"],
  },
  appleWebApp: {
    title: "TBB",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.tokobuahbarokah.web.id",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Toko Buah Barokah",
  description:
    "Toko buah segar berkualitas di Purwasari — buah lokal dan parcel buah.",
  image: "/branding/square_BG.webp",
  url: "https://www.tokobuahbarokah.web.id",
  telephone: "+6289686089691",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karangsari",
    addressLocality: "Purwasari",
    addressRegion: "Jawa Barat",
    postalCode: "41373",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.4,
    longitude: 107.3,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "Rp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${montserrat.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col font-sans">{children}</body>
    </html>
  );
}
