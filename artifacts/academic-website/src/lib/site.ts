import { useEffect } from "react";

export const asset = (p: string) => `${import.meta.env.BASE_URL}assets/${p}`;

export const SITE = {
  name: "Yoo Jung (Erika) Oh",
  email: "ohyoojun@msu.edu",
  scholar: "https://scholar.google.com/citations?user=kZAz0c8AAAAJ&hl=en&oi=ao",
  cv: asset("cv.pdf"),
  photo: asset("profile-photo.png"),
  figure: asset("featured-figure.png"),
  study: asset("featured-study.pdf"),
};

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const full = `${title} | ${SITE.name}`;
    document.title = full;
    setMeta("name", "description", description);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", full);
    setMeta("name", "twitter:description", description);
    setMeta("property", "og:image", new URL(SITE.photo, window.location.origin).href);
  }, [title, description]);
}
