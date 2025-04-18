import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birava Prajapati — Tech Portfolio",
  description: "A passionate IT support and system admin professional. Explore my projects, skills, and tech journey.",
  metadataBase: new URL('https://birava.me'),
  openGraph: {
    title: "Birava Prajapati — Tech Portfolio",
    description: "A passionate IT support and system admin professional. Explore my projects, skills, and tech journey.",
    url: 'https://birava.me',
    siteName: 'Birava Prajapati',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Birava Prajapati - Tech Portfolio'
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
