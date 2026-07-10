'use client';

import { useEffect, useState } from 'react';

export default function ScrubBar() {
  const [timecode, setTimecode] = useState('00:00:12:04');

  useEffect(() => {
    let secs = 12.04;
    const id = setInterval(() => {
      secs += 0.04;
      const m = Math.floor(secs / 60).toString().padStart(2, '0');
      const s = Math.floor(secs % 60).toString().padStart(2, '0');
      const f = Math.round((secs % 1) * 24).toString().padStart(2, '0');
      setTimecode(`00:${m}:${s}:${f}`);
    }, 40);
    return () => clearInterval(id);
  }, []);

  const sprockets = Array.from({ length: 22 });

  return (
    <div className="relative overflow-hidden bg-[var(--ink)] py-6">
      <div className="absolute left-0 right-0 top-1.5 flex justify-between px-4">
        {sprockets.map((_, i) => (
          <i key={`t-${i}`} className="h-2 w-2 rounded-sm bg-white/[0.18]" />
        ))}
      </div>
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-8">
        <div className="flex flex-shrink-0 items-center gap-2 font-mono-brand text-[12.5px] tracking-wide text-[var(--bg)]">
          <span className="h-2 w-2 animate-pulse-rec rounded-full bg-[var(--orange)]" />
          LIVE EDIT
        </div>
        <div className="relative h-[3px] flex-1 rounded bg-white/[0.16]">
          <div className="animate-scrub absolute left-0 top-0 h-full rounded bg-[var(--teal)]" />
        </div>
        <div className="flex-shrink-0 font-mono-brand text-[12.5px] text-white/55">{timecode}</div>
      </div>
      <div className="absolute bottom-1.5 left-0 right-0 flex justify-between px-4">
        {sprockets.map((_, i) => (
          <i key={`b-${i}`} className="h-2 w-2 rounded-sm bg-white/[0.18]" />
        ))}
      </div>
    </div>
  );
}