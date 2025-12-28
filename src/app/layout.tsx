import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lucas's Fortnite Blog | Tips, News & More",
  description: "Welcome to Lucas's Fortnite Blog! Your ultimate source for Fortnite tips, news, skin reviews, building guides, and everything Battle Royale!",
  keywords: ["Fortnite", "Battle Royale", "Gaming", "Tips", "Skins", "Building"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {/* Background effects */}
        <div className="storm-bg" />
        <div className="storm-particles" />
        
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
