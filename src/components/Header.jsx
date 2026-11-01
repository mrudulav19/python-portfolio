import { useState } from "react";
import { profile, nav } from "../data/content";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">{profile.name}</a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-medium text-muted">
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="transition-colors hover:text-ink">{n.label}</a></li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
