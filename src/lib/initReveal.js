export function initReveal(options = {}) {
  const {
    selector = ".u-reveal, .u-stagger", // ką stebėti
    threshold =  1,                   // kiek % elemento turi matytis
    rootMargin = "0px 0px -10% 0px",    // ankstesnis/vėlesnis suveikimas
    once = true,                        // true: animuoja tik 1 kartą
    observeMutations = true,            // sekti dinamiškai pridėtus elementus
  } = options;

  if (typeof window === "undefined") return () => {};

  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let io = null;
  let mo = null;

  const reveal = (el) => el.classList.add("is-inview");
  const hide   = (el) => el.classList.remove("is-inview");

  const handleEntry = (entry) => {
    const el = entry.target;
    if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
      reveal(el);
      if (once && io) io.unobserve(el);
      // jei tai .u-stagger — vaikams pritaikyti delay’us padaro tavo CSS
      if (el.classList.contains("u-stagger")) {
        // jei pamiršai .u-reveal ant vaikų, pridedame automatiškai (nebūtina)
        el.querySelectorAll(":scope > *").forEach((child) => {
          if (!child.classList.contains("u-reveal")) child.classList.add("u-reveal");
        });
      }
    } else if (!once) {
      hide(el);
    }
  };

  const observeAll = () => {
    const nodes = Array.from(document.querySelectorAll(selector));
    if (prefersReduce || !("IntersectionObserver" in window)) {
      nodes.forEach(reveal);
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        (entries) => entries.forEach(handleEntry),
        { root: null, threshold, rootMargin }
      );
    }
    nodes.forEach((el) => io.observe(el));
  };

  // Pirmas paleidimas
  observeAll();

  // (nebūtina) — stebėti naujus elementus (pvz., po navigacijos)
  if (observeMutations && "MutationObserver" in window) {
    mo = new MutationObserver((mutList) => {
      for (const m of mutList) {
        if (m.type === "childList" && (m.addedNodes?.length || 0) > 0) {
          // tik nauji elementai, atitinkantys selektorių
          m.addedNodes.forEach((n) => {
            if (!(n instanceof HTMLElement)) return;
            if (n.matches && n.matches(selector)) {
              if (prefersReduce || !io) reveal(n);
              else io.observe(n);
            }
            // ir jų vaikai
            n.querySelectorAll?.(selector).forEach((el) => {
              if (prefersReduce || !io) reveal(el);
              else io.observe(el);
            });
          });
        }
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }

  // Grąžinam „cleanup“
  return () => {
    if (io) io.disconnect();
    if (mo) mo.disconnect();
  };
}
