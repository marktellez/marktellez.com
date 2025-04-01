import Link from 'next/link';
import CTAButton from '@/ui/cta-button';
import { generateSeoMetadata } from '@/lib/seo-utils';

export const metadata = generateSeoMetadata({
  title: "Agentic Systems Expert | Autonomous AI Development - Mark Tellez",
  description: "Hire an Agentic Systems expert who builds autonomous AI agents using CrewAI and custom implementations that can reason, plan, and execute complex tasks with minimal human intervention.",
  keywords: ["Agentic Systems", "CrewAI", "Autonomous Agents", "AI Agents", "LangChain", "Multi-agent Systems", "Model Context Protocol"],
  url: "https://marktellez.com/i-know/agentic-systems",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AgenticSystemsSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Agentic Systems: Building Autonomous AI Solutions</h1>

        <p className="text-gray-300">My expertise in Agentic Systems encompasses both popular frameworks and custom implementations. I've worked extensively with CrewAI, LangChain, and the Model Context Protocol (MCP) to build autonomous AI systems that can reason, plan, and execute complex tasks with minimal human intervention.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Agentic Systems expertise spans multiple frameworks and approaches—from orchestrating multi-agent systems with CrewAI to building custom agents using LangChain and implementing the Model Context Protocol for enhanced reasoning capabilities. I create AI systems that can autonomously solve complex problems through planning, tool use, and adaptive decision-making.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Applications</h2>
        <p className="text-gray-300">My agentic systems expertise has delivered tangible results across multiple domains:</p>

        <p className="mt-4 text-gray-300">I've developed autonomous research agents that can gather, analyze, and synthesize information from diverse sources, producing comprehensive reports with minimal human guidance. These systems dramatically accelerate research workflows while maintaining high quality standards.</p>

        <p className="mt-4 text-gray-300">For business process automation, I've created agentic systems that can handle complex workflows spanning multiple tools and data sources. These agents can make decisions based on business rules, adapt to changing conditions, and execute multi-step processes with remarkable reliability.</p>

        <p className="mt-4 text-gray-300">I prioritize creating systems that combine powerful reasoning capabilities with practical tool use. My agentic solutions are designed to be both autonomous and controllable, ensuring they deliver value while operating within appropriate constraints.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Agentic Systems Expertise</h2>
        <p className="text-gray-300">I've developed specialized skills across several high-value agentic approaches:</p>

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
            <p className="text-sm text-gray-300">Implementing structured reasoning frameworks that enhance LLM capabilities through systematic context management and improved decision-making processes.</p>
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
