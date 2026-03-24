import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOrder = () => {
    const element = document.getElementById('commander');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur bg-background/80 shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl sm:text-3xl font-syne font-bold text-primary cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          ZestiV
        </motion.div>

        <Button
          onClick={scrollToOrder}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full shadow-warm transition-all duration-300 hover:shadow-glow hover:scale-105"
        >
          Commander
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;