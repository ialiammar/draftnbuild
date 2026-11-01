'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [{ label: 'The work', href: '/#work' }, { label: 'What we do', href: '/#services' }, { label: 'The studio', href: '/#studio' }];
export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="agency-nav" aria-label="Main navigation">
      <Link className="agency-brand" href="/" onClick={() => setOpen(false)} aria-label="Draft n Build home">
        <span className="brand-mark" aria-hidden="true"><i /></span>
        <span>Draft n Build</span>
      </Link>
      <div className="nav-desktop">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
      <Link href="/#contact" className="nav-cta">Let’s build <ArrowUpRight size={17} /></Link>
      <button className="nav-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <div className="nav-mobile" id="mobile-navigation">{[...links, { label: 'Ways to work together', href: '/#partnerships' }, { label: 'Let’s talk', href: '/#contact' }].map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={20} /></Link>)}</div>}
    </nav>
  </>;
}
