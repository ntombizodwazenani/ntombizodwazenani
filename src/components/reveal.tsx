import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
        <span className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}
