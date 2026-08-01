export function InfoPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl italic text-fg">{title}</h1>
      <div className="mt-6 flex flex-col gap-4 text-lg text-mist">
        {children}
      </div>
    </div>
  );
}
