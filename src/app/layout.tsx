import type { Metadata } from "next";
import "./globals.css";
import { LeftSidebar, Navbar } from "@/components";
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "FandomHub - Anime and manga community",
  description: "Welcome to FandomHub, the anime and manga community and database. Join the online community, create your anime and manga list, read reviews, follow news, and so much more!",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
            <LeftSidebar />
            <div className="pl-0 lg:pl-[20.5rem] flex flex-col min-h-[650px]">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}
