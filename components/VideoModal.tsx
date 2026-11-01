'use client';
import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

type VideoPayload = { title: string; videoSrc?: string; youtubeId?: string };
const VideoModalContext = createContext<{ openVideo: (payload: VideoPayload) => void } | null>(null);
export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) throw new Error('useVideoModal must be used within VideoModalProvider');
  return context;
}
export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<VideoPayload | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const openVideo = useCallback((payload: VideoPayload) => {
    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setVideo(payload);
  }, []);
  const close = useCallback(() => setVideo(null), []);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (video && !dialog.open) {
      dialog.showModal();
      const overflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = overflow; };
    }
    if (!video && dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
  }, [video]);
  return <VideoModalContext.Provider value={{ openVideo }}>
    {children}
    <dialog ref={dialogRef} className="video-dialog" aria-labelledby="video-dialog-title" onCancel={close} onClose={close} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      {video && <div className="video-dialog-inner">
        <button autoFocus className="video-dialog-close" onClick={close} aria-label="Close video"><X size={21} /></button>
        {video.youtubeId ? <iframe src={'https://www.youtube.com/embed/' + video.youtubeId + '?autoplay=1'} title={video.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : video.videoSrc ? <video src={video.videoSrc} controls autoPlay playsInline /> : null}
        <h2 id="video-dialog-title">{video.title}</h2>
      </div>}
    </dialog>
  </VideoModalContext.Provider>;
}
