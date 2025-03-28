import CTAButton from '@/ui/cta-button';

export default function IntelPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Intel</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2001 - 2003</span>
          <span className="mr-4">•</span>
          <span>Jr. Software Engineer</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            At Intel, I was part of a pioneering team building an edge sports streaming service for the NHL and NBA.
            This was during the early days of streaming media, when delivering high-quality video content over the internet
            presented significant technical challenges.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Evolution</h2>
          <p className="text-gray-300">
            Our project began with COM+ components built in C++, focusing on performance and low-level system integration.
            When Microsoft released .NET, we made the strategic decision to migrate to C#, which offered improved development
            efficiency and better integration with Microsoft's emerging web technologies.
          </p>

          <p className="text-gray-300 mt-4">
            This transition period was particularly valuable, as most team members had limited C# experience.
            We effectively learned while building, adapting our development practices to the new paradigm while
            maintaining project momentum.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Contributions</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed streaming media components for delivering sports content to edge devices</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Led the migration from C++ COM+ components to C# .NET architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Implemented efficient caching strategies to optimize content delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Collaborated with NHL and NBA technical teams to ensure seamless integration</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Industry Recognition</h2>
          <p className="text-gray-300">
            During my time at Intel, I published four technical articles with WroxPress, a leading publisher of
            programming books and resources. These articles were featured on the WroxPress homepage and covered topics including:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
            <li>Using Visual Source Safe effectively in large team environments</li>
            <li>Strategies for transitioning from C++ to C# development</li>
            <li>ASP.NET implementation best practices</li>
            <li>Web application architecture in the .NET framework</li>
          </ul>

          <p className="text-gray-300 mt-6">
            This experience at Intel was formative in my career, providing valuable insights into enterprise-scale
            software development, team collaboration during technology transitions, and the emerging field of
            internet video streaming that would later become ubiquitous.
          </p>
        </div>

        <div className="mt-12">
          <CTAButton href="/contact" color="blue">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>CONTACT ME</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
