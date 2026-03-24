import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const placeholderRestaurants = [
  { emoji: '🍕', name: 'Bientôt disponible' },
  { emoji: '🥗', name: 'Bientôt disponible' },
  { emoji: '🍔', name: 'Bientôt disponible' },
  { emoji: '🥘', name: 'Bientôt disponible' }
];

export const RestaurantPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handlePartnerClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER?text=Bonjour,%20je%20souhaite%20devenir%20partenaire%20de%20ZestiV', '_blank');
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-syne font-bold text-foreground mb-4">
            Nos restaurants partenaires 🍽️
          </h2>
          <p className="text-lg text-muted-foreground">
            D'autres arrivent bientôt — tu peux être le prochain !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {placeholderRestaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-2 border-dashed border-primary/40 p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-warm min-h-[200px] flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">{restaurant.emoji}</div>
                <p className="text-muted-foreground font-medium">{restaurant.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-md mx-auto"
        >
          <Card className="bg-secondary text-secondary-foreground p-8 text-center shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105">
            <p className="text-xl font-semibold mb-4">Votre restaurant ici ? 🤝</p>
            <Button
              onClick={handlePartnerClick}
              variant="outline"
              className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 border-none font-medium"
            >
              Devenir partenaire
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantPartners;