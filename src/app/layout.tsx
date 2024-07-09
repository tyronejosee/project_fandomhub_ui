import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LeftSidebar, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FandomHub - Anime and manga community",
  description: "Welcome to FandomHub, the anime and manga community and database. Join the online community, create your anime and manga list, read reviews, follow news, and so much more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <LeftSidebar />
          <div className="pl-0 lg:pl-[20.5rem] flex flex-col min-h-[650px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
