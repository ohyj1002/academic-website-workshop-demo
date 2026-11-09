import { Link } from "wouter";
import { usePageMeta } from "@/lib/site";

export default function NotFound() {
  usePageMeta("Page not found", "This page does not exist.");
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-5xl mt-4">This page could not be found.</h1>
      <Link href="/" className="mt-8 inline-block text-primary link-u" data-testid="link-back-home">Return to the About page</Link>
    </div>
  );
}
