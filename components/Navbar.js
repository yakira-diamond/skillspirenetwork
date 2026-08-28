"use client";

import { useState } from "react";
import Link from "next/link";
import SpireMark from "./SpireMark";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/learn", label: "Learn" },
  { href: "/community", label: "Community" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/blog", label: "Blog" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur border-b border-graphite/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <SpireMark className="h-6 w-8" />
          <span className="font-display font-semibold text-imperial text-lg tracking-tight">
            SkillSpire
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite/80 hover:text-imperial transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={user ? "/dashboard" : "/signup"}
            className="inline-flex items-center rounded-full bg-imperial px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-imperial-deep transition-colors"
          >
            {user ? "Dashboard" : "Join SkillSpire"}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-imperial transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-imperial transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-imperial transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-graphite/10 bg-ivory px-5 py-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base font-medium text-graphite/85"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-2.5 text-base font-medium text-graphite/85"
          >
            Contact
          </Link>
          <Link
            href={user ? "/dashboard" : "/signup"}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full bg-imperial px-5 py-3 text-sm font-semibold text-ivory"
          >
            {user ? "Dashboard" : "Join SkillSpire"}
          </Link>
        </nav>
      )}
    </header>
  );
}
