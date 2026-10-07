import { SparkleIcon, ZapIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { HeroGradient } from "./background-gradient";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroGradient />
      <div className="relative section-container section-padding">
        <div className="text-center">
          <Badge className="mb-6 text-sm font-medium" variant={"secondary"}>
            Powered By AI
            <SparkleIcon className="size-4 inline-block ml-2"></SparkleIcon>
          </Badge>
          <h1>Find Your Perfect AI Learning Partner</h1>
          <p>
            Join communities, set your learning goals, and get matched with
            partners who share your passion. Chat, collaborate, and grow
            together with AI-powered insights
          </p>
          <div>
            <Link href="/sign-up">
              <Button size="lg" className="hero-button-outline group">
                Get Started for Free
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button
                size="lg"
                className="link-button hero-button-primary group"
              >
                <span className="hero-button-content">
                  <ZapIcon className="hero-button-icon-primary group-hover:scale-125 group-hover:rotate-12" />
                  Buy a Plan
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
