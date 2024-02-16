import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMBD Movie App",
  description: "Learning App",
  keywords: "Next.js, TypeScript, Tailwind CSS",
  icons: [{rel: "icon", url: "/favicon.ico"}],
  openGraph: {
    title: "TMBD Movie App(Learning App)",
    description: "Learning App",
    url: "https://TMBD Movie App.com",
    siteName: "TMBD Movie App(Learning App)",
    images:{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "TMBD Movie App(Learning App)",
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} mx-auto max-w-[1920px] bg-[#212121]`}>
        {children}
      </body>
    </html>
  );
}
