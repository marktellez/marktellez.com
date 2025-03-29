import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/ui/header";
import Footer from "@/ui/footer";

import { generateSeoMetadata } from '@/lib/seo-utils';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const quicksandTitle = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-title",
});

export const metadata = generateSeoMetadata({
  title: "Expert Programmer and AI Engineer",
  description: "Howdy! I'm Mark, crafting software since '97. From web to ML pipelines, I've mastered dozens of languages. Let's build something GREAT together!",
  keywords: ["expert developer", "programmer for hire", "NextJS Developer", "ReactJS Developer", "senior engineer", "ai developer", "machine learning expert"],
  url: "https://marktellez.com",
  image: "https://marktellez.com/images/og-image.jpg",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer",
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
        className={`${quicksand.variable} ${quicksandTitle.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
