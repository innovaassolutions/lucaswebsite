import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cascavo's Fortnite Blog | Tips, News & More",
  description: "Welcome to Cascavo's Fortnite Blog! Your ultimate source for Fortnite tips, news, skin reviews, building guides, and everything Battle Royale!",
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
        {children}
      </body>
    </html>
  );
}
