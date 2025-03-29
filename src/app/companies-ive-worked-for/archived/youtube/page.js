import CTAButton from '@/ui/cta-button';

export default function YouTubePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">YouTube</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2005 - 2006</span>
          <span className="mr-4">•</span>
          <span>Web Developer (Contract)</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            At YouTube, I contributed to the development of the original comment system, which was built on an open source
            Bulletin Board framework. While the project primarily used PERL, I had opportunities to write Ruby scripts,
            which aligned with my growing interest in the language at that time.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Contributions</h2>
          <p className="text-gray-300">
            The comment system we developed needed to handle rapidly growing user engagement as YouTube's popularity
            exploded. Working with this early social media feature provided valuable insights into building
            user-generated content systems that could scale effectively.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Experiences</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed components for YouTube's original comment system</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Worked with PERL and Ruby in a high-growth environment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Adapted open source Bulletin Board systems for video commenting</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Learning from Senior Engineers</h2>
          <p className="text-gray-300">
            While my day-to-day responsibilities were relatively straightforward, the experience was invaluable due to
            the exceptional senior engineers I worked alongside. These talented individuals taught me principles of
            building large-scale web systems that could handle massive user growth—knowledge that would prove
            essential throughout my career.
          </p>

          <p className="text-gray-300 mt-4">
            Observing how these experienced engineers approached problems, designed solutions, and implemented
            scalable architectures provided practical education that complemented my technical skills. Their
            mentorship, though informal, significantly influenced my approach to software development.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Career Direction</h2>
          <p className="text-gray-300">
            When my contract concluded, I made the decision to pursue opportunities more focused on Ruby development,
            which had become my primary language of interest. This transition marked an important step in my career
            journey, as I began to more deliberately shape my professional path around technologies I was passionate about.
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
