"use client";

export default function DesktopNav({ items, className = "" }) {
  return (
    <nav
      id="primary-nav"
      className={`ml-6 hidden md:flex items-center gap-8 text-base text-kiddo-muted font-bold ${className}`}
    >
      {items.map((n) => (
        <a
          key={n.href}
          href={n.href}
          className="hover:text-slate-900 transition-colors leading-6"
        >
          {n.label}
        </a>
      ))}
    </nav>
  );
}
