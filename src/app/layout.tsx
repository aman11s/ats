import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATS Packers & Movers - Safe, Fast & Reliable Relocation Services",
  description: "Professional packers and movers offering home shifting, office relocation, storage solutions, and vehicle transport. Get hassle-free moving services with ATS Packers & Movers. Free quotes available!",
  keywords: [
    "packers and movers",
    "home shifting",
    "office relocation", 
    "vehicle transport",
    "storage solutions",
    "moving services",
    "relocation services",
    "ATS packers movers",
    "professional movers",
    "household shifting",
    "commercial moving",
    "safe moving",
    "reliable packers"
  ],
  authors: [{ name: "ATS Packers & Movers" }],
  creator: "ATS Packers & Movers",
  publisher: "ATS Packers & Movers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    title: "ATS Packers & Movers - Professional Moving Services",
    description: "Trust ATS Packers & Movers for safe and reliable home shifting, office relocation, and storage solutions. Professional moving services with free quotes.",
    siteName: "ATS Packers & Movers",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS Packers & Movers - Safe & Reliable Moving Services",
    description: "Professional packers and movers for home shifting, office relocation, and vehicle transport. Get your free quote today!",
    creator: "@atspackersmovers",
  },
  alternates: {
    canonical: "/",
  },
  category: "Moving Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
