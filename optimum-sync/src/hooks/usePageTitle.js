import { useEffect } from "react";

const SITE = "Optimum Sync";

// Call at the top of every page:  usePageTitle("Services", "What we build for you.");
// No arguments = the default home title.
export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} – Technology for a Better Tomorrow`;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
