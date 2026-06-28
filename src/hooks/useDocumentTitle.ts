import { useEffect } from "react";

const BRAND = "Levity Aerial Yoga";
const DEFAULT_TITLE = "Levity · Aerial Yoga Studio";
const DEFAULT_DESCRIPTION =
  "Levity is a boutique aerial yoga studio where gravity lets go. Learn to fly, build strength, and find calm in our silk hammocks — classes for every body, from first flight to advanced inversions.";

/**
 * Sets the document <title> and meta description for the current route. Pages
 * pass a short title; the brand suffix is appended. When a page passes no
 * description, the site default is restored so descriptions never go stale as
 * the user navigates between routes.
 */
export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${BRAND}` : DEFAULT_TITLE;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description ?? DEFAULT_DESCRIPTION;
  }, [title, description]);
}
