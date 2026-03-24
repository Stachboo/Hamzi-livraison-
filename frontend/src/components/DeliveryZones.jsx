import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const zones = [
  { name: 'Avignon centre', price: '2,50 €' },
  { name: 'Le Pontet', price: '2,90 €' },
  { name: 'Montfavet', price: '2,90 €' }
];

export const DeliveryZones = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-syne font-bold text-foreground text-center mb-12"
        >
          Frais de livraison clairs et fixes 📍
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-card p-8 text-center shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105 border-border">
                <h3 className="text-2xl font-syne font-bold text-foreground mb-3">{zone.name}</h3>
                <div className="text-4xl font-bold text-primary">{zone.price}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Badge
            variant="secondary"
            className="bg-accent text-accent-foreground text-base px-5 py-2 rounded-full font-medium"
          >
            Commande minimum : 10 €
          </Badge>
          <Badge
            variant="secondary"
            className="bg-accent text-accent-foreground text-base px-5 py-2 rounded-full font-medium"
          >
            Paiement : espèces ou Lydia/Sumeria
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryZones;