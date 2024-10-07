import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Bot, BarChart, FileText, Zap } from 'lucide-react';

const services = [
  {
    title: 'AI for Sales and CRM',
    description: 'Enhance your sales process and customer relationships with AI-powered insights and automation.',
    icon: BarChart,
  },
  {
    title: 'AI for SOPs and Internal Processes',
    description: 'Streamline your internal operations with intelligent automation of standard operating procedures.',
    icon: FileText,
  },
  {
    title: 'Chatbots for Customer Service',
    description: 'Provide 24/7 customer support with advanced AI chatbots that understand and resolve queries efficiently.',
    icon: Bot,
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed to address your unique business challenges and opportunities.',
    icon: Zap,
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-2 border-black dark:border-white p-1 rounded-lg">
            <Card className="flex flex-col h-full">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;