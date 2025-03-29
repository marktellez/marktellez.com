import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Agentic Tools Expert | AI Systems Developer for Hire - Mark Tellez",
  description: "Hire an Agentic Tools expert with extensive experience in CrewAI, LangChain, and Model Context Protocol. Building autonomous AI systems that can reason, plan, and execute complex tasks with minimal human intervention.",
  keywords: ["Agentic Tools expert", "autonomous AI systems", "CrewAI", "LangChain", "Model Context Protocol", "multi-agent systems", "AI automation", "business process automation"],
  url: "https://marktellez.com/i-know/agentic-tools",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AgenticToolsSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Agentic Tools: Building Autonomous AI Systems</h1>

        <p className="text-gray-300">My expertise in Agentic Tools encompasses both popular frameworks and custom implementations. I've worked extensively with CrewAI, LangChain, and the Model Context Protocol (MCP) to build autonomous AI systems that can reason, plan, and execute complex tasks with minimal human intervention.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Agentic Tools expertise spans multiple frameworks and approaches—from orchestrating multi-agent systems with CrewAI to building custom agents using LangChain and implementing the Model Context Protocol for enhanced reasoning capabilities. I create AI systems that can autonomously solve complex problems through planning, tool use, and adaptive decision-making.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What distinguishes my work with Agentic Tools is the ability to design systems that truly augment human capabilities. I've developed autonomous agents that can research complex topics, generate comprehensive reports, automate business workflows, and even create content with minimal human oversight.</p>

        <p className="mt-4 text-gray-300">My agents have been applied to diverse domains—from automating research and content creation to optimizing business processes and enhancing customer support systems. In each case, I focus on creating reliable, explainable agents that deliver consistent performance in production environments.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My Agentic Tools Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">CrewAI</h4>
            <p className="text-sm text-gray-300">Building multi-agent systems that collaborate effectively to solve complex tasks through role-based coordination and specialized capabilities.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">LangChain</h4>
            <p className="text-sm text-gray-300">Developing custom agents with advanced reasoning capabilities, tool use, and memory systems that can handle complex, multi-step tasks.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Model Context Protocol</h4>
            <p className="text-sm text-gray-300">Implementing MCP for enhanced reasoning and context management, enabling agents to maintain coherent understanding across complex interactions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Autonomous Research</h4>
            <p className="text-sm text-gray-300">Creating agents that can autonomously research topics, synthesize information from multiple sources, and generate comprehensive reports.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Business Process Automation</h4>
            <p className="text-sm text-gray-300">Developing agentic systems that automate complex business workflows, reducing manual effort and increasing operational efficiency.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Agentic AI Solution</h3>
        <p className="text-gray-300">Looking for an expert who can build autonomous AI systems, multi-agent collaborations, or intelligent automation solutions? I'm ready to help transform your requirements into efficient, production-ready implementations.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR AGENTIC AI PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
