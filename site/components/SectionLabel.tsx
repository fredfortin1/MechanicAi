export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-ink/40 px-4 py-1 text-xs uppercase tracking-wider">
      {children}
    </span>
  );
}
