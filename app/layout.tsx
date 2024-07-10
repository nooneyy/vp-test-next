import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProgressBarProvider from "@/components/providers/progress-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obchod | Vinařství Plchut",
  description: "Stránka obchodu Vinařství Plchut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
