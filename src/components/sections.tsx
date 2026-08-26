import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Download,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import portrait from "@/assets/portrait-placeholder.jpg";
import { Reveal, SectionHeading } from "@/components/reveal";
import {
  aboutParagraphs,
  aboutPoints,
  achievements,
  certifications,
  education,
  experience,
  profile,
  skills,
} from "@/data/portfolio";

const card =
  "rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-40px_oklch(0.19_0.008_60/0.55)]";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grain-panel" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-foreground">
              <Sparkles className="size-3.5 text-accent" />
              Open to opportunities
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-[2.6rem] leading-[1.03] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-muted-foreground">{profile.name.split(" ")[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-1 font-display text-lg italic text-accent-foreground">
              {profile.subheadline}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={profile.cvUrl}
                download
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Download className="size-4" />
                Download My CV
              </a>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60"
              >
                View My Experience
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent" />
              {profile.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <figure className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2.25rem] border border-accent/30" />
            <img
              src={portrait}
              alt="Professional portrait placeholder for Ntombizodwa Zenani"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
            <figcaption className="relative mt-3 text-center text-xs text-muted-foreground">
              Placeholder image — replace with your professional photo
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Section({
  id,
  children,
  muted = false,
}: {
  id: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-secondary/60 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" muted>
      <SectionHeading eyebrow="About" title="Motivated, ambitious and always learning." />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {aboutPoints.map((point) => (
              <div key={point.label} className="rounded-2xl border border-border bg-card p-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {point.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">{point.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience"
        lead="Roles where I have developed practical, people-facing skills."
      />
      <div className="mt-12 border-l border-border pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 100}>
            <div className="relative">
              <span className="absolute -left-[1.9rem] top-2 size-3 rounded-full border-2 border-accent bg-background sm:-left-[2.9rem]" />
              <div className={card}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
                    <Briefcase className="size-3.5 text-accent" />
                    {job.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" muted>
      <SectionHeading eyebrow="Education" title="Academic foundation & certifications" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className={card}>
            <GraduationCap className="size-6 text-accent" />
            <h3 className="mt-5 font-display text-2xl tracking-tight text-foreground">
              {education.qualification}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-sm font-medium text-accent-foreground">{education.completed}</p>
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Relevant subjects
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.subjects.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid gap-4">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="flex items-center justify-between gap-4 rounded-3xl border border-dashed border-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary">
                    <BadgeCheck className="size-5 text-accent" />
                  </span>
                  <div>
                    <h4 className="text-base font-medium tracking-tight text-foreground">
                      {c.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">Certificate area</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeading
        eyebrow="Skills"
        title="What I bring to a team"
        lead="A blend of people skills and practical, everyday professional capability."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 4) * 70}>
            <div className={`${card} h-full p-6`}>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium tracking-tight text-foreground">{s.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
              <p className="mt-5 inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                {s.level}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Achievements" title="Milestones & commitments" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 90}>
            <div className={`${card} h-full`}>
              <Award className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-xl tracking-tight text-foreground">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CV() {
  return (
    <Section id="cv" muted>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionHeading
            eyebrow="CV"
            title="My curriculum vitae"
            lead="A full overview of my education, experience and skills — available as a PDF download."
          />
          <Reveal delay={120}>
            <a
              href={profile.cvUrl}
              download
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download My CV
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              To publish your real CV, add the PDF to{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5">
                public/cv/ntombizodwa-zenani-cv.pdf
              </code>
              .
            </p>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs rounded-3xl border border-dashed border-border bg-card p-8">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <FileText className="size-9 text-accent" />
              <p className="mt-5 font-display text-lg tracking-tight text-foreground">
                CV Preview
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Placeholder — your PDF preview will appear here
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedin, href: profile.linkedinUrl },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];
  return (
    <Section id="contact">
      <div className="grain-panel rounded-[2.5rem] border border-border bg-card px-6 py-14 sm:px-12 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          lead="Interested in working with me, collaborating with me, or discussing an opportunity? I'd love to hear from you."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/50">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary">
                  <Icon className="size-5 text-accent" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            );
            return (
              <Reveal key={item.label} delay={i * 70}>
                {item.href ? (
                  <a href={item.href} className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={280}>
          <p className="mt-6 text-xs text-muted-foreground">
            Contact details shown are placeholders — update them in{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5">src/data/portfolio.ts</code>.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-14 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">{profile.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">{profile.headline}</p>
          <p className="text-sm text-primary-foreground/70">{profile.location}</p>
        </div>
        <p className="text-xs text-primary-foreground/60">
          © 2026 {profile.name.replace(/\b\w+/g, (w) => w[0] + w.slice(1).toLowerCase())}
        </p>
      </div>
    </footer>
  );
}
