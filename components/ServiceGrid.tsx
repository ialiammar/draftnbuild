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
        description="From YouTube documentaries to podcast cuts, we structure your raw footage into seamless narratives that drive watch time and build subscriber loyalty."
        variant="long-form"
        tiltOnHover={-1.5}
      />
      <ServiceCard
        index="02"
        href="/portfolio/short-form"
        title="Short-Form Editing"
        description="Short Form Content engineered to stop the scroll. We optimize every frame of the first 3 seconds so your message actually gets heard."
        variant="short-form"
        tiltOnHover={1.5}
      />
      <ServiceCard
        index="03"
        href="/portfolio/motion-graphics"
        title="Motion Graphics"
        description="Instead of adding alot of Motion we Explain your Business that actually generate Leads"
        variant="motion-graphics"
        tiltOnHover={-1.5}
      />
    </motion.div>
  );
}