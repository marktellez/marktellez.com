import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function PythonSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Python Development: Versatile Expertise for ML and Cloud</h1>

        <p className="text-gray-300">My Python journey spans over a decade, evolving from web applications to machine learning and cloud infrastructure. I leverage Python's versatility to build intelligent systems, process data at scale, and create efficient serverless solutions. My code is robust, well-tested, and optimized for both performance and maintainability.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Python expertise extends across multiple domains—from machine learning with <Link href="/i-know/pytorch">PyTorch</Link> and <Link href="/i-know/supervised-learning">supervised learning</Link> to cloud infrastructure with AWS Lambda functions. I've built complete web applications using Django and Flask, data processing pipelines, and ML-powered systems that deliver tangible business value. My approach combines technical depth with strategic thinking, ensuring solutions that address core business needs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What distinguishes my Python work is the ability to translate complex requirements into efficient, scalable solutions. Whether it's developing game agents using <Link href="/i-know/reinforcement-learning">reinforcement learning</Link>, building medical diagnostic models, or creating voice recognition systems with automatic speech recognition, I focus on delivering measurable business outcomes.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link>, I built a Text-To-Speech model so realistic that even Snoop Dogg's wife couldn't distinguish between real recordings and my model's voice generations. This same technology now powers <Link href="https://zooly.ai/apps/ai-or-not" target="_blank" rel="noopener noreferrer">Zooly.ai's "AI or Not" application</Link>, showcasing the production-grade machine learning solutions I deliver.</p>

        <p className="mt-4 text-gray-300">I prioritize code quality, performance optimization, and maintainability. My Python solutions are designed with an eye toward future scalability and adaptability, ensuring they continue to deliver value as business needs evolve.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My Python Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized Python skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Machine Learning</h4>
            <p className="text-sm text-gray-300">Building intelligent systems with <Link href="/i-know/pytorch">PyTorch</Link> and scikit-learn for <Link href="/i-know/supervised-learning">supervised learning</Link>, medical diagnostics, and game agents that outperform human players.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">AWS Lambda & Serverless</h4>
            <p className="text-sm text-gray-300">Developing efficient, scalable cloud functions for event processing, API backends, and automated workflows that minimize infrastructure costs.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Voice & Speech Models</h4>
            <p className="text-sm text-gray-300">Creating automatic speech recognition systems and ultra-realistic voice models at <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link> that are indistinguishable from human speech.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Reinforcement Learning</h4>
            <p className="text-sm text-gray-300">Developing <Link href="/i-know/reinforcement-learning">reinforcement learning</Link> agents for complex decision-making tasks, game playing, and optimization problems that adapt and improve over time.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Web Applications</h4>
            <p className="text-sm text-gray-300">Past experience building complete web applications with Django and Flask, creating robust backends with clean APIs and efficient database interactions.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Python Solution</h3>
        <p className="text-gray-300">Looking for a Python developer who can deliver machine learning systems, game agents, voice models, medical diagnostic tools, or cloud infrastructure? I'm ready to help transform your requirements into efficient, production-ready code.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your Python Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}
