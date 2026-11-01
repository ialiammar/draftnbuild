import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { agency } from '@/lib/data/agency';
export default function Footer() {
  return <footer className="agency-footer">
    <div className="footer-top"><Link href="/" className="footer-wordmark">Draft n Build<span>↗</span></Link><p>Good ideas deserve<br />to be built well.</p></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Draft n Build</span><div><Link href="/#work">Work</Link><Link href="/#contact">Contact</Link><a href={agency.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a></div><span>Independent studio. Working remotely.</span></div>
  </footer>;
}
