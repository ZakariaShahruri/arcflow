import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
    </>
  );
}
