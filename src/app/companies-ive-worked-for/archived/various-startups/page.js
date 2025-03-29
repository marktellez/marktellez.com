import CTAButton from '@/ui/cta-button';

export default function VariousStartupsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Various Startups</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2006 - 2012</span>
          <span className="mr-4">•</span>
          <span>Ruby on Rails Developer</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            For about six years, I rode the startup rollercoaster, working with Ruby on Rails across numerous ventures in
            San Francisco and Los Angeles. This period was defined by intense work, adventurous living, and watching
            startup after startup ultimately fail despite our best engineering efforts.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Projects</h2>
          <p className="text-gray-300">
            During this time, I built countless e-commerce platforms and online stores. One of my most ambitious
            projects was a game community management system in Newport Beach that aimed to compete with World of
            Warcraft's community software. These projects pushed the boundaries of what Ruby on Rails could accomplish
            at the time.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Startup Life</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Worked crazy hours, often sleeping on beaches or in offices</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Built e-commerce platforms and gaming community systems with Ruby on Rails</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Spent nights surfing and driving to Big Bear to snowboard</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Work Hard, Play Hard</h2>
          <p className="text-gray-300">
            This period embodied the "Work Hard, Play Hard" ethos that defined early startup culture. I would code
            intensively for days, then recharge by surfing or making impromptu trips to Big Bear for snowboarding.
            The lifestyle was unsustainable but exhilarating—a formative experience that shaped my approach to
            work-life balance in later years.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Business Lessons</h2>
          <p className="text-gray-300">
            Perhaps the most valuable takeaway from these years was understanding that technical excellence alone
            doesn't ensure success. I witnessed firsthand how even the most brilliant engineering teams could fail
            if the business and marketing sides didn't get a break. This lesson in holistic business thinking has
            informed my approach to projects throughout my career.
          </p>

          <p className="text-gray-300 mt-4">
            While none of my stock options ever amounted to anything financially, the experiences, skills, and
            perspectives I gained during this period were invaluable. I had the time of my life, building my
            technical expertise while living an adventure that few developers get to experience.
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