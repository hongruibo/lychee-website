import { calendlyUrl, founderEmail, linkedInUrl } from "@/lib/site";

type ContactPanelProps = {
  title?: string;
  body?: string;
};

export function ContactPanel({
  title = "Get in touch",
  body = "Interested in a pilot conversation, technical intro, or customer discussion? We’d be glad to connect.",
}: ContactPanelProps) {
  return (
    <section className="section-frame">
      <div className="grid gap-8 rounded-[2rem] border border-black/8 bg-white px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
            Contact
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">{body}</p>
          <div className="rounded-[1.5rem] border border-black/8 bg-[color:var(--surface-alt)] p-5">
            <p className="text-sm font-medium text-[color:var(--ink)]">Best fit</p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
              Pilot discussions, technical introductions, manufacturing data conversations, and investor or recruiting outreach aligned with the product direction on this site.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            {
              title: "Calendly placeholder",
              detail: "Reserve time for an introductory conversation.",
              href: calendlyUrl,
            },
            {
              title: "Email placeholder",
              detail: founderEmail,
              href: `mailto:${founderEmail}`,
            },
            {
              title: "LinkedIn",
              detail: "Connect with Linda Hong Cheng on LinkedIn.",
              href: linkedInUrl,
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[1.5rem] border border-black/8 p-5 transition-colors duration-200 hover:border-[color:var(--accent-soft)]"
            >
              <p className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
