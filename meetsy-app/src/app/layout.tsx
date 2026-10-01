import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html
      lang="en"
      className={cn(
        "antialiased",
        outfitFont.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
