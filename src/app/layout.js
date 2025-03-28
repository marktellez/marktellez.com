import { Instrument_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/ui/header";
import Footer from "@/ui/footer";

import { generateSeoMetadata } from '@/lib/seo-utils';

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif",
});

export const metadata = generateSeoMetadata({
  title: "Expert Programmer and AI Engineer",
  description: "Howdy! I'm Mark, crafting software since '97. From web to ML pipelines, I've mastered dozens of languages. Let's build something GREAT together!",
  keywords: ["expert developer", "programmer for hire", "NextJS Developer", "ReactJS Developer", "senior engineer", "ai developer", "machine learning expert"],
  url: "https://marktellez.com",
  image: "https://marktellez.com/images/og-image.jpg",
  type: "article",
  siteName: "My Website",
  twitter: {
    card: "summary_large_image",
    site: "@mywebsite",
    creator: "@authorhandle"
  }
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${merriweather.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
