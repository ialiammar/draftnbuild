'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on screen resize to prevent scroll lock issues
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/[0.82] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-[17px] font-black tracking-tight sm:text-[19px]">
          <div className="flex h-[28px] w-[28px] flex-shrink-0 items-center justify-center rounded-lg bg-[var(--ink)] sm:h-[30px] sm:w-[30px]">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)] sm:h-2.5 sm:w-2.5" />
          </div>
          Draft n Build
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-[14.5px] font-medium md:flex">
          <Link href="/" className="text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
            Home
          </Link>
          <Link href="/#services" className="text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
            Portfolio
          </Link>
          <Link href="/portfolio/digital-products" className="text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
            Digital Products
          </Link>
          <Link href="/#contact" className="text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/#contact"
            className="cursor-pointer rounded-full bg-[var(--orange)] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[var(--orange-deep)]"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger — 48px touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`h-0.5 w-6 bg-[var(--ink)] transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-[var(--ink)] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-[var(--ink)] transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu panel — animated slide-down */}
      <div
        ref={menuRef}
        className="md:hidden overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)]"
        style={{
          maxHeight: mobileOpen ? 'calc(100vh - 68px)' : '0px',
          opacity: mobileOpen ? 1 : 0,
          transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
        }}
      >
        <div className="flex flex-col gap-1 px-5 py-5 pb-10">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[16px] font-medium text-[var(--ink-soft)] transition-colors active:bg-[var(--line)]"
          >
            Home
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[16px] font-medium text-[var(--ink-soft)] transition-colors active:bg-[var(--line)]"
          >
            Portfolio
          </Link>
          <Link
            href="/portfolio/digital-products"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[16px] font-medium text-[var(--ink-soft)] transition-colors active:bg-[var(--line)]"
          >
            Digital Products
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[16px] font-medium text-[var(--ink-soft)] transition-colors active:bg-[var(--line)]"
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-full bg-[var(--orange)] px-5 py-3.5 text-center text-[16px] font-semibold text-white active:bg-[var(--orange-deep)]"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}