import { useState, type ReactNode } from "react";
import { ArrowUpRight, Maximize2, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageHeader } from "@/components/layout";
import { SITE, usePageMeta } from "@/lib/site";
import { THEMES } from "@/lib/publications";

const DOI = "https://doi.org/10.1080/10447318.2026.2648799";
const TITLE = "Artificial Intelligence Chatbots as Relational Agents: A Systematic Review of Human–AI Chatbot Relationships";
const CAPTION = "Figure 1. Human–AI relationship framework of social influence.";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-8 border-t border-border">
      <h4 className="eyebrow pt-1">{label}</h4>
      <div className="max-w-2xl space-y-4 text-[1.04rem]">{children}</div>
    </div>
  );
}

export default function Research() {
  usePageMeta("Research", "Research by Yoo Jung (Erika) Oh on human–AI communication, relational chatbots, AI persuasion, and health communication, featuring a systematic review of human–AI chatbot relationships.");
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Research" title="How people talk to, relate to, and are moved by AI">
        <p>
          My research examines how people communicate with, relate to, and are influenced by artificial intelligence, drawing on interpersonal communication, persuasion, and health communication, and on computational social science methods.
        </p>
      </PageHeader>

      <nav aria-label="Research themes" className="mx-auto max-w-6xl px-5 sm:px-8 pb-12">
        <ul className="flex flex-wrap gap-2">
          <li><a href="#featured" className="inline-block border border-primary bg-primary text-primary-foreground px-3 py-1.5 text-sm" data-testid="link-jump-featured">Featured study</a></li>
          {THEMES.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="inline-block border border-border px-3 py-1.5 text-sm hover:border-primary hover:text-primary transition-colors" data-testid={`link-jump-${t.id}`}>{t.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Featured */}
      <section id="featured" className="scroll-mt-20 bg-secondary/50 border-y border-primary/15" aria-labelledby="featured-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="eyebrow">Featured study &middot; Systematic review &middot; 2026</p>
          <h2 id="featured-title" className="font-display text-3xl sm:text-[2.75rem] leading-[1.12] mt-4 max-w-4xl text-primary" data-testid="text-featured-title">{TITLE}</h2>
          <p className="mt-4 text-foreground/75">
            Oh, Y. J., Hu, J. M., Zhu, R., Lim, J. I., &amp; Zhang, X. &middot; <span className="italic">International Journal of Human–Computer Interaction</span> &middot; Open access
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={DOI} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-medium hover:bg-primary/90" data-testid="link-featured-doi">
              Read the article <ArrowUpRight className="h-4 w-4" aria-hidden /><span className="sr-only">(opens in new tab)</span>
            </a>
            <a href={SITE.study} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 font-medium hover:bg-accent" data-testid="link-featured-pdf">
              <FileText className="h-4 w-4" aria-hidden /> PDF
            </a>
          </div>

          <p className="mt-14 font-display text-2xl sm:text-[1.9rem] leading-snug max-w-3xl">
            We usually think of chatbots as tools. This review asks what changes when we treat them as relationship partners, and whether those relationships are the route through which chatbots influence people.
          </p>

          <div className="mt-14">
            <Block label="Overview">
              <p>Guided by the authors' human–AI chatbot Relationship (HAIR) Framework of Social Influence, the review synthesizes research on what shapes human–AI chatbot relationships and what social influence outcomes follow from them.</p>
            </Block>
            <Block label="Central questions">
              <p><span className="font-mono text-sm text-primary mr-2">RQ1</span>What characteristics of (a) chatbot, (b) user, and (c) message may influence human–AI chatbot relationships?</p>
              <p><span className="font-mono text-sm text-primary mr-2">RQ2</span>What are potential social influence outcomes of human–AI chatbot relationships?</p>
            </Block>
            <Block label="Why it matters">
              <p>Chatbots are increasingly used for social influence in support, health behavior promotion, business, and education, yet they are often framed in primarily instrumental terms. Communication research emphasizes that influence unfolds within personal relationships. Earlier reviews largely took a user-experience lens or focused on a single construct such as trust, leaving a relationship-centered, theory-driven synthesis still needed.</p>
            </Block>
          </div>

          {/* Figure */}
          <figure className="my-14 bg-card border border-border p-4 sm:p-8">
            <button
              type="button"
              onClick={() => setZoom(true)}
              className="group relative block w-full cursor-zoom-in"
              aria-label="Enlarge Figure 1: Human–AI relationship framework of social influence"
              data-testid="button-figure-zoom"
            >
              <img
                src={SITE.figure}
                alt="Diagram of the HAIR framework: characteristics of the user, the AI chatbot, and the messages exchanged lead to human–AI chatbot relationship building, which in turn leads to social influence outcomes."
                className="w-full h-auto"
                data-testid="img-featured-figure"
              />
              <span className="absolute top-2 right-2 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs px-2.5 py-1.5 opacity-90 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden /> Enlarge
              </span>
            </button>
            <figcaption className="mt-6 grid md:grid-cols-[200px_1fr] gap-3 md:gap-8">
              <p className="font-display text-lg text-primary md:col-span-2" data-testid="text-figure-caption">{CAPTION}</p>
              <p className="eyebrow pt-1">In plain language</p>
              <div className="text-[0.98rem] text-foreground/80 max-w-2xl space-y-3">
                <p>The figure shows the framework that guided the review. On one side are three kinds of starting conditions: who the user is, how the chatbot is designed, and what messages are exchanged. These feed into the relationship people build with the chatbot. That relationship is the bridge to social influence outcomes, which is why the review focuses on relationship-related variables as the key mechanisms.</p>
                <p>
                  <a href={SITE.figure} target="_blank" rel="noopener noreferrer" className="link-u text-primary" data-testid="link-figure-fullsize">Open the figure at full size</a> (new tab).
                </p>
              </div>
            </figcaption>
          </figure>

          <div>
            <Block label="Design and sample">
              <p>A systematic review following PRISMA guidelines and registered on the Open Science Framework. The team searched six databases: ACM Digital Library, Web of Science, Scopus, IEEE, EBSCO, and PsycINFO.</p>
              <p>The review synthesized eligible English-language, peer-reviewed work published from January 2010 through December 2023. No new human participant data were collected: the sample below refers to papers and studies, not individual participants.</p>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border mt-2">
                {[
                  ["16,358", "records identified"],
                  ["370", "read in full text"],
                  ["68", "papers included"],
                  ["78", "studies reviewed"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-card p-4">
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-display text-3xl text-primary">{n}</dd>
                    <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-[0.95rem] text-foreground/75">About two-thirds of the included studies used experimental designs (primarily online), roughly one-third used surveys, and a handful were content analyses. Most were published between 2021 and 2023 and conducted in Europe or the United States, with a substantial share involving Asian countries.</p>
            </Block>
            <Block label="Major findings">
              <ol className="space-y-4">
                <li className="flex gap-4"><span className="font-mono text-sm text-primary pt-1">01</span><span>Trust and perceived social support frequently functioned as relational mediators through which chatbots exert social influence. Trust stood out as the most prominent, consistently linked to persuasion outcomes and the intention to continue using chatbots.</span></li>
                <li className="flex gap-4"><span className="font-mono text-sm text-primary pt-1">02</span><span>Chatbot design features were examined most often (46 studies), followed by user (30) and message (27) factors. Message-level factors such as empathy and responsiveness showed extensive associations with relational outcomes but remain underexplored.</span></li>
                <li className="flex gap-4"><span className="font-mono text-sm text-primary pt-1">03</span><span>The literature is dominated by short-term experimental designs, inconsistent conceptualizations of key constructs, and Western samples, limiting understanding of long-term and cross-cultural relationship development.</span></li>
              </ol>
            </Block>
            <Block label="Implications">
              <p><strong className="font-semibold">For theory:</strong> the HAIR Framework positions relational constructs not as incidental outcomes but as central pathways through which chatbots build relationships with users and exert influence.</p>
              <p><strong className="font-semibold">For design:</strong> beyond technical performance, developers should embed features that foster trust, rapport, and responsiveness, at both the system level (role framing, identity disclosure, modality, reliability) and the message level (empathy, active listening, calibrated self-disclosure, personalization).</p>
              <p><strong className="font-semibold">A caution:</strong> relational leverage carries risk. Trust and perceived support may heighten overreliance, so relational benefits and harms can coexist, and longitudinal, real-world research is needed.</p>
              <p><strong className="font-semibold">Evidence limits:</strong> this was a qualitative synthesis, not a meta-analysis. Measures varied across studies, and findings were not weighted or restricted by study quality; the review does not establish a pooled causal effect. The figure is a conceptual framework, not an estimate of causal effects.</p>
            </Block>
            <div className="mt-6 bg-primary text-primary-foreground p-8 sm:p-10">
              <p className="font-mono text-xs tracking-[0.14em] uppercase opacity-75">Takeaway</p>
              <p className="font-display text-2xl sm:text-[1.7rem] leading-snug mt-3 max-w-3xl">
                Relationships with chatbots are a central process through which their social influence unfolds, and what chatbots actually say is one of the least studied parts of that process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-20" aria-labelledby="pubs-title">
        <p className="eyebrow">From the CV</p>
        <h2 id="pubs-title" className="font-display text-4xl sm:text-5xl mt-3">Selected publications</h2>
        <p className="mt-4 text-foreground/75 max-w-2xl">
          Organized by research theme. An asterisk (*) follows the CV's notation. The{" "}
          <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="link-u text-primary">full CV</a> lists all publications and presentations.
        </p>

        {THEMES.map((t) => (
          <div key={t.id} id={t.id} className="scroll-mt-20 grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 py-12 border-t border-border mt-12 first-of-type:mt-12">
            <div>
              <h3 className="font-display text-2xl text-primary leading-tight">{t.name}</h3>
              <p className="mt-3 text-[0.95rem] text-foreground/70">{t.summary}</p>
            </div>
            <ol className="space-y-6">
              {t.pubs.map((p, i) => (
                <li key={p.url} className="text-[0.98rem] leading-relaxed" data-testid={`text-pub-${t.id}-${i}`}>
                  {p.note && <span className="inline-block font-mono text-[0.68rem] uppercase tracking-wider text-primary border border-primary/30 px-1.5 py-0.5 mb-1.5">{p.note}</span>}
                  <p>
                    {p.cite} <span className="font-medium text-foreground">{p.title}</span> <span className="italic text-foreground/80">{p.venue}</span>{" "}
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-u text-primary break-all text-sm" data-testid={`link-pub-${t.id}-${i}`}>{p.url}</a>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-[96vw] w-[96vw] max-h-[94dvh] overflow-auto p-4 sm:p-6 bg-card">
          <DialogTitle className="font-display text-xl text-primary pr-8">{CAPTION}</DialogTitle>
          <DialogDescription className="sr-only">Full-size view of the featured figure. Scroll to pan on small screens.</DialogDescription>
          <div className="overflow-auto">
            <img src={SITE.figure} alt="Full-size HAIR framework diagram linking user, chatbot, and message characteristics to relationship building and social influence outcomes." className="min-w-[900px] w-full h-auto" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
