'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useVideoModal } from '@/components/VideoModal';
import type { PortfolioItem } from '@/lib/data/portfolio';

// Module-level mute preference — shared across all tiles.
let globalMuted = true;

// Detect touch device (runs once on first render)
function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export default function VideoTile({
  item,
  isActive,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: {
  item: PortfolioItem;
  isActive: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const { openVideo } = useVideoModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(item.videoSrc || item.youtubeId);
  const isPortrait = item.aspectRatio === 'portrait';
  const [isMuted, setIsMuted] = useState(globalMuted);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  // Sync mute state
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = isMuted;
  }, [isMuted]);

  // Play/pause on hover (desktop only)
  useEffect(() => {
    if (isTouch) return; // Don't auto-play on mobile hover
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.currentTime = 0;
      v.muted = isMuted;
      v.play().catch(() => {
        v.muted = true;
        setIsMuted(true);
        globalMuted = true;
        v.play().catch(() => {});
      });
    } else {
      v.pause();
    }
  }, [isActive, isMuted, isTouch]);

  // On mobile: tap → open modal directly
  // On desktop: click → open modal (same as before)
  function handleClick() {
    if (!hasVideo) return;
    openVideo({ title: item.title, videoSrc: item.videoSrc, youtubeId: item.youtubeId });
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    const next = !isMuted;
    setIsMuted(next);
    globalMuted = next;
  }

  // On mobile: no scale/blur effects, just a subtle press
  // On desktop: full scale + blur behavior
  const tileStyle: React.CSSProperties = isTouch
    ? {
        position: 'relative',
        zIndex: 1,
        transition: 'transform 0.2s ease',
        transform: 'scale(1)',
      }
    : {
        position: 'relative',
        zIndex: isActive ? 50 : 1,
        transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease, opacity 0.4s ease',
        transform: isActive ? 'scale(1.18)' : isDimmed ? 'scale(0.95)' : 'scale(1)',
        filter: isDimmed ? 'blur(4px) brightness(0.5)' : 'blur(0px) brightness(1)',
        opacity: isDimmed ? 0.6 : 1,
      };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    /* On mobile: cap portrait height so tiles don't dominate the screen */
    aspectRatio: isPortrait ? (isTouch ? '3 / 4' : '9 / 16') : '16 / 9',
    border: isActive && !isTouch ? '3px solid var(--orange)' : '2px solid rgba(255,255,255,0.12)',
    boxShadow: isActive && !isTouch
      ? '0 0 36px rgba(255,90,31,0.5), 0 0 80px rgba(255,90,31,0.2)'
      : '0 4px 20px rgba(0,0,0,0.15)',
    background: 'rgba(19,19,19,0.6)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    transition: 'border 0.3s ease, box-shadow 0.45s ease',
  };

  return (
    <div
      onMouseEnter={isTouch ? undefined : onHoverStart}
      onMouseLeave={isTouch ? undefined : onHoverEnd}
      onClick={handleClick}
      className={hasVideo ? 'cursor-pointer' : 'cursor-default'}
      style={tileStyle}
    >
      <div style={containerStyle}>
        {/* Video element */}
        {item.videoSrc ? (
          <video
            ref={videoRef}
            src={item.videoSrc}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : item.youtubeId ? (
          <img
            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
            alt={item.title}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
            }}
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${item.thumbnailGradient}`}
            style={{ position: 'absolute', inset: 0 }}
          />
        )}

        {/* Glass overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.03) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Play button overlay — always visible on mobile, hover-only on desktop */}
        {hasVideo && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isTouch ? 1 : (isActive ? 1 : 0),
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: isTouch ? 44 : 52,
                height: isTouch ? 44 : 52,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="#131313" />
              </svg>
            </div>
          </div>
        )}

        {/* Mute toggle — desktop only, on active tile */}
        {!isTouch && isActive && item.videoSrc && (
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 10,
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
          >
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        )}

        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: isTouch ? '10px' : '14px',
          }}
        >
          <span
            className="font-mono-brand"
            style={{
              display: 'inline-block',
              borderRadius: 20,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              padding: '2px 8px',
              fontSize: isTouch ? '9px' : '10px',
              color: 'white',
              letterSpacing: '0.04em',
            }}
          >
            {item.tags[0]}
          </span>
        </div>
      </div>
    </div>
  );
}