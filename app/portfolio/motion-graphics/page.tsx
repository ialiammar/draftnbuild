import Link from 'next/link';
import VideoGrid from '@/components/VideoGrid';
import { getPortfolioByCategory } from '@/lib/data/portfolio';

export default function MotionGraphicsPage() {
  const items = getPortfolioByCategory('motion-graphics');

  return (
    <main className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <Link href="/" className="mb-6 inline-flex h-10 items-center font-mono-brand text-[13px] text-[var(--ink-soft)] hover:text-[var(--ink)] sm:mb-8">
          ← Back home
        </Link>
        <span className="eyebrow font-mono-brand text-[11px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-[12.5px]">
          Portfolio
        </span>
        <h1 className="mb-3 mt-3 font-display text-[1.8rem] font-black uppercase leading-[1.02] tracking-tight sm:mb-4 sm:mt-3.5 sm:text-[3.2rem]">
          Motion Graphics
        </h1>
        <p className="mb-10 max-w-[560px] text-[14px] leading-relaxed text-[var(--ink-soft)] sm:mb-14 sm:text-[16px]">
          Titles, lower-thirds, and product-explainer animation that clarify instead of decorate.
        </p>

        {items.length > 0 ? (
          <VideoGrid items={items} />
        ) : (
          <p className="text-[14px] text-[var(--ink-faint)]">
            No projects added yet — add one in lib/data/portfolio.ts.
          </p>
        )}
      </div>
    </main>
  );
}