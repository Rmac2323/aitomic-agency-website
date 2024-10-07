import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book a free consultation call to discover how AItomic Agency can revolutionize your operations with cutting-edge AI solutions.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/book-call">Schedule Your Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;