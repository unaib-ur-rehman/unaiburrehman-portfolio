import type { MouseEvent } from "react";

/**
 * Smooth-scrolls to an in-page section without letting the browser append
 * `#id` to the address bar. Falls through to normal anchor navigation for
 * modified clicks (new tab, new window, etc.) so that behavior stays intact.
 */
export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  reduced: boolean
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
}
