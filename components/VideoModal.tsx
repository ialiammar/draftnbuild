'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type VideoPayload = {
  title: string;
  videoSrc?: string;
  youtubeId?: string;
};

type VideoModalContextType = {
  openVideo: (payload: VideoPayload) => void;
};

const VideoModalContext = createContext<VideoModalContextType | null>(null);

export function useVideoModal() {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error('useVideoModal must be used within VideoModalProvider');
  return ctx;
}

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<VideoPayload | null>(null);

  const openVideo = useCallback((payload: VideoPayload) => setVideo(payload), []);
  const close = useCallback(() => setVideo(null), []);

  // Escape key to close
  useEffect(() => {
    if (!video) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, close]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [video]);

  const isLocal = Boolean(video?.videoSrc);

  return (
    <VideoModalContext.Provider value={{ openVideo }}>
      {children}
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(6px)',
              padding: '16px',
              /* Safe area for notched phones */
              paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: isLocal ? '420px' : '860px',
                overflow: 'hidden',
                borderRadius: '16px',
                background: '#000',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              }}
            >
              {/* Close button — 48px for easy thumb tap */}
              <button
                onClick={close}
                aria-label="Close video"
                style={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  zIndex: 10,
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  transition: 'background 0.2s ease',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {video.youtubeId ? (
                <div style={{ aspectRatio: '16/9', width: '100%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              ) : video.videoSrc ? (
                <video
                  src={video.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    display: 'block',
                    width: '100%',
                    maxHeight: '85vh',
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : null}

              <div style={{ padding: '12px 16px' }}>
                <p className="font-display" style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'white',
                }}>
                  {video.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </VideoModalContext.Provider>
  );
}