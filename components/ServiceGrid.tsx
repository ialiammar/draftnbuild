'use client';

import { motion, type Variants } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ServiceGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      <ServiceCard
        index="01"
        href="/portfolio/long-form"
        title="Long-Form Editing"
        description="Gaming, documentary, and educational content cut for pacing, hooks, and full-video retention."
        variant="long-form"
        tiltOnHover={-1.5}
      />
      <ServiceCard
        index="02"
        href="/portfolio/short-form"
        title="Short-Form Editing"
        description="Reels, Shorts, and TikTok-style cuts built around the first three seconds."
        variant="short-form"
        tiltOnHover={1.5}
      />
      <ServiceCard
        index="03"
        href="/portfolio/motion-graphics"
        title="Motion Graphics"
        description="Titles, lower-thirds, and product-explainer animation that clarify instead of decorate."
        variant="motion-graphics"
        tiltOnHover={-1.5}
      />
    </motion.div>
  );
}