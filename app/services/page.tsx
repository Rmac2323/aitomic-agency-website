import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BarChart, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI for Sales and CRM',
      description: 'Boost your sales performance with AI-powered insights and automation.',
      icon: BarChart,
    },
    {
      title: 'AI for SOPs and Internal Processes',
      description: 'Streamline your operations with intelligent workflow automation.',
      icon: FileText,
    },
    {
      title: 'Chatbots for Customer Service',
      description: 'Provide 24/7 support with AI-driven conversational interfaces.',
      icon: Bot,
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI implementations to address your unique business challenges.',
      icon: Zap,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business with AI?</h2>
        <p className="text-lg mb-8">
          Let's discuss how our AI solutions can drive innovation and efficiency in your organization.
        </p>
        <Button asChild>
          <Link href="/book-call">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServicesPage;