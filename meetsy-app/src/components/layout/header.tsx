"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { TrophyIcon } from "lucide-react";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <div className="layout-container">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Meetsy
          </Link>
          {isSignedIn && (
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/dashboard">DashBoard</Link>
              <Link href="/communities">Communities</Link>
              <Link href="/chat">Chat</Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <Badge className="flex items-center gap-2" variant="outline">
              <TrophyIcon className="size-3 text-primary" /> Pro
            </Badge>
          ) : (
            <></>
          )}
          <UserButton
            appearance={{
              elements: {
                avatarBox: "size-9",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
