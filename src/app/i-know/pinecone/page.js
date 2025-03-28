import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function PineconeSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Pinecone: Vector Database Expertise for AI Applications</h1>

        <p className="text-gray-300">With several years of hands-on experience with Pinecone, I've developed deep expertise in leveraging this powerful vector database for semantic search, recommendation systems, and AI applications. My work spans from implementing efficient embedding storage solutions to building production-grade RAG (Retrieval Augmented Generation) systems that deliver tangible business value.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Pinecone expertise covers the full spectrum of vector database operations—from index creation and optimization to query tuning and scaling strategies. I've implemented Pinecone solutions across various AI applications, always focusing on performance, relevance, and cost efficiency.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">AI Application Integration</h2>
        <p className="text-gray-300">What sets my Pinecone experience apart is its practical application in solving real business problems. I've successfully integrated Pinecone with:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Conversational AI</h4>
            <p className="text-sm text-gray-300">Building intelligent chatbots with semantic understanding and contextual memory using Pinecone for efficient vector storage and retrieval.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">RAG Systems</h4>
            <p className="text-sm text-gray-300">Implementing Retrieval Augmented Generation systems that combine the power of LLMs with precise information retrieval from Pinecone indexes.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Research Applications</h4>
            <p className="text-sm text-gray-300">Leveraging Pinecone for semantic search across research documents, enabling knowledge discovery and insights extraction.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My Pinecone Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized Pinecone skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Embedding Strategies</h4>
            <p className="text-sm text-gray-300">Selecting and implementing optimal embedding models and techniques for different use cases and content types.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Tuning Pinecone indexes, query parameters, and metadata filtering for maximum throughput and relevance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Scaling Solutions</h4>
            <p className="text-sm text-gray-300">Designing and implementing Pinecone architectures that scale efficiently with growing data volumes and query loads.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Integration Patterns</h4>
            <p className="text-sm text-gray-300">Connecting Pinecone with <Link href="/i-know/python">Python</Link> applications, cloud services, and AI platforms for seamless vector operations.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Cost Management</h4>
            <p className="text-sm text-gray-300">Implementing strategies to optimize Pinecone usage costs while maintaining performance and functionality.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Vector Database Solution</h3>
        <p className="text-gray-300">Looking for a Pinecone expert who can design efficient vector search systems, implement RAG applications, or optimize your existing vector database? I'm ready to help transform your requirements into intelligent, scalable AI solutions powered by Pinecone.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR PINECONE PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
