import { linkedInUrl } from "@/lib/site";

type FounderFeatureProps = {
  role: string;
  name: string;
  bio: string;
};

export function FounderFeature({ role, name, bio }: FounderFeatureProps) {
  return (
    <article className="rounded-[2rem] border border-black/8 bg-white p-7 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
        {role}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[color:var(--accent-strong)]"
        >
          {name}
        </a>
      </h3>
      <p className="mt-5 max-w-4xl text-base leading-8 text-[color:var(--muted)]">
        {bio}
      </p>
    </article>
  );
}
