import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import {
  About,
  Achievements,
  Contact,
  CV,
  Education,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";

const title = "Ntombizodwa Zenani — Aspiring Digital Professional";
const description =
  "Portfolio of Ntombizodwa Zenani, an aspiring digital professional in Johannesburg, South Africa. Experience, education, projects, skills and CV.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ntombizodwa Zenani",
          jobTitle: "Aspiring Digital Professional",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Johannesburg",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
