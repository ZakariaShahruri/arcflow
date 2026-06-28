import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How is arcflow different from Zapier or Make?",
    answer:
      "arcflow is built for product teams, not just task automation. You get a visual builder with real branching and logic, first-class observability with live run logs, retries and error handling by default, and an AI copilot that drafts flows for you — all without per-task pricing that punishes you for scaling.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. The visual builder covers the vast majority of workflows with drag-and-drop steps, conditions, and integrations. When you do need something custom, you can drop in a code step — but most teams never have to.",
  },
  {
    question: "What happens when a workflow fails?",
    answer:
      "Every step has automatic retries with backoff, and failures surface instantly in live run logs with the exact input, output, and error. You can set up alerts to Slack or email, and replay any failed run once the issue is fixed.",
  },
  {
    question: "Which apps does arcflow integrate with?",
    answer:
      "Over 200 native integrations across the tools product teams live in — Slack, Linear, Notion, GitHub, Salesforce, HubSpot, Stripe, and more — plus generic webhook and HTTP steps to connect anything with an API.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Data is encrypted in transit and at rest, and we're SOC 2 Type II compliant. Enterprise plans add SSO/SAML, audit logs, and the option to deploy in your own VPC or on-prem.",
  },
  {
    question: "Can I change plans or cancel anytime?",
    answer:
      "Absolutely. Upgrade, downgrade, or cancel from your billing settings at any time — no contracts on Starter and Pro, and changes take effect immediately with prorated billing.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-arc">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber">
              FAQ
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Everything you need to know before you start automating.
            </p>
          </div>

          {/* Accordion */}
          <Accordion
            type="single"
            collapsible
            className="mt-12 w-full"
            defaultValue="item-0"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-medium tracking-tight text-foreground hover:text-amber hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
