// =============================================================================
// TEAM SECTION
// =============================================================================

import { motion } from 'framer-motion';
import { teamConfig } from '@/config/env';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

// Generate avatar URL based on name (using UI Avatars API)
const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1E40AF&color=fff&size=256&bold=true`;
};

export function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useStaggeredAnimation(
    teamConfig.members.length,
    100
  );

  return (
    <section
      id="team"
      ref={headerRef}
      className="relative py-24 sm:py-32 bg-background overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-4">
            {teamConfig.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {teamConfig.heading}
          </h2>
          <p className="text-lg text-muted-foreground">{teamConfig.subtitle}</p>
        </motion.div>

        {/* Team Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {teamConfig.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={gridVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img
                      src={getAvatarUrl(member.name)}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {member.role}
                </p>
                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                  {member.specialty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
