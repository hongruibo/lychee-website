export const SITE_LINKS = {
  calendly: "https://calendly.com/linda-lycheelabs",
  founderLinkedIn: "https://linkedin.com/in/lindahongcheng",
  companyLinkedIn: "https://linkedin.com/company/lychee-labs",
};

export const founderName = "Linda Hong Cheng";
export const founderEmail = "hello@lycheelabs.io";
export const calendlyUrl = SITE_LINKS.calendly;
export const linkedInUrl = SITE_LINKS.founderLinkedIn;
export const companyLinkedInUrl = SITE_LINKS.companyLinkedIn;
export const companyTagline = "Industrial intelligence for mission-critical manufacturing";

export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroValueCards = [
  {
    title: "Earlier defect visibility",
    body: "Surface elevated risk before downstream confirmation makes the loss larger.",
  },
  {
    title: "Faster diagnosis",
    body: "Narrow the search space around likely upstream drivers sooner.",
  },
  {
    title: "Lower loss",
    body: "Reduce scrap, rework, lost output, and diagnostic delay.",
  },
];

export const economicStats = [
  {
    value: "70-80%",
    label: "Scrap can reach this level during early battery-factory ramp-up.",
    href: "https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/battery-2035-building-new-advantages?utm_source=chatgpt.com",
    source: "McKinsey",
  },
  {
    value: "$4M/day",
    label: "Approximate immediate cost impact of lost production at 50 GWh scale.",
    href: "https://www.mckinsey.com/capabilities/operations/our-insights/power-spike-how-battery-makers-can-respond-to-surging-demand-from-evs?utm_source=chatgpt.com",
    source: "McKinsey",
  },
  {
    value: "£21M+/year",
    label: "Potential annual value of a 1% yield improvement at 20 GWh scale.",
    href: "https://www.bindt.org/News/march-2023/waygate-technologies-and-its-partners-among-winners-of-faraday-battery-challenge-funding-competition-in-the-united-kingdom/?utm_source=chatgpt.com",
    source: "BINDT / UKRI",
  },
];

export const steps = [
  {
    step: "01",
    title: "Ingest fragmented manufacturing context",
    description:
      "Bring together process history, machine events, quality outcomes, and inspection signals that usually live in disconnected systems and disconnected moments in time.",
  },
  {
    step: "02",
    title: "Surface elevated defect risk earlier",
    description:
      "Turn scattered history into earlier warning signals so teams can act before delayed visibility becomes additional scrap, rework, or lost cycle time.",
  },
  {
    step: "03",
    title: "Prioritize likely upstream drivers",
    description:
      "Narrow the search space around likely upstream contributors so engineering teams can move faster from symptom to likely cause.",
  },
  {
    step: "04",
    title: "Support faster stabilization",
    description:
      "Help manufacturing teams intervene sooner, learn faster, and recover yield and process stability with less diagnostic delay.",
  },
];

export const useCaseCards = [
  {
    title: "Defect risk prediction",
    description:
      "Surface elevated defect risk earlier from fragmented process and quality history before later-stage failure visibility compounds the cost.",
  },
  {
    title: "Diagnosis acceleration",
    description:
      "Shorten the path from observed quality issue to the upstream conditions most worth investigating first.",
  },
  {
    title: "Ramp stabilization",
    description:
      "Help teams stabilize lines faster during new-factory ramp, restart periods, and process transfers where drift is expensive and diagnosis time matters.",
  },
  {
    title: "Cross-system visibility",
    description:
      "Create a usable operating view across process, inspection, and quality systems that rarely line up cleanly in practice.",
  },
];

export const whyLychee = [
  {
    title: "Not another dashboard",
    description:
      "The goal is earlier action in high-consequence manufacturing environments, not passive reporting after the damage is already visible.",
  },
  {
    title: "Designed for fragmented industrial systems",
    description:
      "Battery operations rarely suffer from a lack of data. They suffer from delayed, disconnected, and hard-to-use manufacturing context.",
  },
  {
    title: "Built for battery manufacturing, relevant wherever delay is expensive",
    description:
      "Lychee Labs is built for battery manufacturing, where delayed discovery is especially costly, and where earlier visibility can protect yield, throughput, and revenue.",
  },
];

export const teamRoles = [
  "Manufacturing Engineering",
  "Process Engineering",
  "Quality Engineering",
  "Cell Engineering",
  "Production Leadership",
];

export const productPillars = [
  {
    title: "Risk surfacing",
    description:
      "Detect earlier signs that a process, line, or batch may be moving toward elevated defect risk.",
  },
  {
    title: "Investigation prioritization",
    description:
      "Help teams focus on the most plausible upstream drivers instead of searching every system from scratch.",
  },
  {
    title: "Manufacturing context unification",
    description:
      "Connect process history, quality results, and operational context that usually remain fragmented across tools and teams.",
  },
  {
    title: "Faster learning loops",
    description:
      "Turn earlier signals and faster diagnosis into shorter stabilization cycles and more usable manufacturing knowledge.",
  },
];

