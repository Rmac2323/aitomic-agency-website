import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">About AItomic Agency</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg mb-4">
          AItomic Agency is at the forefront of the AI revolution, empowering businesses with cutting-edge automation solutions. Our mission is to transform the way companies operate by leveraging the power of artificial intelligence.
        </p>
        <p className="text-lg mb-4">
          Founded by a team of AI experts and industry veterans, we bring together deep technical knowledge and practical business experience to deliver solutions that drive real results.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Customized Solutions: We tailor our AI implementations to your specific business needs.</li>
          <li>Cutting-edge Technology: We stay at the forefront of AI advancements to bring you the latest and most effective solutions.</li>
          <li>Seamless Integration: Our solutions are designed to integrate smoothly with your existing systems and processes.</li>
          <li>Ongoing Support: We provide continuous support and updates to ensure your AI solutions evolve with your business.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;