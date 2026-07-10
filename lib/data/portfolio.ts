// This file is your "database."
// To add a new video: copy one object below, change the values, save.
// It will automatically show up on the matching category page —
// nothing else in the code needs to change.

export type PortfolioCategory = 'motion-graphics' | 'long-form' | 'short-form';
export type AspectRatio = 'portrait' | 'landscape';

export interface PortfolioItem {
  id: string; // unique, no spaces — used internally, never shown on the page
  title: string;
  category: PortfolioCategory;
  description: string;
  client?: string;
  videoSrc?: string; // local file path, e.g. '/videos/my-clip.mp4'
  youtubeId?: string; // YouTube video ID
  thumbnailGradient: string; // placeholder color until you have a real thumbnail image
  tags: string[];
  aspectRatio: AspectRatio; // 'portrait' for 9:16 reels, 'landscape' for 16:9
}

export const portfolioItems: PortfolioItem[] = [
  // ─── LONG-FORM ────────────────────────────────────
  {
    id: 'long-4',
    title: 'How to Instantly Tread Water',
    category: 'long-form',
    description: 'Step-by-step swimming tutorial focusing on instructional pacing and key engagement hooks.',
    client: 'Caribe Swim',
    youtubeId: 'sJ-9nA7GxJk',
    thumbnailGradient: 'from-[#0ea5e9] to-[#0369a1]',
    tags: ['Tutorial', 'Swimming'],
    aspectRatio: 'landscape',
  },
  {
    id: 'long-5',
    title: "They Couldn't Backfloat... 3 Steps Later, This Happened",
    category: 'long-form',
    description: 'Engaging narrative-driven tutorial showcasing real-time progress and student transformation.',
    client: 'Caribe Swim',
    youtubeId: 'ggklCW0Q0Ic',
    thumbnailGradient: 'from-[#06b6d4] to-[#0891b2]',
    tags: ['Case Study', 'Tutorial'],
    aspectRatio: 'landscape',
  },
  {
    id: 'long-6',
    title: 'They Couldn’t Breathe While Swimming… 3 Hours Later, This Happened',
    category: 'long-form',
    description: 'High-retention instructional guide editing with clear visual cues and pacing for breathing techniques.',
    client: 'Caribe Swim',
    youtubeId: '7J_zj_kGJm8',
    thumbnailGradient: 'from-[#14b8a6] to-[#0f766e]',
    tags: ['Swimming', 'Pacing'],
    aspectRatio: 'landscape',
  },
  {
    id: 'long-7',
    title: 'They Couldn’t Float… 3 Hours Later, This Happened',
    category: 'long-form',
    description: 'Educational video edit highlighting technique corrections, structured progression, and visual instructions.',
    client: 'Caribe Swim',
    youtubeId: 'FcQG-eQoh9c',
    thumbnailGradient: 'from-[#3b82f6] to-[#1d4ed8]',
    tags: ['Tutorial', 'Retention'],
    aspectRatio: 'landscape',
  },
  {
    id: 'long-1',
    title: 'Long-Form Edit 1',
    category: 'long-form',
    description: 'Long-form video edit.',
    videoSrc: '/videos/long 1.mp4',
    thumbnailGradient: 'from-[var(--orange)] to-[#7a2c0d]',
    tags: ['Long-Form'],
    aspectRatio: 'landscape',
  },
  {
    id: 'long-2',
    title: 'Long-Form Edit 2',
    category: 'long-form',
    description: 'Long-form video edit.',
    videoSrc: '/videos/long 2.mp4',
    thumbnailGradient: 'from-[var(--teal)] to-[#0a4842]',
    tags: ['Long-Form'],
    aspectRatio: 'landscape',
  },
  {
    id: 'long-3',
    title: 'Long-Form Edit 3',
    category: 'long-form',
    description: 'Long-form video edit.',
    videoSrc: '/videos/long 3.mp4',
    thumbnailGradient: 'from-[var(--ink)] to-[#3a3a3a]',
    tags: ['Long-Form'],
    aspectRatio: 'landscape',
  },


  // ─── MOTION GRAPHICS ─────────────────────────────
  {
    id: 'motion-1',
    title: 'TraffXchange Product Explainer',
    category: 'motion-graphics',
    description: 'Animated SVG hub diagram and full motion graphics blueprint for a B2B product launch.',
    client: 'TraffXchange',
    thumbnailGradient: 'from-[var(--ink)] to-[#3a3a3a]',
    tags: ['B2B', 'Product Explainer'],
    aspectRatio: 'landscape',
  },
  {
    id: 'motion-2',
    title: 'Bitcoin Mining Explained',
    category: 'motion-graphics',
    description: 'Educational YouTube edit with timestamped motion graphics and b-roll guidance.',
    client: 'Microcryptosofts',
    thumbnailGradient: 'from-[#FF5A1F] to-[#DD4310]',
    tags: ['Educational', 'Crypto'],
    aspectRatio: 'landscape',
  },

  // ─── SHORT-FORM ───────────────────────────────────
  {
    id: 'short-16',
    title: 'Hostinger Promo',
    category: 'short-form',
    description: 'Promotional video edit highlighting key features of Hostinger platform.',
    videoSrc: '/videos/Hostinger Promo.mp4',
    thumbnailGradient: 'from-[#673ab7] to-[#e91e63]',
    tags: ['Promo', 'Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-1',
    title: 'Short-Form Reel 1',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 1.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-2',
    title: 'Short-Form Reel 2',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 2.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-3',
    title: 'Short-Form Reel 3',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 3.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-4',
    title: 'Short-Form Reel 4',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 4.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-5',
    title: 'Short-Form Reel 5',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 5.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-6',
    title: 'Short-Form Reel 6',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 6.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-7',
    title: 'Short-Form Reel 7',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 7.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-8',
    title: 'Short-Form Reel 8',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 8.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-9',
    title: 'Short-Form Reel 9',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 9.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-10',
    title: 'Short-Form Reel 10',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 10.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-11',
    title: 'Short-Form Reel 11',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 11.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-12',
    title: 'Short-Form Reel 12',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 12.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-13',
    title: 'Short-Form Reel 13',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 13.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-14',
    title: 'Short-Form Reel 14',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 14.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },
  {
    id: 'short-15',
    title: 'Short-Form Reel 15',
    category: 'short-form',
    description: 'Reel / TikTok-style edit.',
    videoSrc: '/videos/short 15.mp4',
    thumbnailGradient: 'from-[#FF5A1F] to-[#0FAFA0]',
    tags: ['Short-Form'],
    aspectRatio: 'portrait',
  },

];

// Used by each category page — don't edit this part.
export function getPortfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}