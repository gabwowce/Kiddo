"use client";

import useLockBodyScroll from "./useLockBodyScroll";

export default function MobileSheet({ open, onClose, items }) {
  useLockBodyScroll(open);

  return (
    <>
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[1000] transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Panelė */}
      <aside
        id="mobile-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar"
        className={`md:hidden fixed left-0 top-0 z-[1001] h-screen w-[min(85vw,320px)]
        bg-white shadow-2xl transform-gpu transition-transform duration-300 will-change-transform
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {/* Viršutinė juosta */}
        <div className="flex items-center justify-end h-12 px-4">
          <button
            onClick={onClose}
            className="h-8 w-8 grid place-items-center rounded focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Close menu"
            title="Close"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Turinys su vidaus scrollu */}
        <nav className="h-[calc(100vh-3rem)] overflow-y-auto p-4 space-y-1">
          {items.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="block rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50"
              onClick={onClose}
            >
              {n.label}
            </a>
          ))}

          {/* Jei reikės – įjunkite CTA ir mobilui */}
          {/* <div className="pt-2">
            <Link
              href="/join/1"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-sm bg-kiddo-btn px-4 py-2 text-white text-sm font-bold hover:bg-kiddo-btn/85 transition-colors"
            >
              Join Waitlist
            </Link>
          </div> */}
        </nav>
      </aside>
    </>
  );
}
