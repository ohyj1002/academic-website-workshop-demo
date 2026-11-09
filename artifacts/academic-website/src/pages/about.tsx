import { Link } from "wouter";
import { ArrowRight, Download, Mail, GraduationCap } from "lucide-react";
import { SITE, usePageMeta } from "@/lib/site";

const AREAS = [
  { t: "Human–AI communication", d: "How people talk with, interpret, and respond to AI systems, from chatbots to voice assistants." },
  { t: "Relational AI", d: "AI agents as relational partners: trust, support, and the bonds people form with them." },
  { t: "Conversational agents and chatbots", d: "Designing and testing chatbots for health behavior, support, and information seeking." },
  { t: "Health communication", d: "Health messaging and technology-supported health behavior, including AI-generated messages." },
  { t: "Persuasion", d: "How messages and message sources, human or artificial, shape attitudes and intentions." },
  { t: "Interpersonal influence", d: "Conversational dynamics that make advice and compliance-gaining succeed." },
];

export default function About() {
  usePageMeta(
    "About",
    "Yoo Jung (Erika) Oh, Assistant Professor of Communication at Michigan State University, studies how people communicate with, relate to, and are influenced by AI.",
  );
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20 pb-16 grid md:grid-cols-[1.25fr_1fr] gap-12 md:gap-16 items-start">
        <div className="rise order-2 md:order-1">
          <p className="eyebrow">Human–AI Communication &middot; Health &middot; Persuasion</p>
          <h1 className="font-display text-[2.9rem] sm:text-[4.4rem] leading-[1.02] mt-5 text-foreground" data-testid="text-name">
            Yoo Jung <span className="italic text-primary">(Erika)</span> Oh
          </h1>
          <p className="mt-5 text-lg text-foreground/80">
            Assistant Professor, Department of Communication
            <br />
            Michigan State University
          </p>
          <p className="mt-10 font-display text-[1.6rem] sm:text-[1.9rem] leading-snug text-foreground max-w-xl border-l-2 border-primary pl-6">
            How do people communicate with, relate to, and come to be influenced by artificial intelligence?
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/research" data-testid="button-research" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[0.95rem] font-medium hover:bg-primary/90 transition-colors">
              Explore the research <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={SITE.cv} download="Yoo-Jung-Oh-CV.pdf" data-testid="button-download-cv" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 text-[0.95rem] font-medium hover:bg-accent transition-colors">
              <Download className="h-4 w-4" aria-hidden /> Download CV
            </a>
          </div>
        </div>
        <figure className="rise rise-2 order-1 md:order-2 relative max-w-[260px] md:max-w-[340px] mx-auto w-full">
          <div className="absolute -right-3 -bottom-3 sm:-right-4 sm:-bottom-4 inset-0 border border-primary/40 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" aria-hidden />
          <img
            src={SITE.photo}
            alt="Professional portrait of Yoo Jung (Erika) Oh"
            className="relative w-full aspect-[4/5] object-cover object-top bg-muted"
            data-testid="img-portrait"
          />
        </figure>
      </section>

      <section className="rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid md:grid-cols-[220px_1fr] gap-8">
          <h2 className="eyebrow pt-2">Biography</h2>
          <div className="max-w-2xl space-y-5 text-[1.08rem]">
            <p>
              Yoo Jung (Erika) Oh is an Assistant Professor in the Department of Communication at Michigan State University. Her research spans human-AI communication and human-computer interaction, with particular attention to AI chatbots, strategic communication, health communication, public health, and health technologies.
            </p>
            <p>
              Her work examines chatbot and voice-assistant interactions, health messaging, and technology-supported health behavior. She earned a PhD in Communication with a Designated Emphasis in Computational Social Science from the University of California, Davis (2023).
            </p>
          </div>
        </div>
      </section>

      <section className="rule bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <div className="grid md:grid-cols-[220px_1fr] gap-8">
            <h2 className="eyebrow pt-2">Research areas</h2>
            <ol className="grid sm:grid-cols-2 gap-x-10">
              {AREAS.map((a, i) => (
                <li key={a.t} className="py-5 border-b border-primary/15 flex gap-4" data-testid={`text-area-${i}`}>
                  <span className="font-mono text-xs text-primary/70 pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl text-primary">{a.t}</h3>
                    <p className="text-[0.95rem] text-foreground/75 mt-1">{a.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid md:grid-cols-[220px_1fr] gap-8">
          <h2 className="eyebrow pt-2">The research program</h2>
          <div className="max-w-2xl">
            <p className="text-[1.08rem]">
              Chatbots are often framed as tools for delivering information. Her work treats them also as potential relational partners, asking how trust, support, and conversation shape whether AI can encourage healthier choices. Studies range from relational chatbots for physical activity and caregiving chatbots for older adults to AI-generated health messages and computational analyses of public health discourse.
            </p>
            <Link href="/research" className="mt-6 inline-flex items-center gap-2 text-primary font-medium link-u" data-testid="link-featured-study">
              Read the featured study on chatbots as relational agents <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid md:grid-cols-[220px_1fr] gap-8">
          <h2 className="eyebrow pt-2">Profiles</h2>
          <ul className="flex flex-col sm:flex-row gap-3">
            <li>
              <a href={SITE.scholar} target="_blank" rel="noopener noreferrer" data-testid="link-scholar" className="flex items-center gap-3 border border-border bg-card px-5 py-4 hover:border-primary transition-colors">
                <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
                <span>Google Scholar<span className="sr-only"> (opens in new tab)</span></span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} data-testid="link-email" className="flex items-center gap-3 border border-border bg-card px-5 py-4 hover:border-primary transition-colors">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
                <span>{SITE.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