export const actionOutcomes = [
  {
    title: "Reduced scrap",
    description: "Earlier warning helps teams catch costly drift before more material is consumed.",
  },
  {
    title: "Faster diagnosis",
    description: "Investigation time compresses when the likely upstream drivers are easier to prioritize.",
  },
  {
    title: "Faster stabilization",
    description: "Teams can recover process control sooner during ramp, restart, and recurring quality events.",
  },
  {
    title: "Reduced operating loss",
    description: "Less delayed discovery means less avoidable waste, downtime, and escalation cost.",
  },
];

export const detailedUseCases = [
  {
    title: "Defect risk prediction",
    what: "Use fragmented process and quality history to flag elevated defect risk earlier than downstream failure visibility alone would allow.",
    why: "In battery manufacturing, upstream drift can remain economically invisible until later process steps or final quality signals make the problem obvious.",
    owner: "Quality engineering, process engineering, and manufacturing engineering.",
    consequence: "Helps reduce additional scrap, rework, and delayed discovery cost.",
  },
  {
    title: "Root-cause investigation acceleration",
    what: "Prioritize the upstream process windows, events, or conditions most worth investigating when quality problems appear.",
    why: "Teams often lose critical time reconstructing context across systems before they can even begin testing hypotheses.",
    owner: "Process engineering, cell engineering, and cross-functional failure analysis teams.",
    consequence: "Helps reduce diagnostic delay, engineering drag, and prolonged instability.",
  },
  {
    title: "Ramp and restart stabilization",
    what: "Support faster learning during factory ramp, line restart, process transfer, or recipe change by surfacing recurring instability patterns earlier.",
    why: "Ramp periods compress decision cycles while magnifying the cost of bad visibility and slow feedback loops.",
    owner: "Production leadership, manufacturing engineering, and launch teams.",
    consequence: "Helps reduce prolonged yield loss and costly schedule slippage during scale-up.",
  },
  {
    title: "Fragmented manufacturing visibility",
    what: "Create a usable view across inspection outputs, quality outcomes, machine history, and production context without pretending the plant stack is clean.",
    why: "Most manufacturing systems were not built to tell one operational story end to end.",
    owner: "Operations, manufacturing systems, and technical leadership.",
    consequence: "Helps reduce blind spots, duplicated investigation effort, and missed upstream signals.",
  },
];

export const sourceLinks = [
  {
    label: "McKinsey battery ramp-up context",
    href: "https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/battery-2035-building-new-advantages?utm_source=chatgpt.com",
  },
  {
    label: "McKinsey on lost production economics",
    href: "https://www.mckinsey.com/capabilities/operations/our-insights/power-spike-how-battery-makers-can-respond-to-surging-demand-from-evs?utm_source=chatgpt.com",
  },
  {
    label: "BINDT / UKRI on yield-improvement value",
    href: "https://www.bindt.org/News/march-2023/waygate-technologies-and-its-partners-among-winners-of-faraday-battery-challenge-funding-competition-in-the-united-kingdom/?utm_source=chatgpt.com",
  },
];

export const founderPreview =
  "Linda Hong Cheng is the founder and CEO of Lychee Labs. A BBC-featured AI founder, former AI PhD, Clarendon Scholar at Oxford, and AI research fellow at Columbia, she leads the company’s ML systems, product vision, and commercial strategy.";

export const aboutPreview =
  "Lychee Labs builds industrial intelligence for mission-critical manufacturing, with an initial focus on battery and energy environments where delayed discovery is especially expensive. The platform helps industrial teams detect defect risk earlier, accelerate diagnosis, and reduce waste, lost output, and revenue leakage.";

export const teamIntro =
  "Lychee Labs brings together applied machine learning, battery-materials expertise, and rapid engineering execution to build the intelligence layer for high-stakes manufacturing environments.";

export const founderBio =
  "Lychee Labs is led by founder and CEO Linda Hong Cheng, a BBC-featured AI founder, former AI PhD, Clarendon Scholar at Oxford, and AI research fellow at Columbia. Her research on applied machine learning for complex systems has been published in the Oxford Handbook as its youngest invited author, along with Mobilization: An International Quarterly, the ICLR Post-AGI Workshop, and other leading forums. Her work has been featured by the BBC and China Daily, and she has been invited to speak at the World Economic Forum, Google, IBM, Flutter, Columbia, and Oxford. She leads Lychee Labs’ ML systems, product vision, and commercial strategy.";

export const technicalLeadBio =
  "Yongkang Zou is Lychee Labs’ Technical Lead, an exited founder and full-stack AI engineer with a background spanning multi-agent systems, AI productization, and rapid technical prototyping. He was previously founding AI engineer at Epiminds, backed by Lightspeed Ventures, and has been recognized through prestigious global hackathon wins including Project Europe, ElevenLabs, and the Lovable Hackathon. At Lychee Labs, he drives prototyping speed and engineering velocity.";

export const collaboratorBio =
  "Bruno Andreis is an AI and battery expert collaborator at Lychee Labs, with a materials science PhD and postdoctoral research fellowship at Oxford. His work focuses on data-driven approaches to high-impact AI applications in battery and energy-storage materials. At Lychee Labs, he brings battery and materials depth, helping translate domain complexity into technically grounded product direction.";
