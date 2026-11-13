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
      <div className="max-w-2xl space-y-4 text-[1.15rem] sm:text-[1.2rem] leading-relaxed">{children}</div>
    </div>
  );
}

export default function Research() {
  usePageMeta("Research", "Research by Yoo Jung (Erika) Oh on human–AI communication, relational chatbots, AI persuasion, and health communication, featuring a systematic review of human–AI chatbot relationships.");
  const [zoom, setZoom] = useState(false);
  const [view, setView] = useState<"featured" | "publications">("featured");

  return (
    <>
      <PageHeader eyebrow="Research" title="How people talk to, relate to, and are moved by AI">
        <p>
          My research examines how people communicate with, relate to, and are influenced by artificial intelligence, drawing on interpersonal communication, persuasion, and health communication, and public health theory.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[190px_minmax(0,1fr)] gap-8 lg:gap-10 items-start">
        <nav aria-label="Research sections" className="lg:sticky lg:top-24">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {([
              ["featured", "Featured Study"],
              ["publications", "Selected Publications"],
            ] as const).map(([id, label]) => (
              <button
                key={id}
                id={`research-control-${id}`}
                type="button"
                aria-pressed={view === id}
                aria-controls={`research-panel-${id}`}
                onClick={() => setView(id)}
                className={`min-h-12 px-4 py-3 text-base text-left border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  view === id
                    ? "border-primary bg-primary text-primary-foreground font-semibold"
                    : "border-border text-primary hover:bg-accent hover:border-primary"
                }`}
                data-testid={`button-view-${id}`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        <div className="min-w-0">
          {/* Featured */}
          <section id="research-panel-featured" hidden={view !== "featured"} className="scroll-mt-20 bg-secondary/50 border-y border-primary/15" aria-labelledby="research-control-featured">
            <div className="px-4 sm:px-6 py-10 sm:py-12">
              <p className="eyebrow">Featured study &middot; Systematic review &middot; 2026</p>
              <h2 id="featured-title" className="font-display text-[2.2rem] sm:text-[3.15rem] leading-[1.12] mt-4 max-w-4xl text-primary" data-testid="text-featured-title">{TITLE}</h2>
              <p className="mt-4 text-base text-foreground/75">
                Oh, Y. J., Hu, J. M., Zhu, R., Lim, J. I., &amp; Zhang, X. &middot; <span className="italic">International Journal of Human–Computer Interaction</span> &middot; Open access
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={DOI} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-base font-medium hover:bg-primary/90" data-testid="link-featured-doi">
                  Read the article <ArrowUpRight className="h-4 w-4" aria-hidden /><span className="sr-only">(opens in new tab)</span>
                </a>
                <a href={SITE.study} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 text-base font-medium hover:bg-accent" data-testid="link-featured-pdf">
                  <FileText className="h-4 w-4" aria-hidden /> PDF
                </a>
              </div>

              <p className="mt-14 font-display text-[2rem] sm:text-[2.5rem] leading-snug max-w-3xl">
                We usually think of chatbots as tools. This review asks what changes when we treat them as relationship partners, and whether those relationships are the route through which chatbots influence people.
              </p>

              <div className="mt-14">
                <Block label="Overview">
                  <p>Guided by the authors' human–AI chatbot Relationship (HAIR) Framework of Social Influence, the review synthesizes research on what shapes human–AI chatbot relationships and what social influence outcomes may follow.</p>
                </Block>
                <Block label="Central questions">
                  <p><span className="font-mono text-base text-primary mr-2">RQ1</span>What characteristics of (a) chatbot, (b) user, and (c) message may influence human–AI chatbot relationships?</p>
                  <p><span className="font-mono text-base text-primary mr-2">RQ2</span>What are potential social influence outcomes of human–AI chatbot relationships?</p>
                </Block>
                <Block label="Why it matters">
                  <p>Chatbots are increasingly used for social influence in support, health behavior promotion, business, and education, yet they are often framed in primarily instrumental terms. Communication research suggests that relational dynamics may matter just as much as information delivery.</p>
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
                  <p className="font-display text-xl text-primary md:col-span-2" data-testid="text-figure-caption">{CAPTION}</p>
                  <p className="eyebrow pt-1">In plain language</p>
                  <div className="text-[1.04rem] text-foreground/80 max-w-2xl space-y-3 leading-relaxed">
                    <p>The figure shows the framework that guided the review. On one side are three kinds of starting conditions: who the user is, how the chatbot is designed, and what messages are exchanged.</p>
                    <p>
                      <a href={SITE.figure} target="_blank" rel="noopener noreferrer" className="link-u text-primary" data-testid="link-figure-fullsize">Open the figure at full size</a> (new tab).
                    </p>
                  </div>
                </figcaption>
              </figure>

              <div>
                <Block label="Design and sample">
                  <p>A systematic review following PRISMA guidelines and registered on the Open Science Framework. The team searched six databases: ACM Digital Library, Web of Science, Scopus, IEEE, EBSCO, and others.</p>
                  <p>The review synthesized eligible English-language, peer-reviewed work published from January 2010 through December 2023. No new human participant data were collected: the sample below is drawn from existing research.</p>
                  <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border mt-2">
                    {[
                      ["16,358", "records identified"],
                      ["370", "read in full text"],
                      ["68", "papers included"],
                      ["78", "studies reviewed"],
                    ].map(([n, l]) => (
                      <div key={l} className="bg-card p-4">
                        <dt className="sr-only">{l}</dt>
                        <dd className="font-display text-4xl text-primary">{n}</dd>
                        <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-[1rem] text-foreground/75">About two-thirds of the included studies used experimental designs (primarily online), roughly one-third used surveys, and a handful were qualitative or mixed-methods studies.</p>
                </Block>
                <Block label="Major findings">
                  <ol className="space-y-4 text-[1.08rem] leading-relaxed">
                    <li className="flex gap-4"><span className="font-mono text-sm text-primary pt-1">01</span><span>Trust and perceived social support frequently functioned as relational mediators through which chatbot features shaped influence outcomes.</span></li>
                    <li className="flex gap-4"><span className="font-mono text-sm text-primary pt-1">02</span><span>Chatbot design features were examined most often (46 studies), followed by user (30) and message-related factors (18).</span></li>
                    <li className="flex gap-4"><span className="font-mono text-sm text-primary pt-1">03</span><span>The literature is dominated by short-term experimental designs, inconsistent conceptualization, and a relative lack of attention to what chatbots actually say.</span></li>
                  </ol>
                </Block>
                <Block label="Implications">
                  <p><strong className="font-semibold">For theory:</strong> the HAIR Framework positions relational constructs not as incidental outcomes but as central pathways through which chatbots build influence.</p>
                  <p><strong className="font-semibold">For design:</strong> beyond technical performance, developers should embed features that foster trust, rapport, and responsiveness, at both the system and interaction levels.</p>
                  <p><strong className="font-semibold">A caution:</strong> relational leverage carries risk. Trust and perceived support may heighten overreliance, so relational benefits and harms can coexist.</p>
                  <p><strong className="font-semibold">Evidence limits:</strong> this was a qualitative synthesis, not a meta-analysis. Measures varied across studies, and findings were not weighted or re-estimated.</p>
                </Block>
                <div className="mt-6 bg-primary text-primary-foreground p-8 sm:p-10">
                  <p className="font-mono text-xs tracking-[0.14em] uppercase opacity-75">Takeaway</p>
                  <p className="font-display text-[2rem] sm:text-[2.3rem] leading-snug mt-3 max-w-3xl">
                    Relationships with chatbots are a central process through which their social influence unfolds, and what chatbots actually say is one of the least studied parts of that process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section id="research-panel-publications" hidden={view !== "publications"} className="border-t border-border pt-10" aria-labelledby="research-control-publications">
            <p className="eyebrow">From the CV</p>
            <h2 id="pubs-title" className="font-display text-[2.6rem] sm:text-[3.2rem] mt-3">Selected publications</h2>
            <p className="mt-4 text-base text-foreground/75 max-w-2xl">
              Organized by research theme. An asterisk (*) follows the CV's notation. The{" "}
              <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="link-u text-primary">full CV</a> lists all publications and presentations.
            </p>

            <nav aria-label="Publication themes" className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {THEMES.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="inline-block border border-border px-3 py-1.5 text-base hover:border-primary hover:text-primary transition-colors" data-testid={`link-jump-${t.id}`}>{t.name}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {THEMES.map((t) => (
              <div key={t.id} id={t.id} className="scroll-mt-20 grid xl:grid-cols-[200px_minmax(0,1fr)] gap-6 xl:gap-8 py-12 border-t border-border mt-12 first-of-type:mt-12">
                <div>
                  <h3 className="font-display text-[2.1rem] text-primary leading-tight">{t.name}</h3>
                  <p className="mt-3 text-[1rem] text-foreground/70">{t.summary}</p>
                </div>
                <ol className="space-y-6">
                  {t.pubs.map((p, i) => (
                    <li key={p.url} className="text-[1rem] leading-relaxed" data-testid={`text-pub-${t.id}-${i}`}>
                      {p.note && <span className="inline-block font-mono text-[0.72rem] uppercase tracking-wider text-primary border border-primary/30 px-1.5 py-0.5 mb-1.5">{p.note}</span>}
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
        </div>
      </div>

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
