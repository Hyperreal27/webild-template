"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Properties", href: "#listings" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const bubbleStyle = {
  background: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "9999px",
} as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">

      {/* ── Desktop bubble ── */}
      <nav className="hidden md:flex items-center gap-8 px-8 py-3" style={bubbleStyle}>
        <Link
          href="#"
          className="flex items-center gap-2 no-underline shrink-0"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ background: "linear-gradient(135deg, #4d96ff, #5971e6)" }}
          >
            L
          </div>
          <span
            className="font-semibold text-sm tracking-tight"
            style={{ fontFamily: "var(--font-halant)", color: "#0f1117" }}
          >
            Luxe Properties
          </span>
        </Link>

        <div className="w-px h-4 shrink-0" style={{ background: "rgba(0,0,0,0.12)" }} />

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium no-underline transition-colors duration-200"
            style={{ color: "#6b7280" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0f1117")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b7280")}
          >
            {link.label}
          </a>
        ))}

        <div className="w-px h-4 shrink-0" style={{ background: "rgba(0,0,0,0.12)" }} />

        <a
          href="#contact"
          className="text-sm font-semibold text-white no-underline px-4 py-1.5 rounded-full transition-opacity hover:opacity-90 shrink-0"
          style={{
            background: "linear-gradient(135deg, #4d96ff 0%, #5971e6 100%)",
            boxShadow: "0 2px 12px rgba(77,150,255,0.35)",
          }}
        >
          Schedule Viewing
        </a>
      </nav>

      {/* ── Mobile bubble ── */}
      <div className="md:hidden w-full max-w-sm">
        <div className="flex items-center justify-between px-5 py-3" style={bubbleStyle}>
          <Link
            href="#"
            className="flex items-center gap-2 no-underline"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: "linear-gradient(135deg, #4d96ff, #5971e6)" }}
            >
              L
            </div>
            <span
              className="font-semibold text-sm tracking-tight"
              style={{ fontFamily: "var(--font-halant)", color: "#0f1117" }}
            >
              Luxe Properties
            </span>
          </Link>

          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 transition-all duration-200"
              style={{ background: "#0f1117", transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "" }} />
            <span className="block w-5 h-0.5 transition-all duration-200"
              style={{ background: "#0f1117", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 transition-all duration-200"
              style={{ background: "#0f1117", transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "" }} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="mt-2 px-5 py-4 flex flex-col gap-1"
            style={{ ...bubbleStyle, borderRadius: "1.5rem" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium no-underline transition-colors duration-150"
                style={{ color: "#6b7280" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0f1117")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b7280")}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <a
                href="#contact"
                className="block text-center text-sm font-semibold text-white no-underline px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #4d96ff 0%, #5971e6 100%)" }}
                onClick={() => setMenuOpen(false)}
              >
                Schedule Viewing
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
