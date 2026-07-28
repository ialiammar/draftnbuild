'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FolderOpen,
  Scissors,
  MessageSquare,
  Rocket,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Brief & Raw Assets',
    description:
      'Upload your raw files, link your style references, and tell us your vision. We take it from there—no micromanagement needed.',
    icon: FolderOpen,
  },
  {
    number: '02',
    title: 'The Draft Cut',
    description:
      'Receive your tailored draft framed for narrative pacing, audio balance, and visual style.',
    icon: Scissors,
  },
  {
    number: '03',
    title: 'Refine & Polish',
    description:
      'Review the edit and request adjustments. We refine motion graphics, color grade, and sound design until it’s perfect.',
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'Final Render',
    description:
      'Receive full-resolution master exports formatted perfectly for YouTube, Instagram, or TikTok.',
    icon: Rocket,
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    // 4s interval instead of 2s — gives people time to read
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, active]);

  const step = STEPS[active];
  const Icon = step.icon;

  function handleStepClick(index: number) {
    setActive(index);
    // Pause briefly so the user can read the selected step
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  }

  return (
    <section id="process" className="relative overflow-hidden py-14 sm:py-20 bg-transparent text-current">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--orange)]">
            A Frictionless Editing Experience
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            A Simple Editing Workflow
          </h2>
          <p className="mt-4 text-sm opacity-70">
            No chaotic Slack threads. No endless revision loops.
            Just a simple, transparent workflow built to deliver publish-ready edits on schedule.
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="mt-10 max-w-2xl mx-auto sm:mt-14">
          <div className="relative">
            {/* Background line */}
            <div className="absolute top-3 left-0 h-[2px] w-full bg-current opacity-10" />

            {/* Active progress line */}
            <motion.div
              animate={{ width: `${(active / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute top-3 left-0 h-[2px] bg-[var(--orange)] origin-left"
            />

            {/* Glowing handle */}
            <motion.div
              animate={{ left: `${(active / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute top-3 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--orange)] shadow-[0_0_12px_rgba(249,115,22,.6)]"
            />

            {/* Step buttons — 48px touch targets */}
            <div className="relative flex justify-between">
              {STEPS.map((item, index) => (
                <button
                  key={item.number}
                  onClick={() => handleStepClick(index)}
                  className="group flex flex-col items-center focus:outline-none"
                  style={{ padding: '0 8px', minWidth: 48, minHeight: 48 }}
                >
                  <div
                    className={`z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${active >= index
                      ? 'border-[var(--orange)] bg-[var(--orange)] shadow-[0_0_10px_rgba(249,115,22,0.3)]'
                      : 'border-current/20 bg-[var(--bg)] group-hover:border-current/40'
                      }`}
                  />
                  <span
                    className={`mt-2 text-xs font-bold transition-colors duration-300 ${active === index ? 'text-[var(--orange)]' : 'opacity-40 group-hover:opacity-80'
                      }`}
                  >
                    {item.number}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Process Card Content */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => {
            // Resume after 5s on mobile so user can read
            setTimeout(() => setPaused(false), 5000);
          }}
          className="mt-10 max-w-2xl mx-auto rounded-2xl border border-current/10 bg-current/[0.02] p-6 backdrop-blur-xl sm:mt-12 sm:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--orange)]/10 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-[var(--orange)]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--orange)]">
                    STEP {step.number}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 opacity-85 sm:mt-5 sm:text-base">
                {step.description}
              </p>

              {/* Progress indicator */}
              <div className="mt-5 sm:mt-6">
                <div className="mb-1.5 flex justify-between text-xs opacity-50">
                  <span>Step Progress</span>
                  <span>
                    {active + 1} / {STEPS.length}
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-current/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="h-full rounded-full bg-[var(--orange)]"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}