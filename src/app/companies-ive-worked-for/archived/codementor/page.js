import CTAButton from '@/ui/cta-button';
import Codementor from '@/ui/codementor';

export default function CodeMentorPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Codementor</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2014 - 2020</span>
          <span className="mr-4">•</span>
          <span>Senior Developer & Mentor</span>
        </div>

        <div className="my-8">
          <Codementor />
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            I transitioned from YouTube to Codementor during the platform's peak success, spending nearly 6 years helping
            thousands of students, developers, and companies build software using Ruby on Rails, ReactJS, and JavaScript.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Client-Focused Development</h2>
          <p className="text-gray-300">
            During my time at Codementor, I accumulated almost 500 five-star reviews—a remarkable achievement considering
            how rarely clients leave reviews. This experience taught me invaluable lessons about service, as I worked
            directly with clients rather than reporting to managers disconnected from the end results.
          </p>

          <p className="text-gray-300 mt-4">
            I consistently went above and beyond expectations to serve real humans with real desires and real challenges.
            This direct client interaction provided insights into user needs that traditional employment structures often
            obscure.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Accomplishments</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Earned nearly 500 five-star reviews from clients worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Helped thousands of developers with Ruby on Rails, ReactJS, and JavaScript</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed a reputation for exceeding client expectations</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Business Insights</h2>
          <p className="text-gray-300">
            Despite taking a significant pay cut compared to traditional software engineering roles, I found this period
            immensely rewarding. The experience provided deep insights into running a consulting business, managing client
            relationships, and delivering value directly to end users.
          </p>

          <p className="text-gray-300 mt-4">
            Working with diverse clients across various industries and technical backgrounds enhanced my ability to
            communicate complex concepts clearly and adapt my teaching approach to different learning styles.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Entrepreneurial Transition</h2>
          <p className="text-gray-300">
            When Codementor was acquired by new owners and the platform began to deteriorate, I recognized an opportunity
            to take control of my future. This led me to found DevmentorLive, where I could apply all the lessons learned
            from my years of mentoring while building a business aligned with my values and vision.
          </p>

          <p className="text-gray-300 mt-4">
            This transition from platform-based mentoring to entrepreneurship represented a natural evolution of my career,
            allowing me to continue serving developers while creating a sustainable business model.
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
