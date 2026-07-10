export default function DigitalProductsPage() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[var(--ink)]">
      {/* LEFT HALF-CIRCLE */}
      <div
        className="animate-spin-slow-left pointer-events-none absolute left-0 top-1/2 h-[560px] w-[560px] rounded-full opacity-70 blur-[2px]"
        style={{
          background:
            'conic-gradient(from 0deg, var(--orange), transparent 30%, var(--teal) 55%, transparent 85%, var(--orange))',
        }}
      />
      <div className="pointer-events-none absolute left-0 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--orange)] opacity-[0.15] blur-[100px]" />

      {/* RIGHT HALF-CIRCLE */}
      <div
        className="animate-spin-slow-right pointer-events-none absolute right-0 top-1/2 h-[560px] w-[560px] rounded-full opacity-70 blur-[2px]"
        style={{
          background:
            'conic-gradient(from 180deg, var(--teal), transparent 30%, var(--orange) 55%, transparent 85%, var(--teal))',
        }}
      />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[560px] w-[560px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--teal)] opacity-[0.15] blur-[100px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <span className="mb-6 rounded-full border border-white/15 px-4 py-1.5 font-mono-brand text-[12px] uppercase tracking-[0.15em] text-white/60">
          Digital Products
        </span>

        <h1 className="animate-glow-pulse font-display text-[3.2rem] font-black uppercase leading-[0.92] tracking-tight sm:text-[5.5rem] lg:text-[7rem]">
          <span className="block bg-gradient-to-r from-[var(--orange)] to-[var(--teal)] bg-clip-text text-transparent">
            Coming
          </span>
          <span className="block bg-gradient-to-r from-[var(--teal)] to-[var(--orange)] bg-clip-text text-transparent">
            Soon
          </span>
        </h1>

        <p className="mt-8 max-w-[440px] text-[15px] leading-relaxed text-white/55">
          {/* description under COMING SOON goes here. */}
        </p>

        <a
          href="mailto:hello@draftnbuild.com?subject=Notify me about the course"
          className="mt-10 cursor-pointer rounded-full bg-white px-7 py-3 text-[14.5px] font-semibold text-[var(--ink)] transition-transform hover:scale-105"
        >
          Notify Me
        </a>
      </div>
    </main>
  );
}