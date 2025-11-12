import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ConsultationForm from '@/components/sections/ConsultationForm';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <GallerySection />
      <TestimonialsSection />
      <ConsultationForm />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
