import { SparkleIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { HeroGradient } from "./background-gradient";

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
        </div>
      </div>
    </section>
  );
}
