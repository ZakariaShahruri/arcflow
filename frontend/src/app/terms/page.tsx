import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of arcflow. Full terms coming before launch.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms will cover what you can expect from arcflow and what we ask of you in return — acceptable use, uptime commitments, billing, and how either side can end the relationship."
    />
  );
}
