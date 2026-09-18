import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Meetsy",
  description: "Meetsy is Platform to connect with other learners in the app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfitFont.className} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
