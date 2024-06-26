import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMBD Movie App",
  description: "Learning App",
  keywords: "Next.js, TypeScript, API's, TailwindCSS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  // openGraph: {
  //   title: "TMBD Movie App",
  //   description: "Latest movies and Tv Shows",
  //   url: "https://tmdb-api-eta.vercel.app/",
  //   siteName: "TMBD Movie App",
  //   images: {
  //     url: "/og-image.jpg",
  //     width: 1200,
  //     height: 630,
  //     alt: "TMBD Movie App",
  //   },
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.className} mx-auto max-w-[1920px] bg-primaryBg`}
      >
        <Navbar />
        {children} 
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}

