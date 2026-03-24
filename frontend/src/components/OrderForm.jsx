import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export const OrderForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    restaurant: '',
    order: '',
    paymentMethod: 'cash'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.address || !formData.order) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    // Mock submission - in real app, this would send to backend
    setIsSubmitted(true);
    toast.success('✅ Commande reçue ! Je vous recontacte sous 5 minutes 😊');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        address: '',
        restaurant: '',
        order: '',
        paymentMethod: 'cash'
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="commander" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-syne font-bold text-foreground mb-4">
            Je passe ma commande 🎉
          </h2>
          <p className="text-lg text-muted-foreground">
            Je vous recontacte sous 5 minutes pour confirmer !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-card shadow-card p-6 sm:p-10 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground font-medium">
                  Prénom et Nom <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="bg-background border-border focus:ring-primary focus:border-primary"
                  placeholder="Jean Dupont"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground font-medium">
                  Adresse complète <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="bg-background border-border focus:ring-primary focus:border-primary resize-none"
                  placeholder="Numéro, rue, étage, code interphone..."
                />
              </div>

              {/* Restaurant Choice */}
              <div className="space-y-2">
                <Label htmlFor="restaurant" className="text-foreground font-medium">
                  Restaurant choisi
                </Label>
                <Select value={formData.restaurant} onValueChange={(value) => handleChange('restaurant', value)}>
                  <SelectTrigger className="bg-background border-border focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="-- Sélectionnez --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soon1">Bientôt disponible</SelectItem>
                    <SelectItem value="soon2">Bientôt disponible</SelectItem>
                    <SelectItem value="soon3">Bientôt disponible</SelectItem>
                    <SelectItem value="soon4">Bientôt disponible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Order Details */}
              <div className="space-y-2">
                <Label htmlFor="order" className="text-foreground font-medium">
                  Votre commande <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="order"
                  required
                  rows={4}
                  value={formData.order}
                  onChange={(e) => handleChange('order', e.target.value)}
                  className="bg-background border-border focus:ring-primary focus:border-primary resize-none"
                  placeholder="Ex: 1 pizza Margherita taille L, 1 coca 33cl, 1 tiramisu..."
                />
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Mode de paiement</Label>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleChange('paymentMethod', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <RadioGroupItem value="cash" id="cash" className="border-primary text-primary" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer font-normal">
                      💵 Espèces à la livraison
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <RadioGroupItem value="transfer" id="transfer" className="border-primary text-primary" />
                    <Label htmlFor="transfer" className="flex-1 cursor-pointer font-normal">
                      📱 Virement Lydia / Sumeria
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitted}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 rounded-full shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {isSubmitted ? '✅ Commande envoyée !' : 'Envoyer ma commande 🚀'}
              </Button>

              {/* WhatsApp Alternative */}
              <p className="text-center text-sm text-muted-foreground pt-4">
                Vous préférez WhatsApp ?{' '}
                <a
                  href="https://wa.me/YOUR_PHONE_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Écrivez directement au 📱 [PHONE_NUMBER]
                </a>
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderForm;