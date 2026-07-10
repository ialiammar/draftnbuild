'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = 'long-form' | 'short-form' | 'motion-graphics';

const MOTIFS: Record<Variant, ReactNode> = {
  'long-form': (
    <svg className="pointer-events-none absolute -bottom-4 -right-4 h-[160px] w-[200px] opacity-[0.16]" viewBox="0 0 200 160">
      {[18, 40, 26, 58, 34, 70, 44, 62, 30, 50].map((h, i) => (
        <rect key={i} x={i * 20} y={160 - h} width="12" height={h} rx="3" fill="var(--orange)" />
      ))}
    </svg>
  ),
  'short-form': (
    <svg
      className="pointer-events-none absolute -bottom-8 -right-6 h-[200px] w-[120px] opacity-[0.16]"
      viewBox="0 0 120 200"
      style={{ transform: 'rotate(-8deg)' }}
    >
      <rect x="6" y="6" width="108" height="188" rx="20" stroke="var(--teal)" strokeWidth="6" fill="none" />
      <path d="M50 90 L50 130 L82 110 Z" fill="var(--teal)" />
    </svg>
  ),
  'motion-graphics': (
    <svg className="pointer-events-none absolute -bottom-6 -right-6 h-[180px] w-[180px] opacity-[0.18]" viewBox="0 0 180 180">
      <circle cx="130" cy="40" r="22" fill="var(--orange)" />
      <circle cx="60" cy="95" r="34" fill="var(--teal)" />
      <circle cx="142" cy="132" r="14" fill="var(--ink)" />
      <circle cx="28" cy="26" r="9" fill="var(--teal)" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
};

export default function ServiceCard({
  index,
  href,
  title,
  description,
  variant,
}: {
  index: string;
  href: string;
  title: string;
  description: string;
  variant: Variant;
  tiltOnHover?: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-2xl border-[1.5px] border-[var(--line)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--ink)] active:border-[var(--orange)] sm:p-6"
      >
        {MOTIFS[variant]}
        <div className="relative z-[1]">
          <span className="mb-5 block font-mono-brand text-[11px] text-[var(--orange)] sm:mb-6 sm:text-[12px]">{index}</span>
          <h3 className="mb-2 font-display text-[16px] font-bold sm:mb-2.5 sm:text-[18px]">{title}</h3>
          <p className="m-0 text-[13px] leading-relaxed text-[var(--ink-soft)] sm:text-[14px]">{description}</p>
          <span className="mt-3 inline-block text-[13px] font-semibold text-[var(--orange)] transition-colors group-hover:text-[var(--orange-deep)] sm:mt-4">
            See the work →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}