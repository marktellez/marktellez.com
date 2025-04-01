import Link from 'next/link';
import { generateSeoMetadata } from '@/lib/seo-utils';

export const metadata = generateSeoMetadata({
  title: "Large Language Models Expert | LLM Developer for Hire - Mark Tellez",
  description: "Hire a Large Language Models expert with extensive experience in fine-tuning, prompt engineering, and RAG systems. Delivering production-ready LLM solutions for businesses of all sizes.",
  keywords: ["Large Language Models", "LLM expert", "GPT", "prompt engineering", "RAG", "fine-tuning", "AI applications", "natural language processing"],
  url: "https://marktellez.com/i-know/large-language-models",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function LargeLanguageModelsSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Large Language Models: From Prompts to Production</h1>

        <p className="text-gray-300">My expertise with Large Language Models spans from early GPT-3 to the latest frontier models. I've implemented sophisticated LLM solutions across diverse domains—from customer service automation to content generation and knowledge extraction systems. My approach combines technical depth with strategic thinking, ensuring LLM applications that deliver tangible business value.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="text-white">LLM Expertise That Delivers Results</h2>
        <p className="text-gray-300">I bring comprehensive knowledge of the LLM ecosystem, from cloud-based API solutions to locally-hosted open-source models. My experience includes:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Prompt Engineering</h4>
            <p className="text-sm text-gray-300">Crafting sophisticated prompts that maximize model performance for specific tasks, including chain-of-thought reasoning and structured outputs.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">RAG Systems</h4>
            <p className="text-sm text-gray-300">Building Retrieval Augmented Generation systems that combine LLMs with <Link href="/i-know/vector-databases">vector databases</Link> to deliver accurate, context-aware responses from private knowledge bases.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Fine-Tuning</h4>
            <p className="text-sm text-gray-300">Customizing models for specific domains and tasks through parameter-efficient fine-tuning techniques like LoRA and QLoRA.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/agentic-tools">Agentic Systems</Link></h4>
            <p className="text-sm text-gray-300">Developing autonomous AI agents that leverage LLMs for reasoning, planning, and executing complex tasks with minimal human intervention.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Model Quantization</h4>
            <p className="text-sm text-gray-300">Optimizing models for deployment on resource-constrained environments while maintaining performance quality.</p>
          </div>
        </div>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                End-to-end LLM solutions from concept to production deployment
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Integration with existing systems and workflows
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Cost optimization strategies for LLM implementations
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Applications</h2>
        <p className="text-gray-300">My LLM expertise has delivered tangible results across multiple domains:</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I implemented sophisticated RAG systems that enabled precise information retrieval from massive document collections, reducing research time by over 70% while maintaining high accuracy.</p>

        <p className="mt-4 text-gray-300">For several clients, I've built custom chatbots and virtual assistants that leverage fine-tuned models to provide domain-specific expertise, resulting in significant reductions in support costs and improved customer satisfaction.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next LLM Solution</h3>
        <p className="text-gray-300">Looking for an LLM expert who can deliver production-ready AI solutions? I'm ready to help transform your requirements into efficient, actionable systems that provide real business value.</p>
      </div>
    </div>
  );
}