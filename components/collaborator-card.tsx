type CollaboratorCardProps = {
  role: string;
  name: string;
  bio: string;
};

export function CollaboratorCard({
  role,
  name,
  bio,
}: CollaboratorCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
        {role}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">
        {name}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{bio}</p>
    </article>
  );
}
