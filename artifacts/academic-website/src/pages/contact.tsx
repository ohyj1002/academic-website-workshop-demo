import { GraduationCap, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { SITE, usePageMeta } from "@/lib/site";

export default function Contact() {
  usePageMeta("Contact", "Contact Yoo Jung (Erika) Oh, Department of Communication, Michigan State University, by email or through Google Scholar.");
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch">
        <p>For research collaborations, questions about published work, or student inquiries, email is the best way to reach me.</p>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[1.3fr_1fr] gap-10">
        <div className="bg-primary text-primary-foreground p-8 sm:p-12">
          <p className="font-mono text-xs tracking-[0.14em] uppercase opacity-75">Email</p>
          <a href={`mailto:${SITE.email}`} className="block font-display text-3xl sm:text-4xl mt-3 break-all hover:underline underline-offset-4" data-testid="link-email-large">
            {SITE.email}
          </a>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          <div className="py-6">
            <dt className="eyebrow">Affiliation</dt>
            <dd className="mt-2">
              Department of Communication
              <br />
              Michigan State University
            </dd>
          </div>
          <div className="py-6">
            <dt className="eyebrow">Profiles</dt>
            <dd className="mt-2">
              <a href={SITE.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium link-u" data-testid="link-scholar">
                <GraduationCap className="h-4 w-4" aria-hidden /> Google Scholar <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
