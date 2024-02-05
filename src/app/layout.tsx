import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UIProvider from "@/providers/UIProvider";
import TopNavbar from "@/components/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Profile Viewer",
  description: "Explore GitHub profiles and repositories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          <TopNavbar />
          <div className="max-w-[1024px] px-[24px] m-auto">{children}</div>
        </UIProvider>
      </body>
    </html>
  );
}
