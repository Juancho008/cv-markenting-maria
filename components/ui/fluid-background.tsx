'use client';

import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'left-[-10%] top-[-15%] h-[38rem] w-[38rem] bg-primary/25',
    animate: {
      x: [0, 80, 40, 0],
      y: [0, 60, 120, 0],
      scale: [1, 1.08, 0.95, 1],
    },
    duration: 22,
  },
  {
    className: 'right-[-5%] top-[10%] h-[32rem] w-[32rem] bg-violet-500/20',
    animate: {
      x: [0, -70, -30, 0],
      y: [0, 90, 30, 0],
      scale: [1, 0.92, 1.06, 1],
    },
    duration: 26,
    delay: 2,
  },
  {
    className: 'bottom-[-10%] left-[20%] h-[36rem] w-[36rem] bg-accent/25',
    animate: {
      x: [0, 60, -40, 0],
      y: [0, -50, -100, 0],
      scale: [1, 1.1, 0.98, 1],
    },
    duration: 24,
    delay: 4,
  },
  {
    className: 'bottom-[20%] right-[15%] h-[28rem] w-[28rem] bg-indigo-400/15',
    animate: {
      x: [0, -50, 30, 0],
      y: [0, -70, 20, 0],
      scale: [1, 1.05, 0.9, 1],
    },
    duration: 20,
    delay: 1,
  },
];

export function FluidBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="fluid-gradient absolute inset-0 opacity-70"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`fluid-blob absolute rounded-full blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay ?? 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="fluid-grid absolute inset-0 opacity-[0.35]" />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
    </div>
  );
}
