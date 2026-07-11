'use client';

import { ReactNode, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';

interface HeroAction {
  text: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
}

interface HeroStat {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface HeroImage {
  src: string;
  alt?: string;
  fit?: 'cover' | 'contain';
}

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  actions?: HeroAction[];
  stats?: HeroStat[];
  images?: (string | HeroImage)[];
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease },
  },
};

const floatConfigs = [
  { y: [-10, 6, -10], rotate: [-6, -2, -6], duration: 7 },
  { y: [-6, 10, -6], scale: [1, 1.02, 1], duration: 8 },
  { y: [8, -8, 8], rotate: [4, 1, 4], duration: 6.5 },
];

const imageEntrances: Variants[] = [
  {
    hidden: { opacity: 0, x: 50, y: -30, rotate: -8, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -6,
      scale: 1,
      transition: { duration: 0.9, delay: 0.4, ease },
    },
  },
  {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, delay: 0.25, ease },
    },
  },
  {
    hidden: { opacity: 0, x: -40, y: 40, rotate: 8, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 4,
      scale: 1,
      transition: { duration: 0.9, delay: 0.55, ease },
    },
  },
];

function FloatingImage({
  src,
  alt,
  sizes,
  priority,
  className,
  variantIndex,
  fit = 'cover',
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  variantIndex: number;
  fit?: 'cover' | 'contain';
}) {
  const config = floatConfigs[variantIndex] ?? floatConfigs[0];
  const entrance = imageEntrances[variantIndex] ?? imageEntrances[0];

  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.04, zIndex: 30 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={cn('group relative overflow-hidden', className)}
    >
      <motion.div
        animate={{
          y: config.y,
          rotate: config.rotate,
          scale: config.scale ?? 1,
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative h-full w-full"
      >
        <motion.div
          className={cn(
            'relative h-full w-full',
            fit === 'contain' && 'bg-white'
          )}
          whileHover={{ scale: fit === 'contain' ? 1.03 : 1.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={cn(fit === 'contain' ? 'object-contain p-2' : 'object-cover')}
            sizes={sizes}
            priority={priority}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/20" />
    </motion.div>
  );
}

const HeroSection = ({
  title,
  subtitle,
  actions = [],
  stats = [],
  images = [],
  className,
}: HeroSectionProps) => {
  const normalizedImages: HeroImage[] = images.map((image) =>
    typeof image === 'string' ? { src: image, fit: 'cover' } : image
  );

  const collageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = collageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-primary"
                />
                Disponible para proyectos
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {subtitle}
            </motion.p>

            {actions.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                {actions.map((action, index) => (
                  <motion.div
                    key={action.text}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <Button
                      variant={action.variant ?? 'default'}
                      size="lg"
                      onClick={action.onClick}
                      className={
                        action.variant === 'default'
                          ? 'shadow-lg shadow-primary/25'
                          : undefined
                      }
                    >
                      {action.text}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {stats.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="mt-10 flex w-full max-w-lg flex-wrap items-center gap-6 border-t border-border pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={`${stat.value}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.12, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                    className="flex min-w-[100px] flex-col gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 8, 0, -8, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <AnimatedCounter
                        value={stat.value}
                        className="text-2xl font-bold text-foreground"
                      />
                    </div>
                    {stat.label && (
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {normalizedImages.length > 0 && (
            <motion.div
              ref={collageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: parallaxX, y: parallaxY }}
              className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[480px] lg:mx-0 lg:max-w-none"
            >
              {normalizedImages[0] && (
                <FloatingImage
                  src={normalizedImages[0].src}
                  alt={normalizedImages[0].alt ?? 'Proyecto de marketing'}
                  fit={normalizedImages[0].fit}
                  sizes="(max-width: 768px) 150px, 176px"
                  variantIndex={0}
                  className="absolute right-0 top-0 z-10 h-44 w-36 rounded-2xl border-4 border-background shadow-xl sm:h-52 sm:w-44"
                />
              )}

              {normalizedImages[1] && (
                <FloatingImage
                  src={normalizedImages[1].src}
                  alt={normalizedImages[1].alt ?? 'Pieza destacada'}
                  fit={normalizedImages[1].fit}
                  sizes="(max-width: 768px) 224px, 256px"
                  priority
                  variantIndex={1}
                  className="absolute left-1/2 top-1/2 z-20 h-72 w-52 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-4 border-background shadow-2xl sm:h-80 sm:w-60"
                />
              )}

              {normalizedImages[2] && (
                <FloatingImage
                  src={normalizedImages[2].src}
                  alt={normalizedImages[2].alt ?? 'Campaña visual'}
                  fit={normalizedImages[2].fit}
                  sizes="(max-width: 768px) 192px, 224px"
                  variantIndex={2}
                  className="absolute bottom-0 left-0 z-10 h-40 w-48 rounded-2xl border-4 border-background shadow-xl sm:h-48 sm:w-56"
                />
              )}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-violet-500/25"
              />

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                  className="absolute h-2 w-2 rounded-full bg-primary/40"
                  style={{
                    top: `${20 + i * 25}%`,
                    left: `${10 + i * 30}%`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
