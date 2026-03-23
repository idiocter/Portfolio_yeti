// =============================================================================
// MAIN APP COMPONENT - YETI DEVELOPMENT CORPORATION
// =============================================================================

import { useEffect } from 'react';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Team } from '@/sections/Team';
import { Project } from '@/sections/Project';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Chatbot } from '@/sections/Chatbot';
import { useTheme } from '@/hooks/useTheme';
import { metaConfig } from '@/config/env';
import './App.css';

function App() {
  const { toggleTheme, isDark } = useTheme();

  // Update document title and meta tags
  useEffect(() => {
    document.title = metaConfig.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaConfig.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaConfig.description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metaConfig.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = metaConfig.keywords;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <Navigation toggleTheme={toggleTheme} isDark={isDark} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Team />
        <Project />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Chatbot Widget */}
      <Chatbot />
    </div>
  );
}

export default App;
