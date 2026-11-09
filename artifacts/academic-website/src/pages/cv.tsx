import { Download, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { SITE, usePageMeta } from "@/lib/site";

export default function CV() {
  usePageMeta("Curriculum Vitae", "Curriculum vitae of Yoo Jung (Erika) Oh: education, peer-reviewed publications, and presentations in human–AI and health communication.");
  return (
    <>
      <PageHeader eyebrow="Curriculum Vitae" title="Curriculum vitae">
        <p>
          The full CV lists education, peer-reviewed publications, and conference presentations. Read it below, download a copy, or open it in a new tab.
        </p>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <a href={SITE.cv} download="Yoo-Jung-Oh-CV.pdf" data-testid="button-download-cv" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-medium hover:bg-primary/90 transition-colors">
            <Download className="h-4 w-4" aria-hidden /> Download CV (PDF)
          </a>
          <a href={SITE.cv} target="_blank" rel="noopener noreferrer" data-testid="link-open-cv" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 font-medium hover:bg-accent transition-colors">
            <ExternalLink className="h-4 w-4" aria-hidden /> Open in new tab
          </a>
        </div>
        <div className="border border-border bg-card">
          <object data={SITE.cv} type="application/pdf" className="w-full h-[80vh] min-h-[520px] block" aria-label="Embedded CV of Yoo Jung (Erika) Oh" data-testid="embed-cv">
            <div className="p-10 text-center">
              <p className="font-display text-2xl text-primary">Your browser cannot display the PDF here.</p>
              <p className="mt-3 text-foreground/75">
                Use the{" "}
                <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="link-u text-primary">new-tab link</a>{" "}
                or <a href={SITE.cv} download className="link-u text-primary">download the CV</a>.
              </p>
            </div>
          </object>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">On phones, the embedded viewer may show only the first page. The new-tab link opens the complete document.</p>
      </div>
    </>
  );
}
