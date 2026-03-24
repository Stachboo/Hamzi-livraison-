import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: '💬',
    name: 'WhatsApp',
    url: 'https://wa.me/YOUR_PHONE_NUMBER',
    color: 'hover:bg-green-500/10 hover:border-green-500'
  },
  {
    icon: '📸',
    name: 'Instagram',
    url: 'https://instagram.com/YOUR_INSTAGRAM',
    color: 'hover:bg-pink-500/10 hover:border-pink-500'
  },
  {
    icon: '👥',
    name: 'Facebook',
    url: 'https://facebook.com/YOUR_FACEBOOK',
    color: 'hover:bg-blue-500/10 hover:border-blue-500'
  }
];

export const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-syne font-bold text-foreground text-center mb-12"
        >
          Retrouvez-nous sur les réseaux 👋
        </motion.h2>

        <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(link.url, '_blank')}
                className={`bg-card text-foreground border-2 border-border rounded-full px-8 py-6 text-lg font-medium shadow-soft transition-all duration-300 hover:scale-110 ${link.color}`}
              >
                <span className="text-2xl mr-2">{link.icon}</span>
                {link.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;