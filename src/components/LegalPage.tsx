export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-paper text-graphite">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-graphite/50">
          Last updated {updated}
        </p>
        <h1 className="mt-3 font-display text-4xl italic text-graphite">
          {title}
        </h1>

        <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-graphite/80">
          This is a plain-language template, not legal advice. Have a lawyer
          review it before relying on it for a live product.
        </div>

        <div className="mt-10 flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-graphite">{heading}</h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-graphite/80">
        {children}
      </div>
    </section>
  );
}
