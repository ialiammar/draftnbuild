'use client';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import { useVideoModal } from '@/components/VideoModal';
import type { PortfolioItem } from '@/lib/data/portfolio';

export default function VideoTile({ item, isActive, onHoverStart, onHoverEnd }: {
  item: PortfolioItem; isActive: boolean; isDimmed: boolean;
  onHoverStart: () => void; onHoverEnd: () => void;
}) {
  const { openVideo } = useVideoModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const playable = Boolean(item.videoSrc || item.youtubeId);
  const preview = <div className="archive-preview">
    {item.videoSrc ? <video ref={videoRef} src={item.videoSrc + '#t=1'} muted loop playsInline preload="metadata" aria-hidden="true" /> : item.youtubeId ? <img src={'https://img.youtube.com/vi/' + item.youtubeId + '/hqdefault.jpg'} alt="" loading="lazy" /> : <span>Motion graphics</span>}
    {playable && <span className="archive-play"><Play size={17} fill="currentColor" /></span>}
  </div>;
  return <article className="archive-item">
    <button className={'archive-tile ' + (isActive ? 'archive-active' : '')} aria-label={'Watch ' + item.title} disabled={!playable}
      onMouseEnter={() => { onHoverStart(); videoRef.current?.play().catch(() => {}); }}
      onMouseLeave={() => { onHoverEnd(); videoRef.current?.pause(); }}
      onClick={() => openVideo({ title: item.title, videoSrc: item.videoSrc, youtubeId: item.youtubeId })}
      style={{ aspectRatio: item.aspectRatio === 'portrait' ? '3 / 4' : '16 / 9' }}>{preview}</button>
    <h2 className="archive-title">{item.title}</h2>
    <p className="archive-caption">{item.client || item.tags.join(' · ')}</p>
  </article>;
}
