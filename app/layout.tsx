import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import LayoutOrchestrator from "./components/layout/LayoutOrchestrator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SpinQuest - Top Social Casino",
  description: "Experience the best social casino games with SpinQuest. Join our vibrant community and start your journey today! (US Market)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <ThemeProvider>
          <LayoutOrchestrator>{children}</LayoutOrchestrator>
        </ThemeProvider>
      </body>
    </html>
  );
}
