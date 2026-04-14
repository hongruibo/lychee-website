import type { Metadata } from "next";

import { ContactPanel } from "@/components/contact-panel";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lychee Labs for pilot conversations, technical introductions, and customer discussions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Interested in a pilot conversation, technical intro, or customer discussion? We’d be glad to connect."
      />
      <ContactPanel />
    </>
  );
}
