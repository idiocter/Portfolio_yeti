// =============================================================================
// HERO SECTION
// =============================================================================

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, MapPin, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroConfig } from '@/config/env';

// Import the Himalayan image
import heroImage from '@/assets/hero-mountain.jpg';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Himalayan Mountains"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 dark:from-background/95 dark:via-background/85 dark:to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Tourism Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            >
              <MapPin className="w-4 h-4" />
              <span>Kathmandu, Nepal</span>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wider mb-6"
            >
              <Compass className="w-4 h-4" />
              {heroConfig.tagline}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {heroConfig.heading}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {heroConfig.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#bhatbhatify')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {heroConfig.ctaPrimary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#team')}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 bg-background/80 backdrop-blur-sm"
              >
                {heroConfig.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Code Block */}
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="bg-muted/80 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground font-mono">bhatbhatify-tourism.tsx</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <pre className="text-muted-foreground">
                    <code>
                      <span className="text-purple-500">const</span>{' '}
                      <span className="text-blue-500">tourismPlatform</span> = {'{'}
                      {'\n'}
                      {'  '}<span className="text-sky-500">name</span>:{' '}
                      <span className="text-green-500">&quot;BhatBhatify&quot;</span>,
                      {'\n'}
                      {'  '}<span className="text-sky-500">focus</span>:{' '}
                      <span className="text-green-500">
                        &quot;Nepal Tourism&quot;
                      </span>,
                      {'\n'}
                      {'  '}<span className="text-sky-500">features</span>: {'['}
                      {'\n'}
                      {'    '}<span className="text-green-500">&quot;Tour Packages&quot;</span>,
                      {'\n'}
                      {'    '}<span className="text-green-500">&quot;Local Guides&quot;</span>,
                      {'\n'}
                      {'    '}<span className="text-green-500">&quot;Bookings&quot;</span>
                      {'\n'}
                      {'  '},{']}'},{'\n'}
                      {'  '}<span className="text-sky-500">launch</span>:{' '}
                      <span className="text-yellow-500">async</span> () =&gt; {'{'}
                      {'\n'}
                      {'    '}<span className="text-purple-500">return</span>{' '}
                      <span className="text-green-500">&quot;Explore Nepal!&quot;</span>;
                      {'\n'}
                      {'  '},{'}'}
                      {'\n'}
                      {'}'};
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating Badge - Tourism */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold">Nepal Tours</span>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm border border-border px-4 py-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">5+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
