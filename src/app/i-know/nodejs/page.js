import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function NodejsSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="w-full">
        <h1 className="text-white">Node.js: 10+ Years of Backend Expertise</h1>

        <p className="text-gray-300">I've been working with Node.js since its early days, leveraging JavaScript on the server side to build scalable, high-performance applications. My experience spans from simple API servers to complex microservice architectures, real-time applications, and serverless functions that power modern web and mobile experiences.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Node.js expertise encompasses the entire ecosystem, including Express, Koa, Fastify, and other frameworks that enable rapid development of robust backend services. I've built systems that handle high traffic loads, process data in real-time, and integrate seamlessly with frontend applications built with <Link href="/i-know/react-js">React</Link> and other modern frameworks.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">API Development</h4>
            <p className="text-sm text-gray-300">Building RESTful and GraphQL APIs that power web and mobile applications with clean, well-documented endpoints.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Real-time Applications</h4>
            <p className="text-sm text-gray-300">Developing WebSocket-based systems for chat, notifications, and live updates using Socket.io and native WebSockets.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Microservices</h4>
            <p className="text-sm text-gray-300">Designing and implementing scalable microservice architectures with effective inter-service communication patterns.</p>
          </div>
        </div>

        <h2 className="mt-8 text-white">Node.js for Modern Applications</h2>
        <p className="text-gray-300">I've leveraged Node.js across diverse projects, from e-commerce platforms to content management systems and real-time collaboration tools. The event-driven, non-blocking I/O model of Node.js makes it particularly well-suited for applications that require high concurrency and responsiveness.</p>

        <h2 className="mt-8 text-white">Advanced Node.js Capabilities</h2>
        <p className="text-gray-300">My experience extends to advanced Node.js features and patterns, including streams for efficient data processing, worker threads for CPU-intensive tasks, and native add-ons when performance demands require dropping down to C++. I'm also well-versed in the latest ECMAScript features and how to leverage them effectively in Node.js environments.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Identifying and resolving bottlenecks through profiling, caching strategies, and efficient algorithm design to ensure optimal application performance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Serverless Architecture</h4>
            <p className="text-sm text-gray-300">Building and deploying serverless functions with AWS Lambda, Vercel, and other platforms to create scalable, cost-effective solutions.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Node.js Application</h3>
        <p className="text-gray-300">Looking for a Node.js developer who can deliver clean, maintainable code that solves real business problems? I'm ready to help transform your requirements into robust, scalable applications that stand the test of time.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your Node.js Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}