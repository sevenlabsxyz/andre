import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "André Neves",
  description:
    "André Neves is the CTO and Founder of ZBD, a software and product engineer, Partnerships lead at Vinteum, Head of Open Source at NBD, and the creator of Lightning Address and other open source libraries.",
  openGraph: {
    title: "André Neves",
    description:
      "André Neves is the CTO and Founder of ZBD, a software and product engineer, Partnerships lead at Vinteum, Head of Open Source at NBD, and the creator of Lightning Address and other open source libraries.",
    url: "https://andreneves.co",
    siteName: "André Neves",
  },
  twitter: {
    card: "summary_large_image",
    site: "@andreneves",
    creator: "@andreneves",
  },
  metadataBase: new URL("https://andreneves.co"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
