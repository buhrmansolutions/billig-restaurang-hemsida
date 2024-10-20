import { mainPageData } from "@/constants";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata() {
  return {
    title: "Billiga restauranghemsidor",
    description: "Skapa en Hemsida för Din Restaurang - Enkelt och Billigt",
    keywords: [
      "restaurang",
      "hemsida",
      "billig",
      "enkelt",
      "billig hemsida",
      "hemsida för restauranger",
    ],
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: mainPageData.logo,
          href: mainPageData.logo,
        },
      ],
      apple: mainPageData.logo,
      other: {
        url: mainPageData.logo,
      },
    },
    openGraph: {
      title: "Billiga restauranghemsidor",
      description: "Skapa en Hemsida för Din Restaurang - Enkelt och Billigt",
      url: "https://restaurang-hemsidor.se",
      siteName: "Restaurang-hemsidor.se",
      images: [
        {
          url: mainPageData.logo,
          width: 600,
          height: 600,
        },
      ],
      locale: "sv_SE",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
