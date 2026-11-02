import type { Metadata } from "next";
import { Inter, Marcellus } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const marcellus = Marcellus({
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Sky Voyage",
  description: "Embark on a journey through Indonesian seas with our fleet of Pinisi ships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
