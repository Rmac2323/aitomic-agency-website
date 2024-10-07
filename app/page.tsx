import Hero from '@/components/hero';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Services />
      <CallToAction />
    </div>
  );
}