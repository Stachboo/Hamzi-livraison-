import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const steps = [
  {
    emoji: '📋',
    number: '1',
    text: 'Tu choisis ton resto et tes plats'
  },
  {
    emoji: '📬',
    number: '2',
    text: 'Tu remplis le formulaire ci-dessous'
  },
  {
    emoji: '🚪',
    number: '3',
    text: 'Je livre directement chez toi'
  }
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative emoji */}
      <div className="absolute left-4 top-10 text-6xl opacity-10">🍕</div>
      <div className="absolute right-4 bottom-10 text-6xl opacity-10">🥗</div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-syne font-bold text-secondary-foreground text-center mb-16"
        >
          C'est simple comme bonjour 😄
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-secondary-foreground/10 border-secondary-foreground/20 backdrop-blur-sm p-8 text-center hover:bg-secondary-foreground/15 transition-all duration-300 hover:scale-105 shadow-soft">
                <div className="text-7xl mb-4">{step.emoji}</div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold font-syne mx-auto mb-4">
                  {step.number}
                </div>
                <p className="text-lg text-secondary-foreground font-medium">{step.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;