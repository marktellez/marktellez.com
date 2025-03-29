import CTAButton from '@/ui/cta-button';

export default function ReactUYoutubePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">ReactU YouTube</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2016 - 2020</span>
          <span className="mr-4">•</span>
          <span>Content Creator & Educator</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            After my contract at Uber ended, I decided to monetize my skills by creating a YouTube channel focused on teaching
            JavaScript, ReactJS, NextJS, and MongoDB. This entrepreneurial venture allowed me to build an audience while
            deepening my expertise in modern web development technologies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Channel Growth</h2>
          <p className="text-gray-300">
            Operating from my apartment in Mexico City, I grew the channel to 33,000 subscribers and generated approximately
            $7,000 monthly in revenue. This experience taught me valuable lessons about content creation, audience building,
            and the business aspects of technical education.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Accomplishments</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Built an audience of 33,000 subscribers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Created educational content on JavaScript, React, NextJS, and MongoDB</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Generated $7,000 monthly revenue through content monetization</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Business Insights</h2>
          <p className="text-gray-300">
            The YouTube channel served as both a technical and business education. I learned crucial lessons about
            revenue generation, audience development, and professional networking in the tech industry. These skills
            proved valuable in my later entrepreneurial ventures and technical leadership roles.
          </p>

          <p className="text-gray-300 mt-4">
            Creating high-quality educational content required deep understanding of the technologies I taught, pushing
            me to master React and JavaScript ecosystems while developing effective teaching methodologies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">New Horizons</h2>
          <p className="text-gray-300">
            While the channel was successful, I eventually recognized that the significant time investment required for
            content creation was limiting my ability to explore new technical domains. I had begun developing interest in
            machine learning, particularly genetic algorithms, and decided to pivot my career to pursue these emerging
            technologies.
          </p>

          <p className="text-gray-300 mt-4">
            This transition marked an important evolution in my technical journey, as I moved from frontend development
            education to exploring the fascinating world of artificial intelligence and machine learning.
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