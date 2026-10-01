import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <div className="layout-container">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Meetsy
          </Link>
        </div>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  );
}
