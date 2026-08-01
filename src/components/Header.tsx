"use client";

import Link from "next/link";
import { useState } from "react";
import MenuDrawer from "@/components/MenuDrawer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--hairline)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-[var(--hairline)]"
          >
            <span className="h-px w-5 bg-fg" />
            <span className="h-px w-5 bg-fg" />
            <span className="h-px w-5 bg-fg" />
          </button>
          <Link
            href="/"
            className="font-display text-xl italic tracking-tight text-fg"
          >
            Fontpro<span className="text-accent">.</span>
          </Link>
        </div>
        <nav className="font-mono text-[11px] uppercase tracking-widest text-mist">
          <Link href="/" className="transition-colors hover:text-fg">
            Generator
          </Link>
        </nav>
      </div>

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
