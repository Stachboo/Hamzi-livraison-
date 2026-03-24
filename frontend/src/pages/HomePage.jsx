import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import RestaurantPartners from '@/components/RestaurantPartners';
import DeliveryZones from '@/components/DeliveryZones';
import OrderForm from '@/components/OrderForm';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <RestaurantPartners />
      <DeliveryZones />
      <OrderForm />
      <SocialLinks />
      <Footer />
    </div>
  );
}