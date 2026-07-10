import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-8 pb-8 pt-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-9 flex flex-wrap justify-between gap-6">
          <div className="flex items-center gap-2 font-display text-[19px] font-black tracking-tight text-[var(--bg)]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--orange)]" />
            </div>
            Draft n Build
          </div>
          <div className="flex flex-wrap gap-16">
            <div>
              <h5 className="mb-3.5 font-mono-brand text-[11.5px] uppercase tracking-wide text-white/35">
                Portfolio
              </h5>
              <Link className="mb-2 block text-[14px] text-white/65 hover:text-white" href="/portfolio/motion-graphics">
                Motion Graphics
              </Link>
              <Link className="mb-2 block text-[14px] text-white/65 hover:text-white" href="/portfolio/long-form">
                Long-Form
              </Link>
              <Link className="mb-2 block text-[14px] text-white/65 hover:text-white" href="/portfolio/short-form">
                Short-Form
              </Link>
            </div>
            <div>
              <h5 className="mb-3.5 font-mono-brand text-[11.5px] uppercase tracking-wide text-white/35">
                Contact
              </h5>
              <a className="mb-2 block text-[14px] text-white/65 hover:text-white" href="mailto:ranaaliammarrajput@gmail.com">
                ranaaliammarrajput@gmail.com
              </a>
              <a
                className="mb-2 block text-[14px] text-white/65 hover:text-white"
                href="https://wa.me/923259735356"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +92 325 9735356
              </a>
              <a className="mb-2 block text-[14px] text-white/65 hover:text-white" href="https://www.instagram.com/i.aliammar/">
                Instagram
              </a>

            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 font-mono-brand text-[12.5px] text-white/35">
          <span>© 2026 Draft n Build. All rights reserved.</span>
          <span></span>
        </div>
      </div>
    </footer>
  );
}