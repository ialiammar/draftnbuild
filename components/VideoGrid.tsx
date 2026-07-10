'use client';

import { useState, useEffect } from 'react';
import type { PortfolioItem } from '@/lib/data/portfolio';
import VideoTile from '@/components/VideoTile';

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export default function VideoGrid({ items }: { items: PortfolioItem[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const allPortrait = items.every((i) => i.aspectRatio === 'portrait');

  // Mobile: 2-col for portrait, 1-col for landscape
  // Desktop: auto-fill with proper min widths
  const gridColumns = isTouch
    ? allPortrait
      ? 'repeat(2, 1fr)'
      : '1fr'
    : allPortrait
      ? 'repeat(auto-fill, minmax(180px, 1fr))'
      : 'repeat(auto-fill, minmax(320px, 1fr))';

  return (
    <div
      style={{
        display: 'grid',
        gap: isTouch ? '12px' : '20px',
        gridTemplateColumns: gridColumns,
      }}
    >
      {items.map((item) => (
        <VideoTile
          key={item.id}
          item={item}
          isActive={hoveredId === item.id}
          isDimmed={!isTouch && hoveredId !== null && hoveredId !== item.id}
          onHoverStart={() => setHoveredId(item.id)}
          onHoverEnd={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}