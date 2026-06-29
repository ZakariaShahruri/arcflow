import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How arcflow collects, uses, and protects your data. Full policy coming before launch.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your data is yours. This policy will explain exactly what arcflow collects, how it's used to run your workflows, where it's stored, and the controls you have over it."
    />
  );
}
