// =============================================================================
// ABOUT / COMPANY INFO SECTION
// =============================================================================

import { motion } from 'framer-motion';
import { Mountain, Code, Globe, Shield, Zap, Users, Sparkles, Layers } from 'lucide-react';
import { aboutConfig } from '@/config/env';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mountain,
  Code,
  Globe,
  Shield,
  Zap,
  Users,
  Sparkles,
  Layers,
};

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useStaggeredAnimation(
    aboutConfig.features.length,
    100
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-surface overflow-hidden"
    >
      {/* Topographic Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M0,${20 + i * 18} Q50,${10 + i * 18} 100,${20 + i * 18} T200,${20 + i * 18}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Section Label */}
            <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-4">
              {aboutConfig.label}
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {aboutConfig.heading}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mb-10">
              {aboutConfig.description}
            </p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 sm:gap-8"
            >
              {aboutConfig.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutConfig.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Mountain;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
