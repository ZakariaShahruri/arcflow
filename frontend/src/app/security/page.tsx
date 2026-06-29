import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How arcflow keeps your workflows and data secure. Full details coming before launch.",
};

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security"
      intro="Security is foundational to an automation platform that touches your tools. This page will detail our encryption, access controls, infrastructure, compliance roadmap (SSO/SAML, audit logs, SOC 2), and how to report a vulnerability."
    />
  );
}
