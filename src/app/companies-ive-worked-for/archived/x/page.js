import CTAButton from '@/ui/cta-button';

export default function XPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">X</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2003</span>
          <span className="mr-4">•</span>
          <span>Software Engineer (Contract)</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            I worked at X for a brief but intense 3-month contract period between my roles at Intel and UpperDeck.
            This short-term position provided valuable lessons about startup culture and the ephemeral nature of
            software projects.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Project Focus</h2>
          <p className="text-gray-300">
            Our team was tasked with building a pre-PayPal payment processing system, primarily using PERL.
            The goal was to create a solution that would allow merchants to easily accept payments through their websites.
            Unfortunately, the project was canceled before completion—teaching me an important lesson about the
            sometimes ephemeral nature of software development initiatives.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Startup Culture & Work Ethic</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Worked 60+ hour weeks in a high-intensity startup environment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Occasionally slept under my desk to maximize productivity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed PERL-based payment processing systems</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Leadership Influence</h2>
          <p className="text-gray-300">
            Though I worked in an adjunct office and never met Elon Musk personally, his leadership style profoundly
            shaped the company culture and my work ethic. Even in those early days when he was relatively unknown,
            he was something of a Steve Jobs figure to the team—elusive but influential.
          </p>

          <p className="text-gray-300 mt-4">
            His occasional company-wide emails, which could be brutally direct about performance expectations,
            created an environment of high standards. Rather than being discouraged by this approach, I found it
            refreshing after coming from larger corporate environments. His uncompromising drive for excellence
            reinforced my belief that dedication and work ethic are paramount in the tech industry.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Key Takeaways</h2>
          <p className="text-gray-300">
            My brief time at X taught me two critical lessons that have stayed with me throughout my career:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
            <li>Software projects can be ephemeral, with even promising initiatives sometimes being canceled before completion</li>
            <li>Nothing trumps drive and dedication—the willingness to put in extraordinary effort often separates successful engineers from the rest</li>
          </ul>
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
