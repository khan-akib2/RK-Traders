import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://rktraders.in"),
  title: "RK Traders | Plywood, Laminates & Doors Supplier in Navi Mumbai",
  description: "RK Traders is a trusted supplier of plywood, laminates, MDF boards, doors, and wood products in Navi Mumbai. Quality materials, competitive pricing, and reliable delivery.",
  keywords: "RK Traders, Plywood Navi Mumbai, Laminates supplier Thane, MDF boards wholesale, Flush Doors supplier, Shuttering plywood Navi Mumbai, Wooden Packaging, Shilgaon wood, Diva Road plywood, Rahim, Sufiyan, wood products B2B",
  openGraph: {
    title: "RK Traders | Plywood, Laminates & Doors Supplier in Navi Mumbai",
    description: "RK Traders is a trusted supplier of plywood, laminates, MDF boards, doors, and wood products in Navi Mumbai. Quality materials, competitive pricing, and reliable delivery.",
    url: "https://rktraders.in",
    siteName: "RK Traders",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "RK Traders Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RK Traders",
  "image": "https://rktraders.in/logo.png",
  "@id": "https://rktraders.in/#localbusiness",
  "url": "https://rktraders.in",
  "telephone": "+918591044102",
  "email": "rktraders488@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gala No. 02, House No. 604/605, Diva Shil Rd, Shilgaon, Diva Road",
    "addressLocality": "Thane, Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400612",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1503452,
    "longitude": 73.0445769
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.instagram.com/rk_traders571"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F6F2] text-[#2B2B2B]" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
