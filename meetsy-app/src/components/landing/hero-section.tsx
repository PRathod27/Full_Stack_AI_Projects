import { SparkleIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { HeroGradient } from "./background-gradient";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroGradient />
      <div className="relative section-container section-padding">
        <div className="text-center">
          <Badge>
            Powered By AI{" "}
            <SparkleIcon className="size-4 inline-block  ml-2"></SparkleIcon>
          </Badge>
        </div>
      </div>
    </section>
  );
}
