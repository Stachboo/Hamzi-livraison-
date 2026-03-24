import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="text-3xl sm:text-4xl font-syne font-bold text-primary mb-3">
            ZestiV
          </div>
          
          <p className="text-lg text-background/90 font-medium">
            Vos restaurants préférés, livrés avec le sourire 🛵
          </p>
          
          <p className="text-background/70">
            Avignon · Le Pontet · Montfavet · Vaucluse 84
          </p>
          
          <div className="pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm">
              Fait avec ❤️ en Vaucluse — 2025
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;