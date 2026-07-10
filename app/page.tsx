import Link from 'next/link';
import ScrubBar from '@/components/ScrubBar';
import VideoGrid from '@/components/VideoGrid';
import Process from '@/components/Process';
import Reveal from '@/components/Reveal';
import ServiceGrid from '@/components/ServiceGrid';
import { getPortfolioByCategory } from '@/lib/data/portfolio';

export default function Home() {
  const shortForm = getPortfolioByCategory('short-form').slice(0, 5);
  const longForm = getPortfolioByCategory('long-form').slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <header className="relative overflow-hidden pb-8 pt-[68px] sm:pb-10 sm:pt-[76px]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display font-black tracking-tight text-transparent"
          style={{ fontSize: 'min(24vw, 300px)', WebkitTextStroke: '1.5px rgba(19,19,19,0.10)' }}
        >
          BUILD
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-6 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr]">
          <div className="pt-1.5">
            <span className="eyebrow font-mono-brand text-[11px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-[12.5px]">
              Edit · Grade · Deliver
            </span>
            <h1 className="my-4 font-display text-[2.2rem] font-black uppercase leading-[0.96] tracking-tight sm:text-[3.6rem] lg:text-[4.7rem]">
              Edits built to<br />keep people<br />
              <span className="text-[var(--orange)]">watching</span>
            </h1>
            <p className="mb-6 max-w-[460px] text-[15px] leading-relaxed text-[var(--ink-soft)] sm:mb-8 sm:text-[17px]">
              Draft n Build cuts gaming, documentary, and short-form video into stories that hold attention — from first frame to final render.
            </p>
            {/* CTA buttons — minimum 48px height for mobile tap targets */}
            <div className="mb-8 flex flex-wrap items-center gap-3 sm:mb-12">
              <Link
                href="/#contact"
                className="inline-flex h-12 cursor-pointer items-center rounded-full bg-[var(--orange)] px-6 text-[14px] font-semibold text-white transition-all hover:scale-105 hover:bg-[var(--orange-deep)] active:scale-95 sm:text-[14.5px]"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio/short-form"
                className="inline-flex h-12 cursor-pointer items-center rounded-full border-2 border-[var(--ink)] px-6 text-[14px] font-semibold transition-all hover:scale-105 hover:bg-[var(--ink)] hover:text-[var(--bg)] active:scale-95 sm:text-[14.5px]"
              >
                See the Work
              </Link>
            </div>
            <div className="w-fit rounded-2xl bg-[var(--ink)] px-5 py-5 sm:px-6 sm:py-6">
              <div className="font-display text-[32px] font-black text-white sm:text-[40px]">
                45<span className="text-[var(--teal)]">+</span>
              </div>
              <div className="max-w-[230px] text-[12px] leading-snug text-white/60 sm:text-[13px]">
                Videos edited, graded, and shipped for creators and brands.
              </div>
            </div>
          </div>

          {/* HERO VISUAL — hidden on mobile to prevent overflow and clutter */}
          <div className="relative hidden h-[360px] md:block md:h-[480px]">
            <div className="animate-float absolute right-[6%] top-[6%] z-[3] w-[78%] rounded-xl border-2 border-[var(--ink)] bg-[var(--panel)] p-4 pb-6 drop-shadow-lg">
              <div className="mb-4 flex gap-1.5">
                <i className="h-2 w-2 rounded-full bg-[var(--line)]" />
                <i className="h-2 w-2 rounded-full bg-[var(--line)]" />
                <i className="h-2 w-2 rounded-full bg-[var(--line)]" />
              </div>
              <div className="mb-3 flex h-[52px] items-end gap-1">
                <div className="h-full w-[22%] rounded-sm bg-[var(--orange)]" />
                <div className="h-full w-[14%] rounded-sm bg-[var(--ink)]" />
                <div className="h-full w-[30%] rounded-sm bg-[var(--teal)]" />
                <div className="h-full w-[18%] rounded-sm bg-[var(--orange)] opacity-55" />
                <div className="h-full w-[16%] rounded-sm bg-[var(--ink)] opacity-70" />
              </div>
              <div className="flex h-[26px] items-end gap-0.5">
                {[8, 16, 10, 22, 14, 20, 9, 17, 12, 24, 11, 15].map((h, i) => (
                  <i key={i} style={{ height: h }} className="block w-[3px] rounded-sm bg-[var(--ink-faint)]" />
                ))}
              </div>
              <div className="relative mt-1 h-0.5 rounded bg-[var(--line)]">
                <div className="absolute left-[38%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--panel)] bg-[var(--orange)] shadow-[0_0_0_2px_var(--orange)]" />
              </div>
            </div>

            <div className="animate-float-delay-1 absolute bottom-[4%] left-[2%] z-[4] w-[150px] -rotate-[9deg]">
              <div
                className="h-[34px] rounded-t-md border-2 border-[var(--ink)]"
                style={{
                  background: 'repeating-linear-gradient(-35deg, var(--ink) 0 10px, white 10px 20px)',
                  transform: 'rotate(-13deg) translateY(2px)',
                  transformOrigin: 'left bottom',
                }}
              />
              <div className="flex h-[74px] items-center justify-center rounded-b-md border-2 border-[var(--ink)] bg-[var(--ink)]">
                <span className="font-mono-brand text-[11px] tracking-wide text-[var(--bg)]">SCENE 04 / TAKE 02</span>
              </div>
            </div>

            <svg className="animate-float-delay-2 absolute right-0 top-[-4%] z-[4] h-[96px] w-[96px]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#131313" strokeWidth="3" />
              <circle cx="50" cy="50" r="46" fill="var(--teal)" opacity="0.9" />
              <circle cx="50" cy="50" r="10" fill="#F3F4F2" stroke="#131313" strokeWidth="2" />
              <circle cx="50" cy="26" r="8" fill="#F3F4F2" stroke="#131313" strokeWidth="2" />
              <circle cx="72" cy="62" r="8" fill="#F3F4F2" stroke="#131313" strokeWidth="2" />
              <circle cx="28" cy="62" r="8" fill="#F3F4F2" stroke="#131313" strokeWidth="2" />
            </svg>

            <div className="animate-float absolute left-[38%] top-[-2%] z-[5] flex h-[78px] w-[78px] flex-col items-center justify-center gap-0.5 rounded-full border-2 border-[var(--ink)] bg-white">
              <div className="h-2.5 w-2.5 animate-pulse-rec rounded-full bg-[var(--orange)]" />
              <span className="font-mono-brand text-[10px] font-semibold tracking-wide">REC</span>
            </div>

            <div className="animate-float-delay-1 absolute left-[-2%] top-[32%] z-[5] flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--teal)]">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#131313" /></svg>
            </div>

            <div className="animate-float-delay-2 absolute bottom-[-2%] right-[14%] z-[5] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[var(--ink)] bg-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#131313" strokeWidth="2">
                <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                <rect x="2" y="14" width="5" height="7" rx="1.5" />
                <rect x="17" y="14" width="5" height="7" rx="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <ScrubBar />

      {/* SERVICES */}
      <section id="services" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-[620px] sm:mb-12">
            <span className="eyebrow font-mono-brand text-[11px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-[12.5px]">
              What we do
            </span>
            <h2 className="mt-3 font-display text-[1.6rem] font-black uppercase leading-[1.05] tracking-tight sm:mt-3.5 sm:text-[2.6rem]">
              One craft, three formats
            </h2>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* SHORT-FORM REELS */}
      <section id="work" className="bg-[var(--bg-alt)] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-[620px] sm:mb-12">
            <span className="eyebrow font-mono-brand text-[11px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-[12.5px]">
              Short-form reels
            </span>
            <h2 className="mt-3 font-display text-[1.6rem] font-black uppercase leading-[1.05] tracking-tight sm:mt-3.5 sm:text-[2.6rem]">
              Recent cuts
            </h2>
          </div>
          <div className="mb-6 sm:mb-8">
            <VideoGrid items={shortForm} />
          </div>
          <div className="mt-4 flex justify-start">
            <Link
              href="/portfolio/short-form"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--ink-faint)] bg-[var(--panel)] px-6 font-mono-brand text-[12px] font-bold tracking-wider text-[var(--ink)] uppercase transition-all duration-300 hover:scale-[1.03] hover:border-[var(--orange)] hover:bg-[var(--ink)] hover:text-white hover:shadow-[0_4px_24px_rgba(255,90,31,0.2)] active:scale-95"
            >
              All Short-Form
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LONG-FORM */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-[620px] sm:mb-12">
            <span className="eyebrow font-mono-brand text-[11px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-[12.5px]">
              Long-form editing
            </span>
            <h2 className="mt-3 font-display text-[1.6rem] font-black uppercase leading-[1.05] tracking-tight sm:mt-3.5 sm:text-[2.6rem]">
              Recent Work
            </h2>
          </div>
          <div className="mb-6 sm:mb-8">
            <VideoGrid items={longForm} />
          </div>
          <div className="mt-4 flex justify-start">
            <Link
              href="/portfolio/long-form"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--ink-faint)] bg-[var(--panel)] px-6 font-mono-brand text-[12px] font-bold tracking-wider text-[var(--ink)] uppercase transition-all duration-300 hover:scale-[1.03] hover:border-[var(--teal)] hover:bg-[var(--ink)] hover:text-white hover:shadow-[0_4px_24px_rgba(15,175,160,0.2)] active:scale-95"
            >
              All Long-Form
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Process />

      {/* CTA BANNER */}
      <section id="contact" className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 rounded-3xl bg-[var(--ink)] px-6 py-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-8 sm:px-14 sm:py-14">
          <h2 className="max-w-[520px] font-display text-[1.5rem] font-black uppercase leading-[1.02] tracking-tight text-[var(--bg)] sm:text-[2.7rem]">
            Got footage?<br />Let&apos;s cut it <span className="text-[var(--teal)]">together</span>.
          </h2>
          <div className="flex flex-col items-start gap-3">
            <a
              href="https://wa.me/923259735356?text=Hi%20Ali%2C%20I%27d%20like%20to%20talk%20about%20a%20video%20editing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-[var(--orange)] px-6 text-[14px] font-semibold text-white transition-all hover:scale-105 hover:bg-[var(--orange-deep)] active:scale-95 sm:text-[14.5px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 11.5a8.5 8.5 0 0 1-11.8 7.8L3 21l1.7-6.2A8.5 8.5 0 1 1 21 11.5Z" />
              </svg>
              Book an Appointment
            </a>
            <span className="font-mono-brand text-[11px] text-[var(--ink-faint)] sm:text-[12px]">Usually replies within 24 hours</span>
          </div>
        </div>
      </section>
    </main>
  );
}