/**
 * The site scrolls inside the tilted newspaper sheet (components/Sheet.tsx),
 * not the window. Scroll-aware components read position through this helper,
 * which falls back to the window if the sheet is absent.
 */
export const SHEET_SCROLL_ID = "sheet-scroll";

export function sheetScroll() {
  const el = typeof document === "undefined" ? null : document.getElementById(SHEET_SCROLL_ID);
  return {
    target: (el ?? window) as HTMLElement | Window,
    top: () => (el ? el.scrollTop : window.scrollY),
    viewport: () => (el ? el.clientHeight : window.innerHeight),
    height: () => (el ? el.scrollHeight : document.documentElement.scrollHeight),
    /** Viewport-space y of the visible top edge of the scrolling area. */
    edge: () => (el ? el.getBoundingClientRect().top : 0),
  };
}
