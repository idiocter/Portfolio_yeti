// =============================================================================
// BHATBHATIFY PROJECT SHOWCASE SECTION
// =============================================================================

import { motion } from 'framer-motion';
import { Check, ExternalLink, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectConfig } from '@/config/env';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Project() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="bhatbhatify"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Project Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 text-accent border-accent/30 bg-accent/5 uppercase tracking-wider text-xs font-bold"
              >
                {projectConfig.label}
              </Badge>
            </motion.div>

            {/* Project Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
                {projectConfig.name}
              </span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6"
            >
              {projectConfig.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed max-w-lg mb-8"
            >
              {projectConfig.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-sm font-medium text-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {projectConfig.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-card border border-border rounded-md text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3 mb-8"
            >
              {projectConfig.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => window.open(projectConfig.ctaLink, '_blank')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                {projectConfig.cta}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Main Device Mockup */}
            <div className="relative bg-card rounded-2xl border-8 border-card shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                    bhatbhatify.com
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 p-6">
                {/* Mock App UI */}
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                        <span className="text-white text-xs font-bold">B</span>
                      </div>
                      <span className="font-semibold text-foreground">BhatBhatify</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-muted" />
                      <div className="w-6 h-6 rounded-full bg-muted" />
                    </div>
                  </div>

                  {/* Hero Banner */}
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 mb-4 text-white">
                    <p className="text-xs opacity-80 mb-1">Discover Nepal</p>
                    <p className="text-sm font-bold">Amazing Tours & Experiences</p>
                  </div>

                  {/* Tour Cards */}
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-card rounded-lg p-3 border border-border"
                      >
                        <div className="aspect-video bg-muted rounded-md mb-2" />
                        <div className="h-2 w-3/4 bg-muted rounded mb-1" />
                        <div className="h-2 w-1/2 bg-muted/50 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            {/* Booking Confirmed Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Booking Confirmed</p>
                  <p className="text-[10px] text-muted-foreground">Annapurna Trek</p>
                </div>
              </div>
            </motion.div>

            {/* Rating Card */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-foreground">5.0</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">
                128 reviews
              </p>
            </motion.div>

            {/* Calendar Card */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute top-1/2 -right-8 bg-card border border-border rounded-xl p-2 shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
