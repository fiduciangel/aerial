import { useEffect } from "react";

const BRAND = "Levity Aerial Yoga";
const DEFAULT_TITLE = "Levity · Aerial Yoga Studio";

/**
 * Sets the document <title> (and optionally the meta description) for the
 * current route. Pages pass a short title; the brand suffix is appended. With
 * no title (the home page) the full default title is used.
 */
export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${BRAND}` : DEFAULT_TITLE;

    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}
