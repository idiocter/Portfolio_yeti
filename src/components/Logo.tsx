// =============================================================================
// CUSTOM LOGO COMPONENT - Tourism + Development Theme
// =============================================================================

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const dimensions = {
    sm: { container: 32, icon: 20 },
    md: { container: 44, icon: 28 },
    lg: { container: 56, icon: 36 },
  };

  const { container } = dimensions[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon Container */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
        style={{ width: container, height: container }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-primary to-secondary shadow-lg" />
        
        {/* Inner glow */}
        <div className="absolute inset-0.5 rounded-[10px] bg-gradient-to-br from-white/20 to-transparent" />
        
        {/* Logo SVG */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="absolute inset-0 w-full h-full p-2"
        >
          {/* Mountain peaks */}
          <path
            d="M24 8L32 22H16L24 8Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M16 22L20 30H12L16 22Z"
            fill="white"
            fillOpacity="0.6"
          />
          <path
            d="M32 22L36 30H28L32 22Z"
            fill="white"
            fillOpacity="0.6"
          />
          
          {/* Code brackets - representing development */}
          <path
            d="M14 34L10 38L14 42"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M34 34L38 38L34 42"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Slash in middle */}
          <path
            d="M26 32L22 44"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        
        {/* Subtle pulse animation ring */}
        <span className="absolute inset-0 rounded-xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-20" style={{ animationDuration: '2s' }} />
      </motion.div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-bold text-foreground leading-none tracking-tight"
            style={{ fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : '22px' }}
          >
            YETI
          </span>
          <span 
            className="text-muted-foreground font-medium leading-none"
            style={{ fontSize: size === 'sm' ? '8px' : size === 'md' ? '10px' : '12px' }}
          >
            DEV CORP
          </span>
        </div>
      )}
    </div>
  );
}

// Alternative compact logo for small spaces
export function LogoCompact({ className = '' }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md ${className}`}
    >
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path d="M16 6L22 16H10L16 6Z" fill="white" fillOpacity="0.9" />
        <path d="M10 22L8 26H12L10 22Z" fill="white" fillOpacity="0.7" />
        <path d="M22 22L24 26H20L22 22Z" fill="white" fillOpacity="0.7" />
        <text x="16" y="24" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    </motion.div>
  );
}
