import { useEffect } from "react";

const SITE = "Optimum Sync";
const DEFAULT_TITLE = `${SITE} - Technology for a Better Tomorrow`;
const SITE_URL = "https://optimumsync.com";

function setMetaTag(attribute, key, content) {
  if (!content) return;

  let meta = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

// Call at the top of every page.
// Example: usePageTitle("Services", "What we build for you.");
export default function usePageTitle(title, description) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE}` : DEFAULT_TITLE;
    const pageDescription =
      description ||
      "Optimum Sync builds web, mobile, cloud and AI solutions that scale with your business.";

    const path =
      window.location.pathname === "/"
        ? "/"
        : window.location.pathname.replace(/\/+$/, "");

    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = pageTitle;

    setMetaTag("name", "description", pageDescription);

    setCanonical(canonicalUrl);

    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", pageDescription);
    setMetaTag("property", "og:url", canonicalUrl);

    setMetaTag("name", "twitter:title", pageTitle);
    setMetaTag("name", "twitter:description", pageDescription);
  }, [title, description]);
}