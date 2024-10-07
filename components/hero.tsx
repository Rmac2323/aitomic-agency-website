import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Revolutionize Your Business with AI
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Aitomic Agency delivers cutting-edge AI solutions to streamline your operations, boost efficiency, and drive growth.
      </p>
      <div className="space-x-4">
        <Button size="lg" asChild>
          <Link href="/book-call">Book a Free Consultation</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/services">Explore Our Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;