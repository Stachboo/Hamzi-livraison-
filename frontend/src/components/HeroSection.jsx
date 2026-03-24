import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const HeroSection = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('commander');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
      
      {/* Animated Scooter */}
      <motion.div
        className="absolute right-8 top-1/4 text-8xl sm:text-9xl md:text-[12rem] opacity-20"
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🛵
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-syne font-bold text-foreground mb-6 leading-tight"
          >
            Livraison à domicile sur Avignon{' '}
            <span className="inline-block animate-float">🛵</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8"
          >
            Le Pontet · Montfavet · Avignon — 30 à 45 min · 7j/7
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6 rounded-full shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Je commande maintenant
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Badge
              variant="secondary"
              className="bg-card text-foreground text-sm sm:text-base px-4 py-2 rounded-full shadow-soft border border-border"
            >
              ⚡ 30-45 min
            </Badge>
            <Badge
              variant="secondary"
              className="bg-card text-foreground text-sm sm:text-base px-4 py-2 rounded-full shadow-soft border border-border"
            >
              💳 Espèces ou virement
            </Badge>
            <Badge
              variant="secondary"
              className="bg-card text-foreground text-sm sm:text-base px-4 py-2 rounded-full shadow-soft border border-border"
            >
              📍 100% local
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;